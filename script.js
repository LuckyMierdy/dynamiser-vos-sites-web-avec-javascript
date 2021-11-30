let score = 0
let scoreP1 = 0
let scoreP2 = 0
let rollDice = 1
let activePlayer = 1
let scoreRound = 0
const roll = document.querySelector('#roll')
const hold = document.querySelector('#hold')
const newGame = document.querySelector('#new-game')

function reset() {
  scoreP1 = 0
  scoreP2 = 0
  currentP1 = 0
  currentP2 = 0
  scoreRound = 0
  activePlayer = 1
  document.querySelector('#total-score-p1').textContent = 0
  document.querySelector('#total-score-p2').textContent = 0
  document.querySelector('#score-p1').textContent = 0
  document.querySelector('#score-p2').textContent = 0
  document.querySelector('#empty-box-p1').textContent = ''
  document.querySelector('#empty-box-p2').textContent = ''
}

function nextPlayer() {
  if (activePlayer == 1) {
    activePlayer = 2
    document.querySelector('#new-game').style.background = 'linear-gradient(90deg, white 50%, rgb(235, 235, 235) 50%)'
    document.querySelector('#roll').style.background = 'linear-gradient(90deg, white 50%, rgb(235, 235, 235) 50%)'
    document.querySelector('#hold').style.background = 'linear-gradient(90deg, white 50%, rgb(235, 235, 235) 50%)'
    document.querySelector('.black-white').style.background = 'linear-gradient(90deg, white 50%, rgb(235, 235, 235) 50%)'
  } else {
    activePlayer = 1
    document.querySelector('#new-game').style.background = 'linear-gradient(90deg, rgb(235, 235, 235) 50%, white 50%)'
    document.querySelector('#roll').style.background = 'linear-gradient(90deg, rgb(235, 235, 235) 50%, white 50%)'
    document.querySelector('#hold').style.background = 'linear-gradient(90deg, rgb(235, 235, 235) 50%, white 50%)'
    document.querySelector('.black-white').style.background = 'linear-gradient(90deg, rgb(235, 235, 235) 50%, white 50%)'
  }
  scoreRound = 0
  document.querySelector('#score-p1').textContent = 0
  document.querySelector('#score-p2').textContent = 0

}

function aleatoire() {
  rollDice = (Math.floor(Math.random() * (1, 6) + 1))
  document.querySelector('#baliseImg').src='dé 6/de'+ rollDice +'.jpg'
  if (rollDice !== 1) {
    scoreRound += rollDice
    document.querySelector('#score-p' + activePlayer).textContent = scoreRound
  } else {
    nextPlayer()
  }
  console.log(rollDice)
}

function keep() {
  if (activePlayer == 1) {
    scoreP1 += scoreRound
    document.querySelector('#total-score-p1').textContent = scoreP1
  } else {
    scoreP2 += scoreRound
    document.querySelector('#total-score-p2').textContent = scoreP2
  }
  if (scoreP1 >= 100) {
    document.querySelector('#empty-box-p1').textContent = 'Winner !'
  } else if (scoreP2 >= 100) {
    document.querySelector('#empty-box-p2').textContent = 'Winner !'
  } else {
    nextPlayer()
    scoreRound = 0
  }
}

roll.addEventListener('click', () => {aleatoire()})
hold.addEventListener('click', () => {keep()})
newGame.addEventListener('click', () => {reset()})