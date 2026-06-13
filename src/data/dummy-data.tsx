import type { Product } from "@/types/product";

// Hapus kata 'default' dan sesuaikan namanya jadi 'premium'
export const premium: Product[] = [
  {
    id: "1",
    slug: "kemeja-linen-putih",
    name: "Kemeja Linen Essential Putih",
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e32f6b717?q=80&w=1000&auto=format&fit=crop",
    price: 250000,
    stock: 15,
    description:
      "Kemeja linen premium yang cocok banget buat cuaca panas. Bahan jatuh dan adem.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    slug: "jaket-denim-vintage",
    name: "Jaket Denim Vintage Washed",
    imageUrl:
      "https://images.unsplash.com/photo-1551537482-f209bfc73304?q=80&w=1000&auto=format&fit=crop",
    price: 450000,
    stock: 0,
    description:
      "Jaket denim dengan cuttingan retro yang pas buat gaya streetwear lu.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
