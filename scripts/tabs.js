//Books Tab
//when user clicks the books tab (#books-tab):
$("#books-tab").click(function () {
  // console.log("yes this click is working");
  //hide the currently visible pane
  $(".pane:not(.hidden)").addClass("hidden");
  //show the content on the books pane
  $("#books-pane").removeClass("hidden");
  //darken the selected button, un-darken the others
  $("#videos-tab").removeClass("darken-button");
  $("#books-tab").addClass("darken-button");
});

//when user clicks the videos tab (#videos-tab):
$("#videos-tab").click(function () {
  // console.log("yes this click is working");
  //hide the currently visible pane
  $(".pane:not(.hidden)").addClass("hidden");
  //show the content on the books pane
  $("#videos-pane").removeClass("hidden");
  //darken the selected button, un-darken the others
  $("#books-tab").removeClass("darken-button");
  $("#videos-tab").addClass("darken-button");
});
