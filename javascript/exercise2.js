import users from './users.js'
// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const findEye = users.filter(user => user.eyeColor === color);
  return findEye;
  // твій код
};

console.log(getUsersWithEyeColor(users, 'blue')); 
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]