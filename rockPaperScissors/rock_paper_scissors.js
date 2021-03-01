// Test


const getUserChoice = userInput => {
  
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!')
    }
  }
    
  function getComputerChoice() {
    const botChoice = Math.floor(Math.random() * 3);
    switch (botChoice) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, computer won!';
      } else {
        return "Congratulations, you won!";
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "Sorry, computer won";
      } else {
        return "Congratulations, you won!";
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "Sorry, computer won!"
      } else {
        return "Congratulations, you won!";
      }
    }
    if (userChoice === 'bomb') {
      return "Congratulations, you won!";
    }
  };
  
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice))
  };
  
  playGame()
  