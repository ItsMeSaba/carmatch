export function getSeenPostingIds() {
  const seenPostingIds = localStorage.getItem("seenPostingIds");
  return seenPostingIds ? JSON.parse(seenPostingIds) : [];
}
