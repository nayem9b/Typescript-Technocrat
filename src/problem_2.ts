let personInformations1: { name: string; age: number }[] = [
  {
    name: "Arif",
    age: 12,
  },
  {
    name: "Mahir",
    age: 18,
  },
  {
    name: "Shuvo",
    age: 27,
  },
  {
    name: "Riyad",
    age: 5,
  },
  {
    name: "Niloy",
    age: 45,
  },
];
let personInformations2: { name: string; age: number }[] = [
  {
    name: "Arifa",
    age: 51,
  },
  {
    name: "Mahi",
    age: 3,
  },
  {
    name: "Shurovi",
    age: 17,
  },
  {
    name: "Riya",
    age: 18,
  },
  {
    name: "Nilu",
    age: 25,
  },
];

const identifyPerson = (param: { name: string; age: number }[]) => {
  const result = param.filter((information) => information.age >= 18);
  console.log(result);
};

identifyPerson(personInformations1);
identifyPerson(personInformations2);
