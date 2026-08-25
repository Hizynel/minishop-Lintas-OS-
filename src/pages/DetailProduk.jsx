import { useParams } from "react-router-dom";
import { daftarProduk } from "../data/produk";
import Badge from "../components/badge";
import { useState, useEffect } from "react";

function DetailProduk(){
    const { id } = useParams();
    const [produk, setProduk] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProduk(data);
            setLoading(false);
        });
}, [id]);

    if (loading) return <p>Memuat Produk...</p>;
    if (!produk) return <p>Produk tidak ditemukan</p>;

    return(
            <div className='border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col items-center text-center bg-white dark:bg-gray-800'>
            <Badge label = "Tersedia"/>
            <img 
                src={produk.image} 
                alt={produk.title} 
                className="w-40 h-40 object-cover rounded-lg mb-2"
            />

            <h3 
                className="font-semibold text-base text-blue-300 mt-2">
                {produk.title}
            </h3>
            <h1></h1>
            <p className="text-indigo-600 dark:text-indigo-400 font-bold my-1">Rp {produk.price.toLocaleString('id-ID')}</p>
        </div>
    );
}

export default DetailProduk;