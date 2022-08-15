export const codeSnippets = [
  {
    code: `function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (n == stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair && stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}
  `,
    timestamp: '2021-01-20',
    starCount: 0,
    details:
      'Recursive function that accepts a positive number N and prints a step shape of N levels using the # character.',
  },
  {
    code: `function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
  `,
    timestamp: '2021-01-20',
    starCount: 0,
    details:
      'Using array helpers, this function takes a given string and reverses the order of characters',
  },
  {
    code: `function capitalize(str) {
  const words = str.split(" ");

  let res = [];
  for (word of words) {
    res.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return res.join(" ");
}
  `,
    timestamp: '2021-01-20',
    starCount: 0,
    details:
      'Function that capitalizes the first letter of each word in a string',
  },
];
