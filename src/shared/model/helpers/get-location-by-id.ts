import { locations } from "@/shared/data/locations";

export function getLocationById(id: number) {
  return locations.find((location) => location.id === id)?.title;
}
