export function getDisclaimerViewed(): boolean {
  const viewed = localStorage.getItem("disclaimerViewed");

  try {
    return viewed === "true";
  } catch (e) {
    console.error("Error reading disclaimerViewed from localStorage:", e);
    return false;
  }
}
