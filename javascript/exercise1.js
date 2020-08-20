import users from './users.js'
// Завдання 1
// Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
  // твій код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 
// 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
