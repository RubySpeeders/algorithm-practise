// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//My solution:

//WIP

export const pigIt = (a: string): string => {
  // code away
  const answer = a.match(/\b\w+\b|[^\s]/g);
  let result = "";
  if (answer !== null) {
    let temp = answer.map((word) => {
      const wordSplit = word.split("");
      if (!/[^a-zA-Z]/.test(word)) {
        wordSplit.push(wordSplit.slice(0, 1)[0]);
        wordSplit.shift();
        wordSplit.push("ay");
      }
      return wordSplit.join("");
    });
    console.log(temp);
    result = temp.join(" ");
    console.log(temp.join(" "));
  }
  return result;
};
