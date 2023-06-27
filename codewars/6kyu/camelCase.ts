// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// camelCase("hello case"); // => "HelloCase"
// camelCase("camel case word"); // => "CamelCaseWord"

export function camelCase(str: string): string {
  return str
    .split(" ")
    .map(
      (word, i) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
