let turnPara = document.querySelector(".player");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turn = 0 //0 for playerX and 1 for playerY

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let Xbox = [];
let Ybox = [];

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked!",index);
        if(turn===0){
            box.innerText = "X";
            box.style.color="blue";
            turnPara.innerText = "Player O's turn"
            turn = 1
        }
        else{
            box.innerText = "O";
            box.style.color="green";
            turnPara.innerText = "Player X's turn"
            turn = 0;
        }
        // disabling the button
        box.disabled = true;

        if (checkWinner()===false){
            checkDraw();
        }
        
    })
})


// logic to check winner 
const checkWinner = () => {
    winPatterns.forEach((pattern)=>{
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val!=="" && pos2val!=="" && pos3val!==""){
            if (pos1val === pos2val && pos2val===pos3val){
                turnPara.innerText = `${pos1val} wins!!`
                resetBtn.innerText = "New Game"
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
                turnPara.style.color = "red"
                return true;
            };
        }
        return false;
    })
};

// logic to check if all boxes are disabled
const checkDraw = () =>{
    let draw = true;
    boxes.forEach((box)=>{
        if (!box.disabled){
            draw= false;
        }
    });
    if (draw){
        turnPara.innerText = "The Game is DRAW!!";
        turnPara.style.color = "Red"
    }
}

// logic to clear the game 
resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        Xbox = [];
        Ybox = [];
        box.disabled = false;
    })
    resetBtn.innerText = "Reset Game"
})