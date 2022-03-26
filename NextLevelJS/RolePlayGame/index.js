const heroChar = {
   id: 'hero',
   name: 'Wizard',
   avatar: './images/wizard.png',
   health: 60,
   diceCount: 3
}

const monsterChar = {
   id: 'monster',
   name: 'Orc',
   avatar: './images/orc.png',
   health: 10,
   diceCount: 1
}

function getDiceRollArray(n) {
   return new Array(n).fill(0).map(function () {
      return Math.floor(Math.random() * 6) + 1
   })
}

function getDiceHTML(diceCount) {
   return getDiceRollArray(diceCount).map( (n) => `<div class="dice">${n}</div>` ).join('')
}

function renderCharacters(data) {

   const {id, name, avatar, health, diceCount} = data

   /* using map() and => (arrow) function */
   const diceHTML = getDiceHTML(diceCount)

   document.getElementById(id).innerHTML = `
   <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">
         ${diceHTML}
      </div>
   </div>`;
}

document.getElementById('attack-button').
addEventListener('click', function () {
   renderCharacters(heroChar)
   renderCharacters(monsterChar)
})

renderCharacters(heroChar)
renderCharacters(monsterChar)