const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(() => {
//   return tutorials
// })
const titleCased = () => {
  return tutorials.map((sentence) => {
    const paragraph = sentence.split(" ");
    const capitalizedParagraph = paragraph.map(
      (paragraphs) => paragraphs.charAt(0).toUpperCase() + paragraphs.slice(1)
    );
    const response = capitalizedParagraph.join(" ");
    return response;
  });
};