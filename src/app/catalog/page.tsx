"use client";

import { PriceCatalog } from "@/entities/PriceCatalog/PriceCatalog";

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-4">
      <PriceCatalog />
    </div>
  );
}
