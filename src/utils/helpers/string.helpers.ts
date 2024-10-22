export function toCapitalizedWords(str: string): string {
  // Step 1: Split the string by underscore, hyphen, or camel case
  const words = str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Handle camelCase
    .split(/[_\- ]+/); // Split by underscore, hyphen, or space

  // Step 2: Capitalize the first letter of each word and join with a space
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
