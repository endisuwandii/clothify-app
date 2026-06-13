import Link from "next/link";
import Image from "next/image";

import { premium } from "@/data/dummy-data";

export default function ProductPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 mt-10">
      <h1 className="text-3xl font-bold mb-8">Koleksi Premium</h1>

      {/* Grid untuk nampilin 4 baju berjejer ke samping di PC, 1 di HP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Bongkar data array pakai .map() */}
        {premium.map((baju) => (
          <div
            key={baju.id}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={baju.imageUrl}
              alt={baju.name}
              width={500} // Wajib ada
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                {baju.category}
              </span>
              <h2 className="text-lg font-semibold mt-1 truncate">
                {baju.name}
              </h2>
              {/* Format harga jadi Rupiah */}
              <p className="text-gray-900 font-medium mt-2">
                Rp {baju.price.toLocaleString("id-ID")}
              </p>
              <Link
                href={`/product/${baju.id}`}
                className="inline-block w-full text-center bg-gray-100 hover:bg-black hover:text-white text-gray-900 font-medium py-2 rounded-md transition-colors"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
