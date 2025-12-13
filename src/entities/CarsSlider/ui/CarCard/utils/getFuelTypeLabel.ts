export const getFuelTypeLabel = (id: number): string => {
  const fuelTypes: Record<number, string> = {
    1: "Petrol",
    2: "Diesel",
    3: "Hybrid",
    4: "Electric",
    5: "LPG",
    6: "CNG",
  };

  return fuelTypes[id] || "";
};
