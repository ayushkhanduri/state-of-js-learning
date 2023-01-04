// copied the example from the state of js website cause i suck at regex
// indices array stores the start and end positions of each matched capture group 

// const str1 = "foo bar foo";
// const regex1 = /foo/dg;
// console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]

// one cool example https://v8.dev/features/regexp-match-indices

function displayError(text, message) {
  const re = /\b(continue|function|break|for|if)\b/d;
  const match = text.match(re);
  // Index `1` corresponds to the first capture group.
  const [start, end] = match.indices[1];
  const error = ' '.repeat(start) + // Adjust the caret position.
    '^' +
    '-'.repeat(end - start - 1) +   // Append the underline.
    ' ' + message;                  // Append the message.
  console.log(text);
  console.log(error);
}

const code = 'const function = foo;'// faulty code
displayError(code, 'Invalid variable name');
