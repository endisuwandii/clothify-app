import Link from "next/link";

// WAJIB dibungkus dalam function yang diexport
export function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-start gap-365 items-center bg-white sticky top-0 z-50">
      <Link href="/" className="font-bold text-xl tracking-tight">
        Clothify
      </Link>

      <div className="flex gap-6">
        <Link
          href="/"
          className="hover:underline text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          Beranda
        </Link>
        <Link
          href="/product"
          className="hover:underline text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          Produk
        </Link>
        <Link
          href="/cart"
          className="hover:underline text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          Keranjang
        </Link>
      </div>
    </nav>
  );
}
