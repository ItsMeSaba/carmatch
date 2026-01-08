import HeartIcon from "../assets/heart.svg";
import Link from "next/link";

export function NoLikedCars() {
  return (
    <div className="bg-white/90 rounded-3xl shadow-xl p-12 text-center">
      <HeartIcon className="w-20 h-20 mx-auto mb-4 text-gray-300" />

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        No liked cars yet
      </h2>

      <p className="text-gray-600 mb-6">
        Start swiping right to add cars to your favorites!
      </p>

      <Link
        href="/"
        className="inline-block bg-main hover:bg-main-darker text-white font-semibold py-3 px-8 rounded-full transition-colors"
      >
        Start Browsing
      </Link>
    </div>
  );
}
