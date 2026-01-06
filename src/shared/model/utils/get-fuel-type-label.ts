export const getFuelTypeLabel = (id: number): string => {
  const fuelTypes: Record<number, string> = {
    2: "Petrol",
    3: "Diesel",
    7: "Electric",
    11: "Hybrid",
    6: "Hybrid",
    10: "Plug-in Hybrid",
    5: "Gas/Petrol",
    8: "Gas (CNG)",
    9: "Gas (LPG)",
    12: "Hydrogen",
  };

  return fuelTypes[id] || "";
};
