import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 max-w-6xl mx-auto mt-10">
      {/* BAGIAN PERTAMA (KIRI): TEKS */}
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          GAYA KASUAL, <br /> KUALITAS PREMIUM.
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Koleksi pakaian premium yang didesain untuk kenyamanan dan estetika
          modern. Bebaskan ekspresimu.
        </p>
        <div>
          <Link
            href="/product"
            className="bg-black  text-white font-medium px-3 py-3 rounded-md transition-colors"
          >
            Belanja Sekarang
            <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>

      {/* BAGIAN KEDUA (KANAN): GAMBAR */}
      <div className="w-full"></div>
    </section>
  );
}
