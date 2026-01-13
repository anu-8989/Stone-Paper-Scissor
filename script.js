let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//here we are getting computer choice
const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
};
//showing the winner
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
    
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="brown";
    }
};
//draw condition
const draw=()=>{
    msg.innerText="It is draw Play again";
    msg.style.backgroundColor="blue";
};
//here we are playing the game
const playGame=(userChoice)=>{
console.log("User choice:",userChoice);
const compChoice=getCompChoice();
console.log("computer choice:",compChoice);
if(userChoice===compChoice){
    draw();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissor and paper
        userWin=compChoice==="scissor"?true:false;
    }
    else if(userChoice==="paper"){
        //stone and scissor
         userWin=compChoice==="rock"?false:true;
    }
    else{
        //stone and paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
//adding event to each choice 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});