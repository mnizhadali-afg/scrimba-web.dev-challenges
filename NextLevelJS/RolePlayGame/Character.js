import {getDiceRollArray} from './utils.js'

/*
CHALLENGE
1. In the Character constructor, create a new 
property called "diceArray".
2. Set diceArray equal to whatever is returned
by the getDicePlaceholderHtml function (think 
what two things you need to do to make this work!!).
3. Instead of rendering diceHtml in the getCharacterHtml 
method, render diceArray.
4. Delete any unnecessary code.
*/

function Character(data) {
    Object.assign(this, data)
    
    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num){ 
            return  `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;      
        let diceHtml = this.getDiceHtml(diceCount);        
           return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
    }  
}

export default Character