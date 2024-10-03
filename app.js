let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-btn");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let turnO=true;
let count = 0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    turnO=true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            drawGame()
    });
});

const drawGame = () => {
    msg.innerHTML = "Game was a draw";
    msgContainer.classList.remove("hide");
}

const checkWinner = ()=>{
    for(let patterns of winPatterns){
        
       let pos1Val=boxes[patterns[0]].innerText;
       let pos2Val=boxes[patterns[1]].innerText;
       let pos3Val=boxes[patterns[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            
            showWinner(pos1Val);
            return true;
        }
       }

    }
}

const showWinner=(winner)=>{
    msgContainer.classList.remove("hide");
    msg.innerText=`Congratulations, winner is ${winner}`;
    disableBoxes()
}


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}







newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

