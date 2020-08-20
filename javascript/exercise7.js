import users from './users.js'
// Завдання 7
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = users => {
    const amountAllUsers = users.reduce((acc,val) => acc + val.balance,0);
    return amountAllUsers;
  // твій код
};

console.log(calculateTotalBalance(users)); // 20916