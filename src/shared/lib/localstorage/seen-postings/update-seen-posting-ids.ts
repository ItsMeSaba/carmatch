import { getSeenPostingIds } from "./get-seen-posting-ids";

export function updateSeenPostingIds(ids: number[]) {
  const seenPostingIds = getSeenPostingIds();

  console.log("updaing seen ids", ids);

  localStorage.setItem(
    "seenPostingIds",
    JSON.stringify([...seenPostingIds, ...ids])
  );
}
