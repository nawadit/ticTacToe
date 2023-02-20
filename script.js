
clickedBoxes = []
let playerOne = true
let playsCount = 0;
matrix = [["@", "@", "@"], ["@", "@", "@"], ["@", "@", "@"]]

document.getElementById('reset').addEventListener('click', function () { location.reload(true); })

function checkWin() {
    let winner;
    if (matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2] && (matrix[0][0]==1 || matrix[0][0]==0)) { console.log("condition 0"); winner = matrix[0][0] }
    else if (matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2] && (matrix[1][0]==1 || matrix[1][0]==0)) { console.log("condition 1"); winner = matrix[1][0] }
    else if (matrix[2][0] == matrix[2][1] && matrix[2][1] == matrix[2][2] && (matrix[2][0]==1 || matrix[2][0]==0)) { console.log("condition 2"); winner = matrix[2][0] }
    else if (matrix[0][0] == matrix[1][0] && matrix[1][0] == matrix[2][0] && (matrix[0][0]==1 || matrix[0][0]==0)) { console.log("condition 4"); winner = matrix[0][0] }
    else if (matrix[0][1] == matrix[1][1] && matrix[1][1] == matrix[2][1] && (matrix[0][1]==1 || matrix[0][1]==0)) { console.log("condition 5"); winner = matrix[0][1] }
    else if (matrix[0][2] == matrix[1][2] && matrix[1][2] == matrix[2][2] && (matrix[0][2]==1 || matrix[0][2]==0)) { console.log("condition 6"); winner = matrix[0][2] }
    else if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]&& (matrix[0][0]==1 || matrix[0][0]==0)) { console.log("condition 7"); winner = matrix[0][0] }
    else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]&& (matrix[0][2]==1 || matrix[0][2]==0)) { console.log("condition 8"); winner = matrix[0][2] }
    if((winner==0 )||( winner == 1)){
        if(winner==1){winner = "X"}
        else if (winner == 0){winner = "O"}
        setTimeout(function(){alert(`${winner} won!!!`);},100) 
        console.log(winner+"won!!!")
        setTimeout(function(){location.reload(true);},1000)
        }
}

function buttonClicked(id) {
    let clicked = document.getElementById(id);
    if (!clickedBoxes.includes(id)) {
        playsCount++;
        // console.log(clicked.id);
        clickedBoxes.push(id);
        let row = parseInt(id / 10);
        let col = id % 10;
        row--;
        col--;

        console.log(`row is ${row} and col is ${col}`)
        if (playerOne) {
            clicked.innerText = "X"
            playerOne = false
            matrix[row][col] = 1;

        }
        else if (!playerOne) {
            clicked.innerText = "O"
            playerOne = true
            matrix[row][col] = 0;

        }
        // console.log(matrix[0])
        // console.log(matrix[1])
        // console.log(matrix[2])


    }
    else if (clickedBoxes.includes(id)) {
        alert('Already clicked!!!');
    }

    if (playsCount >= 5) { checkWin() }



}
