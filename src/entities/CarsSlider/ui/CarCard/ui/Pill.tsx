interface Props {
  children: React.ReactNode;
}

export function Pill({ children }: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-black/30 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 font-medium text-white shadow-sm backdrop-blur text-sm sm:text-base md:text-lg">
      {children}
    </div>
  );
}
