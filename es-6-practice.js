// 1. Let Const Practice:

const a = 25;
// a = 20 //I can't update  this value as I have declare const

let b = 50;
b = 100 //This is valid as I have declared it with let.

//Moral: When we declare a variable with a const then I can't update it, But I can update it when I declare a variable with let.

//2.a: Use Variable in template string:
const university = 'Khulna University';
const name = 'Abdullah Al Akash'
const student = `Hello this is ${name} read in ${university}.`;
console.log(student);

// 2.b: Use Object Property in template string dynamically:
const product = {
        name: 'Samsung Galaxy S17',
        price: 35000,
        color: 'black'
}
const productDetail = `This phone's name is ${product.name} and price is ${product.price} as well as color is ${product.color}.`;
console.log(productDetail);

//3.a: By using arrow function, receive one parameter and return a number after divide by 5:
const divideByFive = a => a / 5;
console.log(divideByFive(50));

//3.b: By using arrow function, receive two parameter and add two with both parameter and return these multiplication:
const multiply = (a, b) => (a + 2) * (b + 2);
console.log(multiply(2, 3));