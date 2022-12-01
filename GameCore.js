import React from "react";

const GameCore = () => {
  //komputer losuje liczbe z zakresu 1-3
  //gracz podaje liczbe z zakresu 1-3

  const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
      return "paper";
    } else return "scissors";
  };

  // const playerChoice = (e) => {
  //   const playerChoice = e.target.id;
  //   if (e.target.value === 1) {
  //     return "rock";
  //   } else if (e.taget.value === 2) {
  //     return "paper";
  //   } else if (e.taget.value === 3) {
  //     return "scissors";
  //   }
  // };

  const gameLogic = (playerChoice) => {
    const readyComputerChoice = computerChoice();
    if (playerChoice === readyComputerChoice) {
      return "remis";
    } else if (playerChoice === "rock" && readyComputerChoice === "paper") {
      return "Comuter wins : paper";
    } else if (playerChoice === "scissors" && readyComputerChoice === "paper") {
      return "Player wins : scissors";
    } else if (playerChoice === "paper" && readyComputerChoice === "scissors") {
      return "Computer wins : scissors";
    } else if (playerChoice === "paper" && readyComputerChoice === "rock") {
      return "Player wins : paper";
    } else if (playerChoice === "scissors" && readyComputerChoice === "rock") {
      return "Computer wins : rock";
    } else if (playerChoice === "rock" && readyComputerChoice === "scissors") {
      return "Player wins : rock";
    }
  };

  // const readyPlayerChoice = playerChoice();

  return (
    <div>
      <button value="1" onClick={(e) => gameLogic(e.target.value)}>
        rock
      </button>

      <button value="2" onClick={(e) => gameLogic(e.target.value)}>
        paper
      </button>

      <button value="3" onClick={(e) => gameLogic(e.target.value)}>
        scissors
      </button>
    </div>
  );
};

export default GameCore;
