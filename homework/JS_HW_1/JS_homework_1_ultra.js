// // const myCars = {
// //     cars: ['mazda', 'mersedes', 'volvo', 'tayota'],
// //     countru: ['japan', 'jerman', 'finland', 'corean']
// // }

// // console.log(myCars.cars[2]);
// // const newMyCars = myCars;
// // newMyCars.countru[2] = 'china'
// // console.log(newMyCars.countru[2])



// a()

// const freindNames = {
//     mans: ['Igor', 'Alex', 'Ruslan'],
//     girls: ['Regina', 'Sasha']
// }
// const freindNames2 = Object.assign({}, freindNames)
// freindNames2.girlFriends = ['Sasha', 'Prati']
// console.log(freindNames)
// console.log(freindNames2)



// const freindNames = {
//   mans: ["Igor", "Alex", "Ruslan"],
//   girls: ["Regina", "Sasha"],
//   ages: {
//     manAge: { virginOff: 18 },
//     girlsAge: [25, 26],
//   },
// };
// const freindNames2 = { ...freindNames };
// freindNames2.girlFriends = ["Sasha", "Prati"]
// freindNames2.ages = { manAge: [24, 33, 25], girlsAge: [25, 26] };
// // console.log(freindNames)
// console.log(freindNames);
// console.log(freindNames2);


// function myFun(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// let a = myFun(10, 3)


// console.log(a)




const checkAge = function (age) {
    const age_min = 18;
    const age_max = 60;
    if (typeof (age) == 'number') {  
        if (age < age_min) {
            console.log("You don’t have access cause your age is", age, "It’s less then ")
        } else if (age >= age_min && age < age_max) {
            console.log("Welcome !")
        } else if (age > age_max) {
            console.log("Keep calm and look Culture channe !")
        } else {
            console.log("Technical work")
        }
    }
    else {
        console.log(age, "is not a number")
    }

}

checkAge('asf')