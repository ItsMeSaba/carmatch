export const getGearTypeLabel = (id: number): string => {
  const gearTypes: Record<number, string> = {
    1: "Manual",
    2: "Automatic",
    3: "Tiptronic",
    4: "Variator",
  };

  return gearTypes[id] || "";
};
