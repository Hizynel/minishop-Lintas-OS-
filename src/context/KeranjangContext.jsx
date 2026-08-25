import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const KeranjangContext = createContext();

export function KeranjangProvider({ children }) {
    const [item, setItem] = useLocalStorage("Keranjang", []);

    function tambahKeKeranjang(produk) {
        setItem((prev) => [...prev, produk]);
    }

    function hapusDariKeranjang(id) {
    setItem((prev) => prev.filter((produk) => produk.id !== id));
    }

    return (
        <KeranjangContext.Provider value={{ item, tambahKeKeranjang, hapusDariKeranjang }}>
            {children}
        </KeranjangContext.Provider>
    );
}

export function useKeranjang() {
    return useContext(KeranjangContext);
}
