export function getLikedPostings() {
  const likedPostings = localStorage.getItem("likedPostings");

  return likedPostings ? JSON.parse(likedPostings) : [];
}
