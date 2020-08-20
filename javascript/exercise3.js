import users from './users.js'
// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gen) => {
  const findPerState =users.filter(users => users.gender === gen).map(tipe => tipe.name);
  // users.reduce((acc,gen) => acc + gen.gender,[])
  return findPerState;
  // твій код
};

console.log(getUsersWithGender(users, 'male'));
 // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]