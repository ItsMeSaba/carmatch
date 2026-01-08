import ArrowLeftIcon from "../assets/arrow-left.svg";
import HeartIcon from "../assets/heart.svg";
import Link from "next/link";

interface Props {
  likedCarsCount: number;
}

export function LikedCarsHeader({ likedCarsCount }: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#FF5A1F]" />
        </Link>

        <h1 className="text-2xl md:text-4xl font-bold text-white text-shadow flex items-center gap-1 md:gap-3">
          <HeartIcon className="w-8 h-8 fill-white" />
          Liked Cars
        </h1>
      </div>

      <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg">
        {/* REFACTOR: Extract hardcoded color #FF5A1F to a CSS variable or theme constant */}
        {/* This color appears multiple times across the codebase and should be centralized */}
        <span className="font-bold text-[#FF5A1F]">
          {likedCarsCount ?? 0} Cars
        </span>
      </div>
    </div>
  );
}
