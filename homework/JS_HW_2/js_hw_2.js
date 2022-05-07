// function login(check) {
//   if (typeof check == "string") {
//     if (check.length <= 4) {
//       console.log("Short name. Enter from 5 characters");
//     } else if (check.length >= 65) {
//       console.log("Too long name");
//     } else if (!check.match(/[a-zа-яё]/ && /[A-ZА-ЯЁ]/)) {
//       console.log("Enter letters");
//     } //else if (!check.match(/[A-ZА-ЯЁ]/)) {
//     //console.log("Enter Bigletters"); }
//     else if (!check.match(/[0-9]/)) {
//       console.log("Enter numbers");
//     } else if (!check.match(/[@]/)) {
//       console.log("Enter @");
//     } else {
//       console.log("Thank's, it's ok");
//     }
//   } else {
//     console.log("Enter string");
//   }
// }

// login("34dDs@");

//Through browser
// function login(check) {
//   if (typeof check == "string") {
//     if (check.length <= 4) {
//       alert("Short name. Enter from 5 characters");
//     } else if (check.length >= 65) {
//       alert("Too long name");
//     } else if (!check.match(/[a-zа-яё]/)) {
//       alert("Enter letters");
//     } else if (!check.match(/[A-ZА-ЯЁ]/)) {
//       alert("Enter Bigletters");
//     } else if (!check.match(/[0-9]/)) {
//       alert("Enter numbers");
//     } else if (!check.match(/[@]/)) {
//       alert("Enter @");
//     } else {
//       alert("Thank's, it's ok");
//     }
//   } else {
//     alert("Enter string");
//   }
// }

// login(prompt("Chek me", ""));

// Using regular expression

// function removeCc(str){
//   return str.replace(/([A-Z])/g, ' $1')
// }
// console.log(removeCc('сamelCase'))

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);
