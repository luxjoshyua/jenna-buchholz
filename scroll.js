
// can call the const whatever you want
// finds the div with a class of pixels
const pixelsTag = document.querySelector("div.pixels")


// when we scroll the page, update the pixels tag to be how far we've scrolled
document.addEventListener("scroll", function () {
  // console.log("scroll")
  // want to see how far we've scrolled on the y-direction
  const pixels = window.pageYOffset

  // finds the variable from above
  // console.log(pixels)

  // changes the pixels tag to be the value of the pixels
  pixelsTag.innerHTML = pixels + ' pixels scrolled'



})