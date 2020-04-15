//////STORING DATA WITH JSON////////

const fs = require("fs");
const movie = {
  movieName: "hound of bhaskerville",
  author: "sherlockholems"
};
const movieJSON = JSON.stringify(movie);
// console.log(movieJSON);
// const parsingJSON = JSON.parse(movieJSON);
// console.log(parsingJSON);
//fs.writeFileSync("jnote.js", movieJSON);
//const databuffer = fs.readFileSync("jnote.js");
//console.log(databuffer);
//const dataPrint = JSON.stringify(databuffer);
//console.log(dataPrint);
// const dataPrint = JSON.parse(databuffer);
// console.log(dataPrint.movieName);
const databuffer = fs.readFileSync("jnote.js");
const dataPrint = JSON.parse(databuffer);
//console.log(dataPrint);
dataPrint.movieName = "50shades";
dataPrint.author = "sandeep";

const dataPrintJSON = JSON.stringify(dataPrint);
fs.writeFileSync("jnote.js", dataPrintJSON);
console.log(dataPrintJSON);
