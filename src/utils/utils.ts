export function truncateString(
  str: string,
  maxCharacters: number = 60
): string {
  if (str.length <= maxCharacters) {
    return str;
  }

  return str.slice(0, maxCharacters) + '...';
}
