import { models } from "@/shared/data/models";

export function getModelById(id: number) {
  return models.find((model) => model.id === id);
}
