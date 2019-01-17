
// can call the const whatever you want
// finds the div with a class of pixels
const pixelsTag = document.querySelector("div.pixels")


// find the body
const bodyTag = document.querySelector("body")


const progressTag = document.querySelector("div.progress")


const sections = document.querySelectorAll("section")
// using querySelector just selects the one
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")


// when we scroll the page, update the pixels tag to be how far we've scrolled
document.addEventListener("scroll", function () {
  // console.log("scroll")
  // want to see how far we've scrolled on the y-direction
  const pixels = window.pageYOffset

  // finds the variable from above
  // console.log(pixels)

  // changes the pixels tag to be the value of the pixels
  pixelsTag.innerHTML = pixels + ' pixels scrolled'
  

  // pixelsTag.innerHTML = `${pixels} pixels scrolled`

})


// when we scroll the page, make a progress bar that keeps track of the distance
document.addEventListener("scroll", function () {

  // fine to use pixels again as the constant
  // because it's in the same box
  const pixels = window.pageYOffset

   // gives you the height of 3200 
  const pageHeight = bodyTag.getBoundingClientRect().height 


  // find the total scrollable distance which is
  // page height - window height

  const totalScrollableDistance = pageHeight - window.innerHeight

  // pixels divided by total scrollable distance/entire thing

  const percentage = pixels / totalScrollableDistance


  // gives you scrollbars going down the page
  // progressTag.style.width = "5px"
  // progressTag.style.height = `${100 * percentage}%`

  progressTag.style.width = `${100 * percentage}%`

})


// document.querySelector("body").getBoundingClientRect()
// gives you the size of the page not window


// whole list of things you can do with this, e.g. classList and innerHTML
// document.querySelector("section.s2").classList
// document.querySelector("section.s2").innerHTML will give you all the html within that section
// that has a class of s2

// document.querySelector("section.s3").offsetTop will give you the distance that section is from
// the top of the page


// when we scroll the page, see how far down the page we've scrolled
// then for each section, check whether we've passed it and if we have....
// then update the text in the header

document.addEventListener("scroll", function () {

  const pixels = window.pageYOffset

  // using the arrow is a shortcut function, still does the same thing
  sections.forEach(section => {
    // offsetTop is equal to or less than pixels
    // - 100 gives it a bit of padding before the text changes because the threshold is 50px less in the viewport
    if (section.offsetTop - 50 <= pixels) {
      // clientTag.innerHTML = "test1234" "test1234" is a string that doesn't update, hence won't work
      clientTag.innerHTML = section.getAttribute("data-client")
      pageTag.innerHTML = section.getAttribute("data-page")
    }
  })
})