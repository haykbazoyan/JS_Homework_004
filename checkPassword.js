// Check Password validation

function checkPassword(password) {
  if (password.length < 6 || password.length > 16) {
    return `Invalid`;
  }
  let check = true;
  let trueAnswers = [false, false, false, false];

  for (let i = 0; i < password.length; i++) {
    if (password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122) {
      trueAnswers[0] = true;
    } else if (
      password[i].charCodeAt(0) >= 65 &&
      password[i].charCodeAt(0) <= 90
    ) {
      trueAnswers[1] = true;
    } else if (
      password[i].charCodeAt(0) >= 48 &&
      password[i].charCodeAt(0) <= 57
    ) {
      trueAnswers[2] = true;
    } else if (
      password[i].charCodeAt(0) === 35 ||
      password[i].charCodeAt(0) === 36 ||
      password[i].charCodeAt(0) === 64
    ) {
      trueAnswers[3] = true;
    } else return `Invalid`;
  }
  //console.log(trueAnswers);
  for (let key of trueAnswers) {
    if (key === false) return `Invalid`;
  }

  return `Valid`;
}
let pass = `asd@$SD1`;
console.log(checkPassword(pass));
