interface Props {
  data: Record<string, string | number>;
}

export function DataGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex items-center gap-2">
          <span className="opacity-70">{key}:</span>
          <span className="font-semibold">{value}</span>
        </div>
      ))}
    </div>
  );
}
