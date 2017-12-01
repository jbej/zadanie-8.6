var a = prompt("podaj liczbe");
var b = prompt("podaj liczbe");
var value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
    console.log('It is number positive!', value);
}  else if (value < 0) {
    console.log('It is number negative!', value);
}  else if (value == 0) {
    console.log('Number is 0', value);
} else {
    console.log('Number unknown', value);
}