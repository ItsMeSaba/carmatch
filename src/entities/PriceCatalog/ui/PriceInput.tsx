interface PriceInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function PriceInput({ label, value, onChange }: PriceInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = parseInt(e.target.value) || 0;
    onChange(numValue);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        placeholder="Enter price"
      />
    </div>
  );
}
