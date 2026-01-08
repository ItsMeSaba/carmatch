interface Props {
  title: string;
  price: string;
}

export function TitlePriceSection({ title, price }: Props) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-3xl md:text-4xl font-bold text-main mb-4">{price}</p>
    </div>
  );
}
