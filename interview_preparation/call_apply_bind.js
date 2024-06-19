let person = {
  name: "Ganeh",
  age: 35,
};

function introduce(interest, hobby) {
  console.log(
    `My name is ${this.name} and age is ${this.age}. I like ${interest} and ${hobby}`
  );
}

introduce.call(person, "math", "cricket");
introduce.apply(person, ["JS", "Carrom"]);

const bindedFun = introduce.bind(person, "Node");
bindedFun("Kho-kho");
