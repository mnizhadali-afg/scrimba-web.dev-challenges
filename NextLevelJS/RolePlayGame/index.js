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
    const nums = []
    for (let i = 0; i < n; i++) {
        nums.push(Math.floor(Math.random() * 6) + 1)
    }
    return nums
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

renderCharacters(heroChar)
renderCharacters(monsterChar)