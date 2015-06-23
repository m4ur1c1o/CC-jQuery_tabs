$(document).ready(function() {
  // Put your JavaScript behavior here
  // console.log("Document ready");
  $("#tab1").show();

  $( "ul.tabs li" ).on( "click", function() {
	 	$( "ul.tabs li" ).removeClass("active"); 
	 	$(this).addClass('active');
	  $(".tab").hide();

	  var tab_id = $(this).children("a").attr("href");

		$(tab_id).show();
	});

});