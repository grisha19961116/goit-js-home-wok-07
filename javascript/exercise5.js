import users from './users.js'
// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
  const fiendEmail = users.find(user => user.email === email);
  return fiendEmail;
  // твій код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
 // {об'єкт користувача Elma Head}