// node myObjects2.js

let myYouTubeVideos = {
  title: 'Loops in JavaScript',
  videoLength: 15,
  videoCreator: 'Hitesh',
  videoDescription: 'This is one ...',
}

// console.log(myYouTubeVideos);

// myYouTubeVideos.title = 'Js'
// console.log(`New video on ${myYouTubeVideos.title} by ${myYouTubeVideos.videoCreator}`);




let myYouTubeVideosOne = {
  title: 'Loops in JavaScript',
  videoLength: 15,
  videoCreator: 'Hitesh',
  videoDescription: 'This is one ...',
}

let myYouTubeVideosTwo = {
  title: 'Functions in JavaScript',
  videoLength: 10,
  videoCreator: 'Hitesh',
  videoDescription: 'This is one ...',
}

let changeVideoLength = function (myObject) {
  return {
    formatOne: `Time duration of this video is ${myObject.videoLength + 5}`,
    formatTwo: `Time duration of this video is ${myObject.videoLength + 2}`,
  }
}

let adOne = changeVideoLength(myYouTubeVideosTwo)

console.log(adOne.formatOne);
