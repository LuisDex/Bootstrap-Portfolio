var projectArray = [ {title:"Toon Town Gifs",imgSrc:"./Images/ToonTownGif.png",imgAlt:"Toon Town Gifs Main Page",codeLink:"https://github.com/LuisDex/GifTasticToons", demoLive:"https://luisdex.github.io/GifTasticToons/", description:"Simple cartoon themed gif site that allows users to discover new gifs based on the pre-loaded buttons, or by making a new search. The site makes a  various calls to the giphyAPI. Users can also toggle the animation by clicking on the gif."},
                     {title:"Word Guess Game",imgSrc:"./Images/WordGuess.png",imgAlt:"Word Guess Game Main Page",codeLink:"https://github.com/LuisDex/Word-Guess-Game", demoLive:"https://luisdex.github.io/Word-Guess-Game/", description:"Nicktoons themed word guess game with a varied selection of possible answers. The code keeps track of the player's score, answers and allows them to keep playing once initial game is finished without the need to refresh the page."},
                     {title:"Crystal Collectors",imgSrc:"./Images/CrystalCollector.png",imgAlt:"Crystal Collector Game Main Page",codeLink:"https://github.com/LuisDex/Crystal-Collectors-Game", demoLive:"https://luisdex.github.io/Crystal-Collectors-Game/", description:"Final Fantasy themed numbers game. First attempt at using background music embedded in the web page. Each crystal is assigned a random value at the start of the game and the players must add them to match the computer's score."},
                     {title:"Party Finder",imgSrc:"./Images/PartyFinder.png",imgAlt:"Party Finder Main Page",codeLink:"https://github.com/LuisDex/PartyFinder", demoLive:"https://peaceful-hollows-32316.herokuapp.com/",description:"Pen and Paper RPG themed match system. The user answers various questions related to their own likes and dislikes when “exploring a dungeon”. The page then presents them with their preferred class and best party mates."},
                     {title:"Burger Time!",imgSrc:"./Images/BurgerTime.png",imgAlt:"Burger Time Main Page",codeLink:"https://github.com/LuisDex/BurgerTime", demoLive:"https://morning-depths-42506.herokuapp.com/", description:"Burger themed application that implements employs NodeJS, Express, Express Handlebars to allow users to add their own custom burgers to a database. All the database processes are handled through different MySQL functions."},
                     {title:"Train Depot App",imgSrc:"./Images/TrainDepot.png",imgAlt:"Train Depot Main Page",codeLink:"https://github.com/LuisDex/TrainDepot", demoLive:"https://luisdex.github.io/TrainDepot/", description:"Mock train scheduler that allows users to add new train schedules to an existing database. The application calculates the when the next train will arrive based on the different intervals that each train has and the current time of the user."},
                     {title:"FF Trivia Game",imgSrc:"./Images/FFTrivia.png",imgAlt:"Final Fantasy Trivia Game Main Page",codeLink:"https://github.com/LuisDex/TriviaGame", demoLive:"https://luisdex.github.io/TriviaGame/",description:"Final Fantasy themed quiz game. The user is shown different questions from an array that spans multiple games. The answers have randomized positions and the questions are chosen randomly at the beginning of the game."},
                     {title:"Cooked or Served",imgSrc:"./Images/CookedOrServed.png",imgAlt:"Project 1 Main Page",codeLink:"https://github.com/LuisDex/CookedOrServed", demoLive:"https://luisdex.github.io/CookedOrServed/", description: "First group project, where users can search for new recipes or restaurants to try. I worked on the back-end of the project, managing multiple APIs calls to display and filter the user's desired results"},
                     {title:"codeRed Network",imgSrc:"./Images/CodeRed.png",imgAlt:"Project 2 Main Page",codeLink:"https://github.com/LuisDex/codeRed", demoLive:"https://rocky-ravine-34618.herokuapp.com/login"}];
                     

$(document).ready(function(){
function projectCards(array)
{

  for(var i=0;i<array.length;i++)
  {
   var newCol = $("<div>").addClass("col-sm-4").addClass("cardCol");
   var newCard = $("<div>").addClass("card");
   var newImage = $("<img>").attr("src",array[i].imgSrc).attr("alt",array[i].imgAlt).addClass("card-img-top");
   var newBody = $("<div>").addClass("card-body");
   var newDesc = $("<p>").text(array[i].description).addClass("card-text");
   var contentTitle = $("<h5>").text(array[i].title).addClass("card-title");
   var demoImg = $("<i>").addClass("fas fa-external-link-alt");
   var demoButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].demoLive).attr("target","_blank").text("Demo").append(demoImg);
   var gitImg = $("<i>").addClass("fab fa-github");
   var codeButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].codeLink).attr("target","_blank").text("Code").append(gitImg);
   $(newBody).append(contentTitle).append(newDesc).append(demoButton).append(codeButton);
   $(newCard).append(newImage).append(newBody);
   $(newCol).append(newCard);
   $("#mtg").append(newCol);
   
  }
  
//Card Flip Loop to be implemented later
// for(var i=0;i<array.length;i++)
// {
//  var newCol = $("<div>").addClass("col-sm-6 cardCol");
//  var newCard = $("<div>").addClass("card card-show middle");
//  var newFront = $("<div>").addClass("front");
//  var newFrontImage = $("<img>").attr("src",array[i].imgSrc).attr("alt",array[i].imgAlt).addClass("img-fluid");
//  $(newFront).append(newFrontImage);
//  var newBack = $("<div>").addClass("back");
//  var newBackContent = $("<div>").addClass("back-content");
//  var contentTitle = $("<h3>").text(array[i].title);
//  var demoImg = $("<i>").addClass("fas fa-external-link-alt");
//  var demoButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].demoLive).attr("target","_blank").text("Demo").append(demoImg);
//  var gitImg = $("<i>").addClass("fab fa-github");
//  var codeButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].codeLink).attr("target","_blank").text("Code").append(gitImg);
//  $(newBackContent).append(contentTitle).append(demoButton).append(codeButton);
//  $(newBack).append(newBackContent);
//  $(newCard).append(newFront).append(newBack);
//  $(newCol).append(newCard);
//  $("#mtg").append(newCol);

// }

}

$(".btn2").on("click", function () {
    $(".btn2").toggleClass("btnc");
    $(".side-bar").toggleClass("side");
  });
  

projectCards(projectArray);
});
