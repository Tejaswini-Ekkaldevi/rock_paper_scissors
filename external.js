
/*let user_input =prompt("Which do you choose rock,paper or scissors ?");
//User input
user_input=user_input.toLowerCase();
if(user_input=='rock'|| user_input=='paper'|| user_input=='scissors'){

    document.write("User Input :"+user_input+"</br>");
    }
else{
    document.write("Invalid Input.</br>");

}*/
var playerScore = 0;
var computerScore = 0;
var computer;

document.getElementById("rock").addEventListener("click", function () {
    document.getElementById("playerChoice").innerHTML="rock";
    computer=computerPlay();  
    playRound();  
});

document.getElementById("paper").addEventListener("click", function () {
    document.getElementById("playerChoice").innerHTML="paper"; 
   computer=computerPlay(); 
    playRound();
});

document.getElementById("scissors").addEventListener("click", function () {
    document.getElementById("playerChoice").innerHTML="scissors"; 
    computer=computerPlay(); 
    playRound();   
});






function computerPlay()
{
    let computerS=Math.random();
    console.log(computerS);
    if(computerS<.30){
        computerS='rock';
    }
    else if(computerS<=.60)
    {
        computerS='paper';
    }
    else{
        computerS='scissors';
    }
    
    console.log("Computer choice :"+computerS);
    return computerS;
}

function playRound(){
    
    players = document.getElementById("playerChoice").innerHTML;
    players = players.toLowerCase();
    computer = computer.toLowerCase();
    console.log(players,computer);

  //  if(players===computer){
    //    console.log("Match Tied!");
    //}
    if(players==="rock"){
        if(computer==="scissors"){
            playerScore+=1;
            console.log("User Won");
        } 
        else  if(computer==="paper"){
            computerScore +=1;
            console.log("You Lose! Paper Beats Rock");
        }
        else{
            console.log("Match Tied!");
        }
    }
    if(players==="paper"){
        if(computer==="rock"){
            playerScore +=1;
            console.log("User Won");
        }
        else if(computer=="scissors") {
            computerScore +=1;
            console.log(" You Lose! Scissors Cuts Paper.");
        }
        else{
            console.log("Match Tied!");
        }
    }
    if(players==="scissors"){
        if(computer==="rock"){
            computerScore +=1;
            console.log("You Lose! Rock beats scissors");
        }
        else if(computer=="paper"){
            playerScore +=1;
            console.log("User Won");
        }
        else{
            console.log("Match Tied!");
        }
    }
    console.log("Playerscore : "+playerScore+ " ComputerScore :"+computerScore);

    //if (playerScore == 5) {
     //   alert('Game Over! User wins!');
   //}
   //else if (computerScore == 5) {
     //   alert('Game Over! Computer wins!');
  // }
  // else return;  

}

 function end(){

   // document.getElementById("computerScore").innerHTML=computerScore;
    //document.getElementById("playerScore").innerHTML=playerScore;
    if (playerScore > computerScore) {
        alert('Game Over! User wins!');
   }
   else if (computerScore > playerScore) {
        alert('Game Over! Computer wins!');
   }
   else if(computerScore==playerScore){
       alert("Tied!");
   }
   else return;
}

document.getElementById("end").addEventListener("click", function () {
   // document.getElementById("playerChoice").innerHTML="end";
    end();
 });