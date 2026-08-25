import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KeranjangProvider, useKeranjang } from "./KeranjangContext";

describe("KeranjangContext", () => {
  it("menambahkan produk ke keranjang", () => {
    const { result } = renderHook(() => useKeranjang(), {
      wrapper: KeranjangProvider,
    });

    act(() => {
      result.current.tambahKeKeranjang({ id: 1, nama: "Kaos Polos", harga: 75000 });
    });

    expect(result.current.item.length).toBe(1);
  });
});