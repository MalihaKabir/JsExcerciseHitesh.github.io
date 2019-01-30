// node practice.js

const camera = {
  price: 600,
  weight: 2000,
  myDes(){
    return `This Canon camera is of ${this.price}$.`
  }
}
console.log(camera.myDes());

// For Redux people:
const func = () => ({'key:value'});



// // factory function:
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     }
//   }
// }
// const circle = createCircle(2)
// circle.draw()
