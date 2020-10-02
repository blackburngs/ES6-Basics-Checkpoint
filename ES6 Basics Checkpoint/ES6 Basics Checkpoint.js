const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 },
  ];
  ​
  const getAge = (pet) => new Date().getFullYear() - pet.bornOn;
  ​
  const petsWithAge = pets.map((pet) => {
    let pet1 = { ...pet };
    pet1.age = getAge(pet);
    return pet1;
  });
  ​
  console.log(petsWithAge);
  ​
  const dogs = pets.filter((pet) => pet.type === "dog");
  ​
  console.log(dogs);
  ​
  const jasper = petsWithAge.find((pet) => pet.name === "Jasper");
  ​
  console.log(`Jasper is ${jasper.age} years old`);
  ​
  console.log(jasper);
  