"use client";

import { PriceCatalog } from "@/entities/price-catalog/PriceCatalog";

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-5">
      <PriceCatalog />
    </div>
  );
}
