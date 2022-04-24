// // const myCars = {
// //     cars: ['mazda', 'mersedes', 'volvo', 'tayota'],
// //     countru: ['japan', 'jerman', 'finland', 'corean']
// // }

// // console.log(myCars.cars[2]);
// // const newMyCars = myCars;
// // newMyCars.countru[2] = 'china'
// // console.log(newMyCars.countru[2])



// let age_1 = 20;
// const age_2 = 18;
// const age_3 = 60;

// function a() {
//         if (age_1 < age_2) {
//         console.log("You don’t have access cause your age is", age_1, "It’s less then ")
//     } else if (age_1 >= age_2 && age_1 < age_3) {
//         console.log("Welcome !")
//     } else if (age_1 > age_3) {
//         console.log("Keep calm and look Culture channe !")
//     } else {
//         console.log("Technical work")
//     }
// }

// a()



// const freindNames = {
//     mans: ['Igor', 'Alex', 'Ruslan'],
//     girls: ['Regina', 'Sasha']
// }
// const freindNames2 = Object.assign({}, freindNames)
// freindNames2.girlFriends = ['Sasha', 'Prati']
// console.log(freindNames)
// console.log(freindNames2)



const freindNames = {
    mans: ['Igor', 'Alex', 'Ruslan'],
    girls: ['Regina', 'Sasha']
}
const freindNames2 = { ...freindNames}
freindNames2.girlFriends = ['Sasha', 'Prati'];
freindNames2.ages = {manAge: [24, 33, 23], girlsAge: [25, 26]};
// console.log(freindNames)
console.log(freindNames)