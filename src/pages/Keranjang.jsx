import { useKeranjang } from "../context/KeranjangContext";

function Keranjang(){
    const { item,hapusDariKeranjang } = useKeranjang();
    const total = item.reduce((sum, p) => sum + p.harga, 0);

    return(
        <div className="bg-gray-900 rounded-4xl w-200 h-auto mt-10 ml-27">
            <h2>Keranjang Belanja</h2>
            {item.map ((p, i) => (
                <div key={i}>{p.title} - Rp {p.price}
                <button className="ml-2 btn btn-danger" onClick={() => hapusDariKeranjang(p.id)}>Hapus</button>
                </div>
            ))}
            <h3 className="mt-15">Total: Rp {total.toLocaleString('id-ID')}</h3>
        </div>
    );
}

export default Keranjang;