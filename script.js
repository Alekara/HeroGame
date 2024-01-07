const hero = {
    name: "Peter",
    health: 100,
    initiative: 3,
    prepared: false,
    ability1: function () {
        monster.health -= 15; 
    },
    ability2: function () {
        hero.health += 20; 
    },
    stage: 0,
}

const monster = {
    name: "Skeleton",
    health: 120,
    initiative: 1,
    prepared: false,
    ability1: function () {
        hero.health -= 10; 
    },
    stage: 0,
}

//Первый ход, герой начинает

const commonHit = document.getElementById('commonHit');
const prepare = document.getElementById('prepare');
const strengthPotion = document.getElementById('strengthPotion');
const healingPotion = document.getElementById('healingPotion');

const monsterHealth = document.getElementById('monsterHealth');
monsterHealth.textContent = monster.health;


if (monster.initiative > hero.initiative) {
    monster.stage = 1;
} else {
    hero.stage = 1;
}

commonHit.onclick = function () {
    if (hero.stage == 0) {
        console.log("Сейчас не ваш ход");
        console.log(hero.stage);
    } else if (hero.stage == 1) {
        if (!monster.prepared) {
            monster.health -= 15;
            hero.stage = 2;
            console.log(monster.health);
            console.log(hero.stage);
        } else {
            console.log("Промах");
            hero.stage = 2;
            console.log(hero.stage);
        }
    } else if (hero.stage == 2) {
        if (!monster.prepared) {
            monster.health -= 15;
            hero.stage = 0;
            console.log(monster.health);
            console.log(hero.stage);
            /* тут надо запустить функцию первого хода монстра */
        } else {
            console.log("Промах");
            hero.stage = 0;
            console.log(hero.stage);
            /* тут надо запустить функцию первого хода монстра */
            
        }
    }

    } 
  


prepare.onclick = function () {
    if (!monster.prepared) {
        monster.health -= 15;
        console.log(monster.health);
    } else {
        console.log("Промах");
    }
}