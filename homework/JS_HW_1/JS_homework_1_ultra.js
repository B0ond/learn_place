// // const myCars = {
// //     cars: ['mazda', 'mersedes', 'volvo', 'tayota'],
// //     countru: ['japan', 'jerman', 'finland', 'corean']
// // }

// // console.log(myCars.cars[2]);
// // const newMyCars = myCars;
// // newMyCars.countru[2] = 'china'
// // console.log(newMyCars.countru[2])



// a()






// function myFun(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// let a = myFun(10, 3)


// console.log(a)




// const checkAge = function (age) {
//     const age_min = 18;
//     const age_max = 60;
//     if (typeof (age) == 'number' || typeof (age) == 'string') {  
//         if (age < age_min) {
//             console.log("You don’t have access cause your age is", age, "It’s less then ")
//         } else if (age >= age_min && age < age_max) {
//             console.log("Welcome !")
//         } else if (age > age_max) {
//             console.log("Keep calm and look Culture channe !")
//         } else {
//             console.log("Technical work")
//         }
//     }
//     else {
//         console.log(age, "is not a number")
//     }

// }

// checkAge('12')




const checkAge = function (age) {
    const age_min = 18;
    const age_max = 60;
    age = parseInt(age);
    // console.log(typeof(age), age)
    if (typeof (age) == 'number' || typeof (age) == 'string') {
        if (isNaN(age)) {
            alert(" is not a number")
        }
        else if (age < age_min) {
            alert("You don’t have access cause your age is " + age + " It’s less then ")
        }
         else if (age >= age_min && age < age_max) {
            alert("Welcome !")
        } else if (age > age_max) {
            alert("Keep calm and look Culture channe !")
        } else {
            alert("Technical work")
        }
    }
    
    else {
        alert(age + " is not a number")
    }

}

checkAge(prompt('Enter your age please:'), '')




// const checkAge = function (age) {
//     const age_min = 18;
//     const age_max = 60;
//     age = parseInt(age);
//     // console.log(typeof(age), age)
//     if (typeof (age) == 'number' || typeof (age) == 'string') {
//         if (isNaN(age)) {
//             console.log(age, "is not a number")
//         }
//         else if (age < age_min) {
//             console.log("You don’t have access cause your age is", age, "It’s less then ")
//         }
//          else if (age >= age_min && age < age_max) {
//             console.log("Welcome !")
//         } else if (age > age_max) {
//             console.log("Keep calm and look Culture channe !")
//         } else {
//             console.log("Technical work")
//         }
//     }
    
//     else {
//         console.log(age, "is not a number")
//     }

// }

// checkAge('18dfg')
