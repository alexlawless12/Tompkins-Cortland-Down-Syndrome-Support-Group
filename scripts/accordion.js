// when dropdown arrow is clicked
// if the answer element has the hidden css class
// remove the hidden class from the answer element
// if the answer element does not have the hidden class
// add the hidden class to the answer element

// parameterize the number for each dropdown 
const toggleAns = (num) => {
  $(`#faq${num}`).click(function () {
    if ($(`#answer${num}`).hasClass("hidden")) {
      $(`#answer${num}`).removeClass("hidden");
    } else {
      $(`#answer${num}`).addClass("hidden");
    }
  });
}

const NUM_FAQS = document.querySelectorAll(".container").length;

for (let i = 1; i <= NUM_FAQS; i++) {
  toggleAns(i);
};