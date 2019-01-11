$(document).ready(function(){

	setCSS();

  $(".map").height($( window ).height()/2);
  $("textarea").height($( window ).height()/2);

  $(".arrow1").click(function(){
    $("html, body").animate({ scrollTop: $('.offer').offset().top }, 1000);
  });

	function setCSS(){

			$(".offer").css("height","auto");
			$(".contact").css("height","auto");

		if($(".offer").height()<$( window ).height())
			$(".offer").css("height",$( window ).height());

		if($(".contact").height()<$( window ).height())
			$(".contact").css("height",$( window ).height());

		$(".logotext").css("top",($( window ).height())/4 + "px");

	}

 $(window).resize(function(){
    $(".logo").css("height",$( window ).height() + "px");
    $(".logotext").css("top",($( window ).height())/4 + "px");
		setCSS();
 });


});
