// Array operations.

let musicStyles = ["Jazz", "Blues"];
musicStyles.push("Rock-n-Roll");

musicStyles[Math.floor((musicStyles.length - 1) / 2)] = "Classics";
console.log(musicStyles);

let msFirstItem = musicStyles.shift();
console.log(msFirstItem);

let otherMusicStyle = ["Rap", "Reggae"];

for (let key of musicStyles) {
  otherMusicStyle.push(key);
}

console.log(otherMusicStyle);
