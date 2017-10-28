var mover = 0;
var ajuste = 0;


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (!validateEmail(email)) {
  	$("#result").text(email + " is not valid");
    $("#result").css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate);






$('#menuDrop').click(function(){

  $('nav').toggleClass("closeMenu");

})

$('span').click(function(){
	$(this).toggleClass("nota")
})


$("#btnderecha").click(function(){
	if(mover > -300){
		mover+= -($( window ).width()-28);
		
		if($( window ).width() > 570){

		$("#image").animate({left: "-150px"}, 500);
		$("span").animate({left: "-150px"}, 500);

		}else{
		
		$("#image").animate({left: mover+"px"}, 500);
		$("span").animate({left: mover+"px"}, 500);

		}
	}
	
});

$("#btnizquierda").click(function(){

	if(mover < 0){
		mover+= ($( window ).width()-28);
		$("#image").animate({left: mover+"px"}, 500);
		$("span").animate({left: mover+"px"}, 500);

	}
	
});

$( window ).resize(function() {

 	$("#image").animate({left: "0"}, 10);
	$("span").animate({left: "0"}, 10);
	mover = 0;

});

$('.flip3D').click(function(evt){


		if($(evt.target).hasClass('front')){

			 
			$(this).find('.front').css({'-webkit-transform':'perspective( 600px ) rotateY( -180deg )',
					'transform:':'perspective( 600px ) rotateY( -180deg )'});

			$(this).find('.back').css({'-webkit-transform':'perspective( 600px ) rotateY( 0deg )',
					'transform:':'perspective( 600px ) rotateY( 0deg )'});

		}else{

			$(this).find('.front').css({'-webkit-transform':'perspective( 600px ) rotateY( 0deg )',
					'transform:':'perspective( 600px ) rotateY( 0deg )'});

			$(this).find('.back').css({'-webkit-transform':'perspective( 600px ) rotateY( 180deg )',
					'transform:':'perspective( 600px ) rotateY( 180deg )'});
		}



});
