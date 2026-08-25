import {daftarProduk} from "../data/produk";
import ProdukCard from "../components/ProdukCard";
import { useState, useEffect } from "react";

function Home(){
    const [produk, setProduk] = useState([]);
    const [loading, setLoading] = useState(true);
    const [kataKunci, setKataKunci] = useState("");
    const [halaman, setHalaman] = useState(1);
    const perHalaman = 5;
    const produkTersaring = produk.filter((p) => p.title.toLowerCase().includes(kataKunci.toLowerCase()));
    const totalHalaman = Math.ceil(produkTersaring.length / perHalaman);
    const produkDiTampilkan = produkTersaring.slice((halaman - 1 ) * perHalaman,halaman * perHalaman);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProduk(data);
            setLoading(false);
        });
}, []);

    useEffect(() => {
        setHalaman(1);
    }, [kataKunci]);

    if (loading) return <p>Memuat Produk...</p>;

    return(
        <>
        <div>
            <input className="bg-gray-200 rounded-md p-2 m-4 w-1/2 font-black"
                placeholder="Search"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                />
        </div>
        
        <div className="grid-produk bg">
            {produkDiTampilkan.map((p) => (
                <ProdukCard key={p.id} produk={p} />
            ))}
        </div>

        <div className = "flex justify-center items-center gap-4 my-6">
            <button onClick = {() => setHalaman((h) => Math.max(h - 1, 1))} disabled = {halaman === 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                Sebelumnya
            </button>

            <span>
                Halaman {halaman} dari {totalHalaman}
            </span>

            <button onClick={() => setHalaman((h) => Math.min(h + 1, totalHalaman))} disabled = {halaman === totalHalaman} className="pc -4 py-2 bg-gray-300 rounded disabled:opacity-50">
                Selanjutnya
            </button>
        </div>
        </>
        
    );
}
export default Home;