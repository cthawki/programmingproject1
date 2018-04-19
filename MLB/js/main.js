// Create a list of starting pitchers
var starter1 = ["Clayton Kershaw", "Max Scherzer", "Corey Kluber", "Justin Verlander", "Noah Syndergaard"];
var starter2 = ["Stephen Strasburg", "Shohei Ohtani", "Gerrit Cole", "Jacob deGrom", "Johnny Cueto"];
var starter3 = ["Charlie Morton", "Jameson Taillon", "Jake Arrieta", "Luis Severino", "Carlos Carrasco"];
var starter4 = ["James Paxton", "Lance McCullers", "David Price", "Patrick Corbin", "Rick Porcello"];
var starter5 = ["Jose Berrios", "Carlos Martinez", "Bartolo Colon", "Gio Gonzalez", "Aaron Nola"];

// Generate a random starting pitcher from each list
var randomStarter1 = starter1[Math.floor(Math.random() * starter1.length)];
var randomStarter2 = starter2[Math.floor(Math.random() * starter2.length)];
var randomStarter3 = starter3[Math.floor(Math.random() * starter3.length)];
var randomStarter4 = starter4[Math.floor(Math.random() * starter4.length)];
var randomStarter5 = starter5[Math.floor(Math.random() * starter5.length)];

// Create a list of position players
var catcher = ["Buster Posey", "Gary Sanchez", "Wilson Contreras", "Yasmani Grandal", "J.T. Realmuto", "Austin Barnes", "Francisco Cervelli", "Yadier Molina", "Robinson Chirinos", "Tyler Flowers"];
var first = ["Joey Votto", "Anthony Rizzo", "Freddie Freeman", "Josh Bell", "Cody Bellinger", "Jose Abreu", "Miguel Cabrera", "Albert Pujols", "Paul Goldschmidt", "Matt Carpenter"];
var second = ["Jose Altuve", "Robinson Cano", "Daniel Murphy", "Dustin Pedroia", "Jonathon Schoop", "Brian Dozier", "Ian Kinsler", "Javier Baez", "D.J. LeMahieu", "Josh Harrison"];
var third = ["Josh Donaldson", "Kris Bryant", "Anthony Rendon", "Nolan Arenado", "Justin Turner", "Adrian Beltre", "Jose Ramirez", "Alex Bregman", "Kyle Seager", "Mike Moustakas"];
var short = ["Carlos Correa", "Corey Seager", "Manny Machado", "Francisco Lindor", "Trea Turner", "Didi Gregorious", "Andrelton Simmons", "Jean Segura", "Trevor Story", "Tim Beckham"];
var left = ["Marcell Ozuna", "Justin Upton", "Yoenis Cespedes", "Brett Gardner", "Rhys Hoskins", "Andrew Benintendi", "Adam Duvall", "Khris Davis", "Corey Dickerson", "Adam Eaton"];
var center = ["Mike Trout", "Christian Yelich", "Kevin Kiermaier", "Starling Marte", "Dexter Fowler", "A.J. Pollock", "Charlie Blackmon", "Billy Hamilton", "George Springer", "Lorenzo Cain"];
var right = ["Giancarlo Stanton", "Aaron Judge", "Andrew McCutchen", "Bryce Harper", "Mookie Bets", "J.D. Martinez", "Josh Reddick", "Domingo Santana", "Mitch Haniger", "Gregory Polanco"];

// Generate a random position player from each list
var randomCatcher = catcher[Math.floor(Math.random() * catcher.length)];
var randomFirst = first[Math.floor(Math.random() * first.length)];
var randomSecond = second[Math.floor(Math.random() * second.length)];
var randomThird = third[Math.floor(Math.random() * third.length)];
var randomShort = short[Math.floor(Math.random() * short.length)];
var randomLeft = left[Math.floor(Math.random() * left.length)];
var randomCenter = center[Math.floor(Math.random() * center.length)];
var randomRight = right[Math.floor(Math.random() * right.length)];

// Create a list of relievers
var reliever = ["Ken Giles", "Roberto Osuna", "Cody ALlen", "Corey Knebel", "Edwin Diaz"];
var setup = ["Chad Green", "Raisel Iglesias", "Brad Hand", "Zach Britton", "Archie Bradley"];
var closer = ["Kenley Jansen", "Felipe Vasquez", "Andrew Miller", "Craig Kimbrel", "Aroldis Chapman"];

// Generate a random reliever from each list
var randomReliever = reliever[Math.floor(Math.random() * reliever.length)];
var randomSetup = setup[Math.floor(Math.random() * setup.length)];
var randomCloser = closer[Math.floor(Math.random() * closer.length)];

// List the results in the console
console.log("Welcome to the console.  Here you can find the results from the randomly generated lists without clicking on any of the buttons.");
console.log("Starting pitchers: " + randomStarter1 + ", " + randomStarter2 + ", " + randomStarter3 + ", " + randomStarter4 + ", " + randomStarter5);
console.log("Relievers (7th, 8th, 9th): " + randomReliever + ", " + randomSetup + ", " + randomCloser);
console.log("Infielders: " + randomCatcher + ", " + randomFirst + ", " + randomSecond + ", " + randomThird + ", " + randomShort);
console.log("Outfielders: " + randomLeft + ", " + randomCenter + ", " + randomRight);

// List the results on the page when the buttons are clicked
// Starting Pitchers
function displayStarters() {
  document.getElementById("showStarters").innerHTML = randomStarter1 + ", " + randomStarter2 + ", " + randomStarter3 + ", " + randomStarter4 + ", " + randomStarter5;
}
// Relievers
function displayRelievers() {
  document.getElementById("showRelievers").innerHTML = randomReliever + ", " + randomSetup + ", " + randomCloser;
}
// Infielders
function displayInfielders() {
  document.getElementById("showInfielders").innerHTML = randomCatcher + ", " + randomFirst + ", " + randomSecond + ", " + randomThird + ", " + randomShort;
}
// Outfielders
function displayOutfielders() {
  document.getElementById("showOutfielders").innerHTML = randomLeft + ", " + randomCenter + ", " + randomRight;
}
