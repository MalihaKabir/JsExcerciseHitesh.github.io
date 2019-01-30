// node arrow2.js

const cameras = {
  price: 600,
  weight: 2000,
  myDes: function(){
    return `This canon camera is of $${this.price}`;
  }
}
console.log(cameras.myDes());

// // Another way to write this function:
// const cameras = {
//   price: 600,
//   weight: 2000,
//   myDes(){
//     return `This canon camera is of $${this.price}`;
//   }
// }
// console.log(cameras.myDes());

// // BUT DO NOT USE ARROW FUNTION HERE:
// const cameras = {
//   price: 600,
//   weight: 2000,
//   myDes: () => {
//     return `This canon camera is of $${this.price}`;
//   }
// }
// console.log(cameras.myDes());
//
// //# please never use arrow function in Method and Constructors. You cannot use them there.


// // THIS IS ONLY FOR Redux people:
// const func = () => ({'key:value'});
