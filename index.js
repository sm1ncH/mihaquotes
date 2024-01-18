const tab = ["Joj!!!", "Ka ga bo spucalo.", "Nogice.", "Sm pršu.", "K.", "Nimam gambling addiction."];

const random = Math.floor(Math.random() * tab.length);

//when the page loads it will display a random quote
document.getElementById("miha").innerHTML = tab[random];
