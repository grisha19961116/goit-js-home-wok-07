import users from './users.js'
// Завдання 9
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = users => {
    const sorting = users.sort(function(a,b){
        let c = a.friends;
        let d = b.friends;
        if( c < b ){
            return -1;
        }else if( c > b ){
            return 1;
        }
        return 0;
    }).map(tipe => tipe.name).reverse();

    return sorting;
  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

