var projectArray = [ {title:"Word Guess Game",imgSrc:"./Images/WordGuess.png",imgAlt:"Word Guess Game Main Page",codeLink:"https://github.com/LuisDex/Word-Guess-Game", demoLive:"https://luisdex.github.io/Word-Guess-Game/"},
                     {title:"Crystal Collectors",imgSrc:"./Images/CrystalCollector.png",imgAlt:"Crystal Collector Game Main Page",codeLink:"https://github.com/LuisDex/Crystal-Collectors-Game", demoLive:"https://luisdex.github.io/Crystal-Collectors-Game/"},
                     {title:"Party Finder",imgSrc:"./Images/PartyFinder.png",imgAlt:"Party Finder Main Page",codeLink:"https://github.com/LuisDex/PartyFinder", demoLive:"https://peaceful-hollows-32316.herokuapp.com/"},
                     {title:"Burger Time!",imgSrc:"./Images/BurgerTime.png",imgAlt:"Burger Time Main Page",codeLink:"https://github.com/LuisDex/BurgerTime", demoLive:"https://morning-depths-42506.herokuapp.com/"},
                     {title:"Train Depot App",imgSrc:"./Images/TrainDepot.png",imgAlt:"Train Depot Main Page",codeLink:"https://github.com/LuisDex/TrainDepot", demoLive:"https://luisdex.github.io/TrainDepot/"},
                     {title:"FF Trivia Game",imgSrc:"./Images/FFTrivia.png",imgAlt:"Final Fantasy Trivia Game Main Page",codeLink:"https://github.com/LuisDex/TriviaGame", demoLive:"https://luisdex.github.io/TriviaGame/"},
                     {title:"Cooked or Served",imgSrc:"./Images/CookedOrServed.png",imgAlt:"Project 1 Main Page",codeLink:"https://github.com/LuisDex/CookedOrServed", demoLive:"https://luisdex.github.io/CookedOrServed/"},
                     {title:"codeRed Network",imgSrc:"./Images/CodeRed.png",imgAlt:"Project 2 Main Page",codeLink:"https://github.com/LuisDex/Project2", demoLive:"https://rocky-ravine-34618.herokuapp.com/login"},
                     {title:"Toon Town Gifs",imgSrc:"./Images/ToonTownGif.png",imgAlt:"Toon Town Gifs Main Page",codeLink:"https://github.com/LuisDex/GifTasticToons", demoLive:"https://luisdex.github.io/GifTasticToons/"}];
                     

$(document).ready(function(){
function projectCards(array)
{
for(var i=0;i<array.length;i++)
{
 var newCol = $("<div>").addClass("col-sm-6 cardCol");
 var newCard = $("<div>").addClass("card card-show middle");
 var newFront = $("<div>").addClass("front");
 var newFrontImage = $("<img>").attr("src",array[i].imgSrc).attr("alt",array[i].imgAlt).addClass("img-fluid");
 $(newFront).append(newFrontImage);
 var newBack = $("<div>").addClass("back");
 var newBackContent = $("<div>").addClass("back-content");
 var contentTitle = $("<h3>").text(array[i].title);
 var demoImg = $("<i>").addClass("fas fa-external-link-alt");
 var demoButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].demoLive).attr("target","_blank").text("Demo").append(demoImg);
 var gitImg = $("<i>").addClass("fab fa-github");
 var codeButton = $("<a>").addClass("btn btn-primary backBtn").attr("href",array[i].codeLink).attr("target","_blank").text("Code").append(gitImg);
 $(newBackContent).append(contentTitle).append(demoButton).append(codeButton);
 $(newBack).append(newBackContent);
 $(newCard).append(newFront).append(newBack);
 $(newCol).append(newCard);
 $("#mtg").append(newCol);

}

}

$(".btn2").on("click", function () {
    $(".btn2").toggleClass("btnc");
    $(".side-bar").toggleClass("side");
  });
  

projectCards(projectArray);
});
