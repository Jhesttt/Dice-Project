document.getElementById("roll").addEventListener('click', function(){
    let p1 = Math.floor(Math.random()*6)+1;
    let p2 = Math.floor(Math.random()*6)+1;

    let diceImage = [
        "img/dice-one.png",
        "img/dice-two.png",
        "img/dice-three.png",
        "img/dice-four.png",
        "img/dice-five.png",
        "img/dice-six.png"
    ];

    document.getElementById("player1").setAttribute("src",diceImage[p1-1]);
    document.getElementById("player2").setAttribute("src",diceImage[p2-1]);

    if (p1 > p2) {
        document.getElementById("winner").innerHTML = "Player 1 Wins!";
    } else if (p1 < p2) {
        document.getElementById("winner").innerHTML = "Player 2 Wins!";
    } else {
        document.getElementById("winner").innerHTML = "Draw!";
    }
});
