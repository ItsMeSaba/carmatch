interface Props {
  specs: (string | number)[];
}

export function SpecificationsSection({ specs }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {specs.map((spec, index) => (
        <span
          key={index}
          className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700"
        >
          {spec}
        </span>
      ))}
    </div>
  );
}
