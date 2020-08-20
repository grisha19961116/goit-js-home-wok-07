import users from './users.js'
// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => {
  const isNotActive = users.filter(user => !user.isActive).map(tipe => [tipe.name]);
  // зрозумів так,обєкт з обєктами [name]!
  return isNotActive;
  // твій код
};

console.log(getInactiveUsers(users)); 
// [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]