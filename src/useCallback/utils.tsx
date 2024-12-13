// Function to shuffle an array of strings (users)
export const shuffle = (users: string[]): string[] => {
  const shuffled = [...users]; // Create a shallow copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};