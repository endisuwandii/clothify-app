export type Product = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  category?: string; // Optional, karena belum ada di dummy data
  price: number;
  stock: number;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type Products = Product[];
