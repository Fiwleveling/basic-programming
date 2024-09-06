// const me = {
//     firstName: 'Gojoo',
//     lastName: 'Satoru',
//     age: 18 ,
//     nickName: 'Gojo' ,
//     gender: 'XX' ,
//     phone: '1122' ,
//     address: '00' ,
//     village: '-' ,
//     road: '-' ,
//     province: 'Shinjuku' ,
//     district: 'Tokyo' ,
//     zipcode: '102xxx' ,
//     gmail: 'abcdfg@gmail.com',
//     fan: {
//         firstName:'Emma',
//         lastName: 'ahaaa',
//         age: 18,
//         animal: {
//            animalType:'cat',
//            color: 'black',
//        }
//     },
//     myFriend: {
//         firstName: 'Suwannaphum',
//         lastName: 'mahan',
//         AKA: 'สุดหล่อ',

//    }

// }

// console.log(me.myFriend.AKA)


const myFriend = [{
    firstName: 'Suwannaphum',
    lastName: 'mahan',
    aka: 'สุดหล่อ',
    age: 17
}, {
    firstName : 'Kit',
    lastName: 'mahan',
    aka: 'สุดเท่',
    age: 19
}, {
    firstName : 'Pankron',
    lastName: 'mahan',
    aka: 'สุดหล่อเท่',
    age: 19
}, {
    firstName : 'Emma',
    lastName: 'mahan',
    aka: 'สุดสวย',
    age: 19 
}]

console.log(myFriend[0].firstName)


const myFriends = [{
    firstName: 'Suwannaphum',
    lastName: 'mahan',
    AKA: 'สุดหล่อ',
    age: 17
}, {
    firstName : 'Kit',
    lastName: 'mahan',
    AKA: 'สุดเท่',
    age: 21
}, {
    firstName : 'Pankron',
    lastName: 'mahan',
    AKA: 'สุดหล่อเท่',
    age: 24
}, {
    firstName : 'Emma',
    lastName: 'mahan',
    AKA: 'สุดสวย',
    age: 19 
}]

const myFriendsAKA = myFriends.map(function(element, index) {
    return ({
        firstName: element.firstName,
        AKA: element.AKA
    })
})

const myFriendsMoreThan = myFriends.filter(function(element, index){
    return element.age > 19
})

console.log(myFriendsMoreThan)