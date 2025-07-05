// Function to capitalize the first letter of a string
export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Function to truncate a string to a specified length
export const truncate = (str, length) => {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + "...";
};
