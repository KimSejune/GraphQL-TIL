export const people = [
  {
    id: 1,
    name: "Sejune",
    age: 26
  },
  {
    id: 2,
    name: "Suhyun",
    age: 25
  }
];

export const getById = id => { 
  const filterPeople = people.filter(person => person.id === id);
  return filterPeople[0];
}
