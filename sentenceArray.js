// Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or!

// “May the Force be with you.”    [“May”, “the”, “Force”, “be”, “with”, “you”]

function sentenceConvertArr(string) {
  let resArray = [];
  let word = "";

  for (let i = 0; i < string.length; i++) {
    if (
      (string[i].charCodeAt(0) > 64 && string[i].charCodeAt(0) < 91) ||
      (string[i].charCodeAt(0) > 96 && string[i].charCodeAt(0) < 123)
    ) {
      word += string[i];
    } else {
      if (word.length === 0) continue;
      resArray.push(word);
      word = "";
    }
  }
  return resArray;
}

let sentence = `May the Force be with you.`;

console.log(sentenceConvertArr(sentence));
