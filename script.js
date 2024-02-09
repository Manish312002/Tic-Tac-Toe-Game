let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; //PlayerX ,PlayerO

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add ("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        };
        box.disabled = true;

        checkWinner ();
    });
});

const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes ();
}

const checkWinner = () => {
    for( let  pattern of winPatterns) {

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != "") {
                if(pos1val === pos2val && pos2val === pos3val){
                    showWinner (pos1val);
                }  
            }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);