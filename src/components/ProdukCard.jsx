import Badge from "./badge";
import { Link } from "react-router-dom";
import { useKeranjang } from "../context/KeranjangContext";

function ProdukCard({ produk }) {
    const { tambahKeKeranjang } = useKeranjang();

    return (
        <div className='border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col items-center text-center bg-white dark:bg-gray-800'>
            <Badge label="Tersedia" />

            <img 
                src={produk.image} 
                alt={produk.title} 
                className="w-40 h-40 object-cover rounded-lg mb-2" 
            />

            <h3 className="font-semibold text-base text-blue-300 mt-2">
                {produk.title}
            </h3>

            <p className="text-indigo-600 dark:text-indigo-400 font-bold my-1">
                Rp {produk.price.toLocaleString('id-ID')}
            </p>

            <button 
                onClick={() => tambahKeKeranjang(produk)} 
                className="mt-3 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow transition cursor-pointer">
                Tambah Ke Keranjang
            </button>

            <Link to={`/produk/${produk.id}`} 
                className="mt-3 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow transition cursor-pointer">
                <button>Detail Produk</button>
            </Link>
        </div>
    );
}

export default ProdukCard;