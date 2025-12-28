import { getSeenPostingIds } from "./get-seen-posting-ids";

export function updateSeenPostingIds(ids: number[]) {
  const seenPostingIds = getSeenPostingIds();

  localStorage.setItem(
    "seenPostingIds",
    JSON.stringify([...seenPostingIds, ...ids])
  );
}
