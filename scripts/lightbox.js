//Lightbox Thumbnail:
 //list of all the thumbnail imgs
 const THUMBNAILS = $(".lightbox-thumbnail");
 //list of all the fullsize divs
 const FULLSIZES = $(".lightbox-fullsize");

 //when user clicks a lightbox-thumbnail element (call this event e):
 $(".lightbox-thumbnail").click(function(e) {
   //show the fullsize lightbox (.lightbox-fullsize) and the background (.lightbox-background)
   $(".lightbox-fullsize").removeClass("hidden");
   $(".lightbox-background").removeClass("hidden");

   //find which thumbnail img was clicked
   let thumbnailnum = THUMBNAILS.index(e.target) ;

   //show the fullsize div of that thumbnail
   showFullSize(thumbnailnum);
 });

 //show a fullsize div of a given thumbnail
 function showFullSize(thumbnailnum) {
   let index = thumbnailnum;
   let currentFullSize = FULLSIZES.eq(index);

   //hide any existing fullsize divs, then only show the current fullsize div
   FULLSIZES.addClass("hidden");
   currentFullSize.removeClass('hidden');
   //show the lightbox background
   $(".lightbox-background").removeClass("hidden");
 }


 //when user clicks lightbox background ("on-click-event" snippet):
 $(".lightbox-background").click(function() {
  //remove the fullsize lightbox background (.lightbox-fullsize) and the full sized card (.fullsizecard) from the display
  $(".lightbox-fullsize").addClass("hidden");
  $(".lightbox-background").addClass("hidden");
});
