interface Props {
  onViewDetails?: () => void;
  onRemove?: () => void;
}

export function ActionButtonsSection({ onViewDetails, onRemove }: Props) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onViewDetails}
        className="cursor-pointer flex-1 bg-[#FF5A1F] hover:bg-[#ff4d0d] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
      >
        View Details
      </button>

      <button
        onClick={onRemove}
        className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
      >
        Remove
      </button>
    </div>
  );
}
