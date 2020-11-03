

let secretNumber = Math.trunc(  Math.random() * 10 ) + 1;

let score =20;
let highScore = 0

const body = document.querySelector('body')
const number = document.querySelector('.number')
const again = document.querySelector('.again')
const message = document.querySelector('.message')

const displayMessage = function(message){
  document.querySelector('.message').textContent=message
}


//CHECK GUESS
document.querySelector('.check').addEventListener('click' , function(){

  
 let guess = Number(document.querySelector('.guess').value)
  if(!guess) { 

    
    displayMessage('😒 Not a number')
    

  } else if (guess === secretNumber){
    
    displayMessage( '🥳 Correct number !')
    body.style.backgroundColor = '#60b347'
    number.style.width= '35rem'
    document.querySelector('.number').textContent = secretNumber

   if(score > highScore){
     highScore = score
     document.querySelector('.highscore').textContent = highScore
   }


   }else if (guess !==secretNumber){
    if(score > 1){

      displayMessage(guess > secretNumber ? 'Your guess is too hight, flight down 🛬 !' : 'Your guess is too low, take a rocket 🚀!')
      score--
      document.querySelector('.score').innerText = score
      
    }else{
       displayMessage('Game Over 🏴‍☠️!')
      document.querySelector('.score').innerText = 0

    }
   }
  
  
  


})

//BUTTON AGAIN - RESET
document.querySelector('.again').addEventListener('click' , ()=>{
  
  score=20;
  secretNumber = Math.trunc(  Math.random() * 10 ) + 1;
  document.querySelector('.score').innerText = score;
  displayMessage('Start guessing...')
 document.querySelector('.guess').value =''
  body.style.backgroundColor = ' #222'
  number.style.width= '15rem'
  number.textContent = '?'





})