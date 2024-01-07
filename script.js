const hero = {
    name: "Peter",
    health: 100,
    initiative: 3,
    ability1: function () {
        monster.health -= 15; 
    },
    ability2: function () {
        hero.health += 20; 
    },
}

const monster = {
    name: "Skeleton",
    health: 120,
    initiative: 1,
    ability1: function () {
        hero.health -= 10; 
    },
}

//Первый ход, герой начинает