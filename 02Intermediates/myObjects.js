// node myObjects.js

// CLASS WORK:
let myYoutubeVideo = {
  title: 'Loops in javaScript',
  videoLength: '15',
  videoCreator: 'Hitesh Choudhary',
  videoDescription: 'this is the description of the course and quite a long one.'
}

console.log(myYoutubeVideo);

// If you want to access any specific value out of this Object, then it's also really simple:
console.log(`Hey! New video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);



// ASSIGNMENT on Objects:
// (Create an object about my course which is Js and has course name, author's name, a price, as well as a description which is,"Hey! There's a new course..." )

let myJsCourse = {
  title: 'JavaScript',
  courseCreator: 'Maliha Kabir',
  coursePrice: '$5',
  courseDescription: 'this is the description of the course and quite a long one.'
}

console.log(myJsCourse);

console.log(`Hey! There's a new course on ${myJsCourse.title} by ${myJsCourse.courseCreator} at a price of ${myJsCourse.coursePrice} and has a description : ${myJsCourse.courseDescription}.`);
