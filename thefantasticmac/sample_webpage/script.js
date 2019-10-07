$(document).ready(function() {
	$("a").attr("href", "https://codefactory.wien/en/home-en/");
	$("code").css("color", "red");
	$("ol li").css("background", "#2a7b90");
	$("form p textarea").attr("placeholder", "Express your opinion");
	$("img").attr("src", "frog.jpg");
	$("blockquote").css({"background": "orange", "font-style" : "italic"});
	$("#logo").css("color", "black");
	$(".gray").css("color", "white");
	$(".date").remove();
	$("#menu ul").prepend("<li>New Templates</li>").css({"margin-right": "100px", "color" : "white"});
	$("#menu ul").append("<li>Order Template</li>");
	$("#menu ul").append("<li>Contact us</li>");
	$("#sidebar p:first-of-type").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});