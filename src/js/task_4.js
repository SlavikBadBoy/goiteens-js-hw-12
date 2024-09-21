const countTotalSalary = (employees) => {
  let totalSalary = 0;

  for (const salary in employees) {
    totalSalary += employees[salary];
  }

  return totalSalary;
};

const employees = {
  Vanessa: 1000,
  Orange: 1500,
  Ajax: 2000,
  Watermelon: 3500,
};


console.log(`Загальна зарплата - ${countTotalSalary(employees)}`);
