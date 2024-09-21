const products = [
  { category: "fruits", name: "Watermelon", price: 120, quantity: 10 },
  { category: "goods", name: "Nuts", price: 20, quantity: 300 },
  { category: "fruits", name: "Apple", price: 40, quantity: 70 },
  { category: "goods", name: "Potato", price: 15, quantity: 750 },
];

const getAllPropValues = (arr, prop) => {
  const properties = [];

  for (const product of arr) {
    if (prop in product) {
      properties.push(product[prop]);
    }
  }

  return properties;
};
console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));
