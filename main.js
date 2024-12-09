//  parsefloat practice
const firstnumber = parsefloat (prompt('what is first number?'));
console.log('first number' , firstnumber)

const number =  parsefloat(prompt('what is second number?'));
console.log('second number' ,number)

alert(`Your result is ${firstnumber + number}`)

//   how to give total amount with discount


const name = prompt('what is your name?');
console.log('Name' , name)

const amount =  parsefloat(prompt('what is total amount?'));
console.log('amount' ,amount)

//  alert(`Your Total amount with 10% discount  is ${purchaseAmount * discount / 100 , finalAmount = purchaseAmount - discountAmount}))
alert(`Your Total amount with 10% discount  is ${amount * 10 / 100} finalAmount ${amount - 10}`)


// talk with user
const animalname = prompt('What Is Your Favourite Animal Name?');
console.log('Animal Name' , animalname)

alert (`Wow! ${animalname} are amazing creatures`)
 let userName = prompt('What is your name?');