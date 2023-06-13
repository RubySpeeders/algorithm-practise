// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

//My Solution:

export function meeting(s: string): string {
  const temp = s.toUpperCase().split(';').map((item)=>item.split(':'))
  temp.map(item=>{
      let myArray = item;
     const swapElements = (array: string[], index1: number, index2: number) => {
    [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
};
  swapElements(item, 0, 1)
 })
  return temp.map(item => `(${item.join(', ')})`).sort().join('')
}

//Another Solution:

export function meeting2(s: string): string {
  return s.toUpperCase().split(';').map((item)=>item.split(':').reverse().join(', ')).map(item=>`(${item})`).sort().join('')
}