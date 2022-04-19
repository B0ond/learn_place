//ex_1,2,3_hm_js_1
let item_1;
item_1 = 5;
console.log(item_1);

//ex_4,5,6_hm_js_1
let item_2;
item_2 = 3;
console.log(item_2);

//ex_7,8,9_hm_js_1
let item_3;
item_3 = item_1 + item_2;
console.log(item_3);

//ex_10,11,12_hm_js_1
let item_4;
item_4 = "Yolochka";
console.log(item_4)

//ex_13_hm_js_1                     сложение
console.log(item_3 + item_4);

//ex_14_hm_js_1                     2 варианта умножить
console.log(item_3 * item_4);
// console.log(item_4.repeat(item_3));

//ex_15,16_hm_js_1
let item_5 = item_3;

//ex_17_hm_js_1
let item_6;

//ex_18_hm_js_1
let item_6_type;

//ex_19_hm_js_1
item_6 = 15;

//ex_20_hm_js_1
item_6_type = typeof(item_6)

//ex_21_hm_js_1
console.log("item_6 == " + item_6 + ", " + "item_6_type == " + item_6_type)

//ex_22_hm_js_1
item_7 = String(item_6);

//ex_23,24_hm_js_1
let item_7_type = typeof(item_7);

//ex_25_hm_js_1
console.log("item_7 == " + item_7 + ", " + "item_7_type == " + item_7_type);

//ex_26,27,28_hm_js_1
let age_1 = 27;
let age_2 = 18;
let age_3 = 60;

//ex_29,30,31,32,33_hm_js_1
if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !")
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channe !")
} else {
    console.log("Technical work")
}