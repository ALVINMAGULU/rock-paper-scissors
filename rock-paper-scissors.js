let computer= 0;
let player = 0;
let playerselection;
const button = document.querySelectorAll('button');
const computerScore = document.querySelector("#computerScore");
const playerScore = document.querySelector("#playerScore");
const computerChoice = document.querySelector("#computerChoice");
const youWon = document.querySelector("#youwon");

function computerPlay(){
    let items = [" rock"," paper","scissors"];
    choice = items[Math.floor(Math.random()*3)];
    return choice;
   
}

function playRound(){
    let computerSelection = computerPlay()
    computerChoice.textContent=computerPlay();
if(computerSelection == " rock"){
    switch(playerselection){
        case "rock":
        
        break;
        case "paper":
       
        player++;
        break;
        case "scissors":
        
        computer++;
        break;
        default:
        
        break;
        computer++;
    }

}
else if(computerSelection == " paper"){
    switch(playerselection){
        case "rock":
         
         computer++
        break;
        case"paper" :
         
        break;
        case "scissors":
        break;

        default:
         computer++;
        break;
    }
}
else if(computerSelection == "scissors"){
    switch(playerselection){
        case "rock":
         
         player++
        break;
        case"paper" :
         
         computer++
        break;
        case "scissors":
          break;

          default:
          
          computer++
          break;
    }
  }
}

function playchecker(){
    computerScore.textContent=computer;
    playerScore.textContent=player;
    if(computer == 5){
       youWon.textContent="The computer has won"
        computer=0;
        player=0
     } 
     if(player == 5){
        youWon.textContent="Congs,you have won"
         computer=0;
        player=0
     }
  console.log("c:" + computer)
  console.log("p:" + player)
}       
  

button.forEach((button) =>{
button.addEventListener('click',(e)=>{
    let playerSelection = button.id;
    playerselection = playerSelection; 
    playRound();
    playchecker();
    
});
});



