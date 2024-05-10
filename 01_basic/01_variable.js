const id = 12345
let email = "abc@gmail.com"
var city = "Arrah"
password = "1234"
let state;
//  id = 123 // it is not changable because constant is not changable.
email = "def@gmail.com"
city = "Patna"
password = "5678"
console.log(id);
console.table([email, city, password, state]);
/* Prefer not to use var because of issue in block scope and functional scope*/