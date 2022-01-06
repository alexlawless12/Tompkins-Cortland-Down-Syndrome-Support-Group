//Parts of this interactivity were designed after the Introductory Interactivity JavaScript Snippets given in class: https://pages.github.coecis.cornell.edu/info1300-2021fa/info1300-2021fa-hosting/interactivity-snippets.html

//Slideshow Slide Buttons:
//when user clicks #slideshow-left-button ("on-click-event" snippet):
$("#slideshow-left-button").click(function() {
  //show previous slide ("prevSlide()" snippet)
  prevSlide();
});

//when user clicks #slideshow-right-button ("on-click-event" snippet):
$("#slideshow-right-button").click(function() {
  //show next slide ("nextSlide()" snippet)
  nextSlide();
});

const SLIDES = $(".slideshowSlide");
const DOTS = $(".slideshowDot");

// CITATION: The below function was modeled after a design snippet found here: (https://pages.github.coecis.cornell.edu/info1300-2021fa/info1300-2021fa-hosting/interactivity-snippets.html)
function nextSlide() {
  let nextNum = SLIDES.index($(".slideshowSlide:not(.hidden)")) + 1 + 1; /* extra +1 is for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

// CITATION: The below function was modeled after a design snippet found here: (https://pages.github.coecis.cornell.edu/info1300-2021fa/info1300-2021fa-hosting/interactivity-snippets.html)
function prevSlide() {
  let prevNum = SLIDES.index($(".slideshowSlide:not(.hidden)")) - 1 + 1; /* extra +1 is for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

// CITATION: The below function was modeled after a design snippet found here: (https://pages.github.coecis.cornell.edu/info1300-2021fa/info1300-2021fa-hosting/interactivity-snippets.html)
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  //Hide all slides, then only show the current slide
  SLIDES.addClass("hidden");
  currentSlide.removeClass('hidden');

  //Update the dot display:
  let currentDot = DOTS.eq(index);
  DOTS.removeClass("selectedDot");
  currentDot.addClass("selectedDot");
}

//Slideshow Dot Buttons:
//when user clicks #slideshow-dot-[number] ("on-click-event" snippet):
$("#slideshow-dot1").click(function() {
  //show corresponding slide (showSlide() snippet)
  showSlide(1);
});

$("#slideshow-dot2").click(function() {
  showSlide(2);
});

$("#slideshow-dot3").click(function() {
  showSlide(3);
});

$("#slideshow-dot4").click(function() {
  showSlide(4);
});

//Advance the slide automatically every 8 seconds
setInterval(function() {
  //Show the next slide
  nextSlide();
},
//Every 8000 milliseconds, or 8 seconds
8000);
