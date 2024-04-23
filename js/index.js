const heading = document.querySelector("#myHeading");
// why is this not running?
heading.addEventListener("mouseover", function() {
  this.style.color = "red"; // plz fucking change colors
});
// line by line is fine
heading.addEventListner("mouseout", function() {
  this.style.color = "black"; //la la la change back
  //wait maybe this isnt working can css override
});
// update it was js/index.js murder myself :)