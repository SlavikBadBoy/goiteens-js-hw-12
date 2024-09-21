const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      bestEmployee = name;
      maxTasks = employees[name];
    }
  }

  return bestEmployee;
}
const employees = {
  Ajax: 29,
  Watermelon: 35,
  Orange: 18,
  Vanessa: 37,
};
console.log(`Найпродуктивніший співробітник ${findBestEmployee(employees)}`);