var loca1 = 3;
var loca2 = 4;
var loca3 = 5;

var guess, hit, guesses, isSunk;

hits = 0;
guesses = 0;

isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, Aim, Fire!(enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid number, Only numbers from 0-6 are allowed");
    } else {
        guesses = guesses + 1;
        if (guess == loca1 || guess == loca2 || guess == loca3) {
            hits = hits + 1;
            alert("you hit my ship")

            if (hits == 3) {

                isSunk = true;

                alert("You sank my battleship!");
            }
        }
    }

var stats = "You took " + guesses + "guesses to sink the battleship," +
             "which means your shooting accuracy was" + (3 /guesses);
    alert(stats);
}
