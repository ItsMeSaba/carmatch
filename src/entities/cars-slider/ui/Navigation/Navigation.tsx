import Link from "next/link";

export function Navigation() {
  return (
    <div className="absolute top-3 sm:top-4 right-3 sm:right-6 flex gap-2 sm:gap-3">
      <Link
        className="bg-white py-1.5 sm:py-2 px-3 sm:px-5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-50 transition-colors"
        href="/catalog"
      >
        Catalog
      </Link>

      <Link
        className="bg-white py-1.5 sm:py-2 px-3 sm:px-5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-50 transition-colors"
        href="/likes"
      >
        Liked Cars
      </Link>
    </div>
  );
}
