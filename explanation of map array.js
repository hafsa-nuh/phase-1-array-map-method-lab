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

const titleCased = () => {
    return tutorials.map((sentence) => { // our aray is written as a string so we mapped it into a new array
        const paragraph = sentence.split(" "); // we used splice to separate each string as each letter string [ 'what', 'does', 'the', 'this', 'keyword', 'mean?']
        console.log(paragraph)
        const capitalizedParagraph = paragraph.map( // we map the paragraph array into a new array so that we can capitalize it
            (paragraphs) => paragraphs.charAt(0)/**chartAt the character at the specific index (h/ a/ b) this charAt returns each 1st letter a each word  */.toUpperCase() /** to capitalize letters */ + paragraphs.slice(1) //we used slice methode so that only the 1st letters are capitalized
        );
        console.log(capitalizedParagraph)
    })
}
titleCased()