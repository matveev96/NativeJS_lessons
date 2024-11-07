const arr = [1, 2, 3, 4]
// arr.push(5)
// console.log(arr)
//
const newArr = [...arr, 123]
// newArr.map(num => num === 2 ? [...arr, 44] : num)
newArr[1] = 33
console.log(newArr)
//
// const newArr2 = arr.filter((num) => num != 1)
// console.log(newArr2)
//
// console.log(arr === newArr)


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

const nextUser = {
    id: 123,
    name: 'Alian',
    isStudent: true,
}
//Двумя способами можно мутабельно изменить в массиве данные. При помощи spread и map
const usersNew = [
    ...users.slice(0,2),
    {...users[2], id: 14},
    ...users.slice(3)
];
// const usersNew = users.map(user => user.id === 3 ? {...user, id: 45} : user);


console.log(usersNew)
console.log(users === usersNew)


const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}

const newSuperUser = {
    ...superUser,
    id: 15,
    address: {
        ...superUser.address,
        street: 'qwerty',
        geo: {
            ...superUser.address.geo,
            lat: '0000000'
        }
    }
}


console.log(newSuperUser)