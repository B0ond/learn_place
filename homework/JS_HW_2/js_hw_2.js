// const validForm = function (mail) {
//   if (typeof mail == "string") {
//     if (check.length <= 4) {
//       console.log("Eror, need more letters");
//     }
//     console.log("Validate complite");
//   } else {
//     console.log("eror");
//   }
// };
// validForm("212dg12");

function login(check) {
  // let counter
  if (typeof check == "string") {
    if (check.length <= 4) {
      console.log("Short name. Enter from 5 characters");
    } else if (check.length >= 65) {
      console.log("Too long name");
    } else if (!check.match(/[a-zа-яё]/)) {
      console.log("Enter letters");
    } else if (!check.match(/[A-ZА-ЯЁ]/)) {
      console.log("Enter Bigletters");
    } else if (!check.match(/[0-9]/)) {
      console.log("Enter numbers");
    } else if (!check.match(/[@]/)) {
      console.log("Enter @");
    } else {
      console.log("Thank's, it's ok");
    }
  } else {
    console.log("Enter string");
  }
}

login("");
