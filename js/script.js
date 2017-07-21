$(document).ready(function(){

  $("#toggle-nav").click(function() {
      $("#nav").toggleClass("nav-open");
  });

  $("#t-more").click(function() {
    $("#t-search, #t-shots, #t-players, #t-blog, #t-podcast, #t-meetups, #t-jobs, #t-more > a").hide();
    $("#t-more-back, #t-more .tabs").show();
    $("#t-more > .tabs > li").addClass("separate");
  })

  $("#t-more-back").click(function() {
    $("#t-search, #t-shots, #t-players, #t-blog, #t-podcast, #t-meetups, #t-jobs, #t-more> a").show();
    $("#t-more-back, #t-more .tabs").hide();
  })

});
