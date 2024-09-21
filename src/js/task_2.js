const countProps = (object) => Object.keys(object).length;

const object = {
  name: "Watermelon",
  age: 25,
  hobby: "programming",
  mood: "happy",
  email: "watermelon@post.com",
};
const propsCount = countProps(object);
console.log(`Кількість властивостей: ${propsCount}`);
