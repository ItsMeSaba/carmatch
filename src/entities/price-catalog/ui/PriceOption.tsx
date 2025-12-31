interface PriceOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function PriceOption({ label, isSelected, onClick }: PriceOptionProps) {
  const styles = isSelected
    ? "bg-main text-white shadow-md"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 cursor-pointer rounded-lg font-medium transition-all ${styles}`}
    >
      {label}
    </button>
  );
}
