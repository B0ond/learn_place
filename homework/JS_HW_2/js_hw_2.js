function login(check) {
  // let counter
  if (typeof check == "string") {
    if (check.length <= 4) {
      console.log("Short name. Enter from 5 characters");
    } else if (check.length >= 65) {
      console.log("Too long name");
    } else if (!check.match(/[a-zа-яё]/ && /[A-ZА-ЯЁ]/)) {
      console.log("Enter letters");
    } //else if (!check.match(/[A-ZА-ЯЁ]/)) {
    //console.log("Enter Bigletters"); }
    else if (!check.match(/[0-9]/)) {
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

login("345645@аа");

// function login(check) {
//   // let counter
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
