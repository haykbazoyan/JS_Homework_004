// Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let summery = 0;
for (let key in salaries) {
  summery += salaries[key];
}
