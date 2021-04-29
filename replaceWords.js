// 12. Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array.

// “_, we have a _.” [“Houston”, “problem”]

let sentence = `_, we have a _.`;
let arrWords = [`Houston`, `problem`];
let newSentence = ``;
let iterationForWords = 0;

for (let key of sentence) {
  if (key === `_`) {
    newSentence += arrWords[iterationForWords];
    iterationForWords += 1;
  } else newSentence += key;
}

console.log(newSentence);
