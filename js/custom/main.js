 	$(function(){
    AOS.init({
        duration: 1200,
      easing: 'ease-in-out'
    });
 	var audio = $("#trololo")[0];
	var headtop = $(".hungryheadtop");
	var headbottom = $(".hungryheadbottom");
	$(".grills").mouseenter(function() {
	  audio.play();
	});
	$(".sohungry").mouseenter(function() {
	  headtop.addClass('topper');
	});
	$(".sohungry").mouseleave(function() {
	  headtop.removeClass('topper');
	});
	$(".sohungry").mouseenter(function() {
	  headbottom.addClass('bottomer');
	});
	$(".sohungry").mouseleave(function() {
	  headbottom.removeClass('bottomer');
	});

	  $("body").on('hidden.bs.modal', function (e) {
	    var $iframes = $(e.target).find("iframe");
	    $iframes.each(function(index, iframe){
	      $(iframe).attr("src", $(iframe).attr("src"));
	    });
	  });

	      	$('#contact').submit(function(e){
  
    e.preventDefault(); // Prevent Default Submission
  
    $.ajax({
 url: 'PHPMailer.php',
 type: 'POST',
 data: $(this).serialize(), // it will serialize the form data
        dataType: 'html'
    })
    .done(function(data){
      $('#amazing-form').fadeOut('slow', function(){
          $('#amazing-form').fadeIn('slow').html(data);
        });
    })
    .fail(function(){
     alert('Ajax Submit Failed ...');
    });
});
	});