interface Props {
  children: React.ReactNode;
}

export function Pill({ children }: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-black/30 px-3 py-1 font-medium text-white shadow-sm backdrop-blur text-lg">
      {children}
    </div>
  );
}
