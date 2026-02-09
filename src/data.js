const animals = [
  {
    name: "cat",
    sound: "meow",
    feedings: {
      food: 3,
      drink: 2,
    },
  },
  { name: "dog", sound: "woof" },
];

function useAnimals(animal) {
  return (
    animal.name,
    function () {
      console.log(animal.sound);
    }
  );
}

export default animals;
