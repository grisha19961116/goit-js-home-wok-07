import users from './users.js'
// Завдання 8
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
    const whoHasFriend = users.filter(user => user.friends.includes(friendName)).map(tipe => tipe.name);
    return whoHasFriend;
  // твій код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]