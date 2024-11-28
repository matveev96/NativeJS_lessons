// Первый урок native js, Иммутабельность

const arr = [1, 2, 3, 4]
// arr.push(5)
// console.log(arr)
// Добавляем иммутабельно данные в массив при помощи spread
const newArr = [...arr, 123]
newArr[1] = 33
// console.log(newArr)
//
const newArr2 = arr.filter((num) => num != 2)
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
    ...users.slice(0, 2),
    {...users[2], id: 14, name: 'Denis'},
    ...users.slice(3),
    nextUser
];
// const usersNew = users.map(user => user.id === 3 ? {...user, id: 45} : user);
// console.log(usersNew)

const usersNew2 = usersNew.filter(user => user.id !== 1)


// console.log(usersNew2)

// console.log(users === usersNew)


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


// console.log(newSuperUser)

//--------------------------------------------------------------------
// Третий урок native js. Методы slice, splice, toSpliced, reduce

//slice => itSlice делаем как метод массива через this
const numsLiteral = [1, 2, 3, 4, 5, 6, 7, 8]
const numsFunc = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

function itSlice(startIndex = 0, endIndex = this.length) {
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(this[i]);
    }
    return result
}

Array.prototype.itSlice = itSlice //Array.prototype - это родитель всех массивов, т.е. Array - отец (функция, обьект), у которого есть прототипы, все методы массивов. т.е. используя 10 массивов используется один родитель,чтобы взять у него методы

console.log(numsFunc.itSlice(2))

//filter => itFilter делаем как метод массива через this

Array.prototype.itFilter = function (checkFunc) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (checkFunc(this[i])) {
            result.push(this[i]);
        }
    }
    return result
}

const checkFuncInFilter = (n) => {
    return n % 2 === 0
}

const even = numsFunc.itFilter(checkFuncInFilter)

console.log(even)

//map => itMap

function itMap(array, mapFunction) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const newEl = mapFunction(array[i])
        result.push(newEl);
    }
    return result
}

console.log(itMap(numsFunc, n => n / 2))

//reduce => itReduce

function itReduce(array, reducer, startVal) {
    let start = startVal
    for (let i = 0; i < array.length; i++) {
        start = reducer(start, array[i]);
    }
    return start
}

console.log(itReduce(numsFunc, (acc, el) => acc + el, 0))

console.log(numsFunc.reduce((acc, el) => acc += el, 0))


// Задача: необходимо взять из массива данные и сделать из них обьект, где ключ - число, а значение, количество этих чисел
const arr2 = [1, 3, 4, 45, 56, 7, 65, 65, 4, 34, 5, 2, 1]

const obj = {
    '1': 3,
    '2': 5,
    '3': 6
}

//первый вариант
function arrToObj(array) {
    let result = {}
    for (let i = 0; i < array.length; i++) {
        if (result[array[i]]) {
            result[array[i]]++
        } else {
            result[array[i]] = 1
        }
    }
    return result
}

console.log(arrToObj(arr2))

//второй вариант
function arrToObjO(array) {
    let result = {}
    for (let i = 0; i < array.length; i++) {
        const num = array[i]
        result[num] = (result[num] || 0) + 1
    }
    return result
}

console.log(arrToObjO(arr2))

//третий вариант с reduce
console.log(arr2.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
}, {}))


//полифил метода splice

function itSplice(array, startIndex, deletCount, ...newElements) {
    const result = []
    const endIndex = startIndex + deletCount
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i])
        array[i] = array[i + deletCount]
    }
    array.length = array.length - deletCount
    if (newElements.length) {
        for (let j = 0; j < newElements.length; j++) {
            array[array.length] = array[startIndex + j]
            array[startIndex + j] = newElements[j]
        }
    }
    return result
}

//Sprint 1 week 4

const todolistId_1 = crypto.randomUUID()
const todolistId_2 = crypto.randomUUID()


const todolist = [
    {
        id: todolistId_1,
        title: "what to learn",
        filter: "all",
    },
    {
        id: todolistId_2,
        title: "what to buy",
        filter: "all",
    },

]


const tasks = {
    [todolistId_1]: [
        {id: 12, title: "HTML"},
        {id: 13, title: "CSS"},
        {id: 14, title: "REACT"},
    ],
    [todolistId_2]: [
        {id: 22, title: "HTML"},
        {id: 23, title: "CSS"},
        {id: 24, title: "REACT"},
    ]
}

function createObject(key, value) {
    return {
        [key]: value,
    }
}

createObject('car', 'Audi')
// получаем объект { car: 'Audi' }

let prefix = 'user_'

let user = {
    [prefix + 'id']: 123,
    [prefix + 'name']: 'Alice',
}

console.log(user) // { user_id: 123, user_name: 'Alice' }

for (const key in todolist[0]) {
    console.log(todolist[0][key])
}

// 1. Создал переменную для каждого статуса
const STATUS_BUSY = 'busy'
const STATUS_READY = 'ready'
// 2. Использовала вычисляемые свойства
const STATUS_LABELS = {
    [STATUS_BUSY]: 'Ожидает',
    [STATUS_READY]: 'Готов',
}
// 3. Получил массив из БД
const drivers = [
    { name: 'Павел', status: 'busy' },
    { name: 'Сергей', status: 'ready' },
]
// 4. Перевел статусы в нужный (человеческий) формат
const driverStatuses = drivers.map(driver => {
    const { status } = driver
    return STATUS_LABELS[status]
})
console.log(driverStatuses)
// Array [ "Ожидает", "Готов" ]

