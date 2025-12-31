export const getFuelTypeLabel = (id: number): string => {
  const fuelTypes: Record<number, string> = {
    2: "Petrol",
    3: "Diesel",
    7: "Electric",
    11: "Hybrid",
    5: "Gas/Petrol",
    12: "Hydrogen",
  };

  return fuelTypes[id] || "";
};
