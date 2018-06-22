/*
1.) on page load, the topics in my array are rendered into buttons and displayed on the top of the screen 

2.) upon clicking each button at the top, the website hits the Giphy api with the relevant search term, pulls 10 gifs, and displays them onscreen into the <div>

3.) upon clicking each gif, it starts and stops playing

4.) upon entering text into the form and clicking submit button, the page throws that into it's own button and renders it onscreen 

5.) when you click the button you made, it pulls 10 gifs and displays them as well as you have the ability to click on them to start/stop

Step 1.)
create array of strings, save it to a variable called topics var = topics [etc etc]
page pulls each of the strings in the array and creates a button using a for loop

Step 2.) add a button function using jquery $("#heroButtons").on("click", function) etc,
this sends the name of the button to the Giphy api and it pulls back 10 gifs
this is accomplished via Ajax call 
*/

var heroes = ["Goku", "Superman", "Spiderman", "Batman", "Optimus Prime", "Gandalf"];

//when you click a hero button it pulls 10 of the relevant gifs from giphy

function displayHero(){
	$("#heroes-appear-here").empty();
	var hero = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response){
		for (var j = 0; j < heroes.length; j++){
			var results = response.data;
			var heroDiv = $("<div class='heroic'>");
			var rating = results[j].rating;
			var p =$('<p class="rating">');
			p.text("Rating:" + results[j].rating);
			heroDiv.append(p);
			var heroImage = $("<img>");
			heroImage.addClass("anImg");
			heroImage.attr("src", results[j].images.fixed_height.url);
			heroImage.attr("data-still", response.data[i].images.fixed_height.url);
			heroImage.attr("data-animate", response.data[i].images.fixed_height.url);
			heroImage.attr("data-state", "still");
			heroDiv.append(heroImage);
			$("#heroes-appear-here").prepend(heroDiv);
		}

		$("#hero-view").attr(response);
		renderButtons();

		//animate and still function
		$(".anImg").on("click", function(){
		var state = $(this).attr("data-state");
			if(state === "still"){
			  $(this).attr('src',$(this).attr("data-animate"));
			  $(this).attr("data-state", "animate");
		}
		 	else{
			  $(this).attr('src',$(this).attr("data-still"));
			  $(this).attr("data-state", "still");
		}
	});
});
}

//function for displaying buttons

function renderButtons(){

	//must clear div first

	$("#heroButtons").empty();

	for (var i = 0; i < heroes.length; i++) {
		var a = $("<button>");
		a.addClass("heroic");
		a.attr("data-name", heroes[i]);
		a.text(heroes[i]);
		$("#heroButtons").append(a);
	}
}

//get user input and render buttons upon clicking the submit button
$("#addHero").on("click", function(event){
	event.preventDefault();

	var userInput = $("#text-input").val().trim();
	heroes.push(userInput);
	renderButtons();
});

$(document).on("click", ".heroic", displayHero);
renderButtons();
