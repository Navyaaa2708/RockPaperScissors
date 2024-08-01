let userscore = document.querySelector("#user");
let compscore = document.querySelector("#comp");
let msg=document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const compChoice = ()=>{
    const options = ["rock","paper",'scissor'];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const playGame = (UserChoice) => {
    //console.log("user choice : ",UserChoice);
    const compchoice = compChoice();
    //console.log("Computer choice : ",compchoice);
    if(UserChoice === compchoice){
        msg.innerHTML = "It's a Draw";
    }
    else{
        let userwin;
        if(UserChoice === "rock"){
            //paper,scissor
            userwin = compchoice === "paper" ? false : true;
        }
        else if(UserChoice === "paper"){
            //scissor,rock
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            //rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        if(userwin){
            userscore.innerHTML++;
            msg.innerHTML = "You Won!! " + UserChoice+ " beats " + compchoice;
        }else{
            compscore.innerHTML++;
            msg.innerHTML = "You Lose!! " + compchoice + " beats " + UserChoice;
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    }
    );
});