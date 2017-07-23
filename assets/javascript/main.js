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