interface PriceOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function PriceOption({ label, isSelected, onClick }: PriceOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-lg font-medium transition-all ${
        isSelected
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
