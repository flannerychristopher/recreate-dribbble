$(document).ready(function(){

  $("#toggle-nav").click(function() {
      $("#nav").toggleClass("nav-open");
  });

  $("#t-more > a").click(function() {
    $("#t-search, #t-shots, #t-players, #t-blog, #t-podcast, #t-meetups, #t-jobs, #t-more > a").hide();
    $("#t-more-hide, #t-more .tabs").show();
    $("#t-more > .tabs > li").addClass("separate");
  })

  $("#t-more-hide").click(function() {
    $("#t-search, #t-shots, #t-players, #t-blog, #t-podcast, #t-meetups, #t-jobs, #t-more > a").show();
    $("#t-more-hide, #t-more .tabs").hide();
  })

});
