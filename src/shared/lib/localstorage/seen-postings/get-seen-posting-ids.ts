export function getSeenPostingIds(): number[] {
  const seenPostingIds = localStorage.getItem("seenPostingIds");

  try {
    return seenPostingIds ? JSON.parse(seenPostingIds) : [];
  } catch (e) {
    console.error("Error parsing seenPostingIds from localStorage:", e);
    return [];
  }
}
