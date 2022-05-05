export function GenerateID(length = 5): string {
  return (Math.random() + 1).toString(36).substring(length);
}
