var playerOne = true;
var playsCount = 0;
var box = [];
var winner


function buttonClicked(id) {
    var clicked = document.getElementById(id)
    console.log(clicked)
    if (box.includes(id)==0) {
        box.push(id);
        playsCount++;
        if (playerOne == 1) {
            clicked.innerText = "X"
            playerOne = 0
        }
        else if (playerOne == 0) {
            clicked.innerText = "o"
            playerOne = 1
        }
        

    }
    else{
        alert("Already filled!!")
    }
}
