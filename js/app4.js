const game = {
    makeGrid() {
        $('body').append('<div class="container"><div>')
        for (let x = 0; x < 20; x++){
            for (let y = 0; y < 20; y++){
            $('.container').append(`<div class="grid-squares" x="${[x]}" y="${[y]}"></div>`)
            }
        }
    },
    makeHomeCity() {
        $('[x ="0"][y="3"]').append('<div class="home-city"></div>');
        $('[x ="1"][y="3"]').append('<div class="home-city"></div>');
        $('[x ="0"][y="4"]').append('<div class="home-city"></div>');
        $('[x ="1"][y="4"]').append('<div class="home-city"></div>');
    },
    makeEnemyCity() {
        $('[x ="18"][y="14"]').append('<div class="enemy-city"></div>');
        $('[x ="19"][y="14"]').append('<div class="enemy-city"></div>')
        $('[x ="18"][y="15"]').append('<div class="enemy-city"></div>')
        $('[x ="19"][y="15"]').append('<div class="enemy-city"></div>')
    },
    battleUnitCheck: 0,
    defenseCheck: 0,
    lives: 3,
    level: 0,
    enemyDefenseCheck: 0,

}
game.makeGrid();
game.makeHomeCity();
game.makeEnemyCity();

// Set up timer
let timePassing;
let seconds = 0;

const secondsGoUp = () => {
    seconds++;
    console.log(seconds);
}
secondsGoUp();

const startGame = () => {
    $('body').append('<button id="start">PLAY</button>');
    // sets up seconds
    $('#start').click(function(){
        timePassing = setInterval(secondsGoUp, 1000);
    })
    }
startGame();

const pauseGame = () => {
    $('body').append('<button id="stop">PAUSE</button>');
    //stops timer
    $('#stop').click(function(){
        clearInterval(timePassing);
    })
}
pauseGame();

// level ups
const levelUp = () => {
    if (seconds % 180 === 0){
        game.level++;
    }  
}

class HomeCity  {
    constructor(defenses, x, y){
        this.defenses = defenses;
        this.x = [x];
        this.y = [y];
    }
}
let homeCity = new HomeCity(500, [0, 1], [3, 4]);

class Knights {
    constructor(id, x, y){
        this.hp = 50;
        this.damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

const knightDefenseArray = [];

const knightFactory = {
    generateDefenseKnight(){
        const coordinatesArray = [[0, 2], [1, 2], [2, 3], [2, 4], [1, 5], [0, 5]];
        // knightFactory.generateDefenseKnight every 30 seconds, if there isn't one in that spot
        for (let i = 0; i < coordinatesArray.length; i++){
            const coordinates = coordinatesArray[i];
            const xCoordinates = coordinates.shift(); 
            const yCoordinates = coordinates.pop();
            let newDefenseKnight = new Knights(knightDefenseArray.length, xCoordinates, yCoordinates);
            $(`[x = "${newDefenseKnight.x}"][y = "${newDefenseKnight.y}"]`).append(`<div class="home-knight" id="${newDefenseKnight.id}"></div>`);
            knightDefenseArray.push(newDefenseKnight);
            game.defenseCheck++;
        }
    }

            // let newDefenseKnight = new Knights(0);
            // $('[x = "0"][y = "2"]').append('<div class="home-knight" id="0"></div>');
            // knightDefenseArray.push(newDefenseKnight);
            // newDefenseKnight = $('<div class="home-knight" id="0"></div>');
            // game.defenseCheck++;

            // let newDefenseKnight2 = new Knights(1);
            // $('[x = "1"][y = "2"]').append('<div class="home-knight" id="1"></div>');
            // knightDefenseArray.push(newDefenseKnight2);
            // newDefenseKnight2 = $('<div class="home-knight" id="1"></div>');
            // game.defenseCheck++;

            // let newDefenseKnight4 = new Knights(2);
            // $('[x = "2"][y = "3"]').append('<div class="home-knight" id="2"></div>');
            // knightDefenseArray.push(newDefenseKnight4);
            // newDefenseKnight4 = $('<div class="home-knight" id="2"></div>');
            // game.defenseCheck++;

            // let newDefenseKnight5 = new Knights(3);
            // $('[x = "2"][y = "4"]').append('<div class="home-knight" id="3"></div>');
            // knightDefenseArray.push(newDefenseKnight5);
            // newDefenseKnight5 = $('<div class="home-knight" id="3"></div>');
            // game.defenseCheck++;

            // let newDefenseKnight7 = new Knights(4);
            // $('[x = "1"][y = "5"]').append('<div class="home-knight" id="4"></div>');
            // knightDefenseArray.push(newDefenseKnight7);
            // newDefenseKnight7 = $('<div class="home-knight" id="4"></div>');
            // game.defenseCheck++;

            // let newDefenseKnight8 = new Knights(5);
            // $('[x = "0"][y = "5"]').append('<div class="home-knight" id="5"></div>');
            // knightDefenseArray.push(newDefenseKnight8);
            // newDefenseKnight8 = $('<div class="home-knight" id="5"></div>');
            // game.defenseCheck++;
}

class BattleUnit {
    constructor(id, x, y){
        this.hp = 150;
        this.damage = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

let battleUnitArray = [];

const battleUnitFactory = {
    generateBattleUnit(){
        // new battle unit every 2 minutes, if one doesn't exist  seconds % 120 === 0
        if (game.battleUnitCheck < 1){
            let newBattleUnit = new BattleUnit('battle', 0, 7);
            battleUnitArray.push(newBattleUnit);
            $('[x ="0"][y="7"]').append('<div class="home-knight" id="battle"></div>');
            game.battleUnitCheck++;
            $('.battle-hp').text(`Battle Unit HP: ${newBattleUnit.hp}`)  
            $('.battle-damage').text(`Battle Unit Damage: ${newBattleUnit.damage}`)  
        }
    },
}

// how to keep track of coordinates of battle unit? Necessary?

const battleMove = () => {
    $('#battle').on('click', function(e){
        $(document).keydown(function(e){
            if (e.keyCode === 37){ 
                direction = 'left';
                battleUnitArray[0].x = battleUnitArray[0].x--;
                $('#battle').finish().animate({
                    left: '-=32'
                });
            } else if (e.keyCode === 38){
                direction = 'up';
                battleUnitArray[0].y = battleUnitArray[0].y--;
                $('#battle').finish().animate({
                    top: '-=36'
                });
            } else if (e.keyCode === 39){
                direction = 'right';
                battleUnitArray[0].x = battleUnitArray[0].x++;
                $('#battle').finish().animate({
                    left: '+=32'
                });
            } else if (e.keyCode === 40){
                direction = 'down';
                battleUnitArray[0].y = battleUnitArray[0].y++;
                $('#battle').finish().animate({
                    top: '+=36'
                }); 
            }               
    
        });
    });
}
battleMove();

// Enemies

class EnemyCity  {
    constructor(defenses, x, y){
        this.defenses = defenses;
        this.x = [x];
        this.y = [y];
    }
}
let enemyCity = new EnemyCity(500, [18, 19], [14, 15]);

class Enemies {
    constructor(id, x, y){
        this.hp = 50;
        this.damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

enemyDefenseArray = [];
enemyAttackerArray = [];

// As time increases, so do enemy hordes. 
// if (seconds % 20 === 0 Math.random() < 0.3 || seconds % someNumber ===0 && Math.random() < 0.4)
// to increase spawns as time goes on

// generate every 30 seconds, if there isn't one in that spot?

const enemyFactory = {
    generateEnemyDefense() {
        const coordinatesArray = [[19, 13], [18, 13], [17, 14], [17, 15], [18, 16], [19, 16]];
        for (let i = 0; i < coordinatesArray.length; i++){
            const coordinates = coordinatesArray[i];
            const xCoordinates = coordinates.shift(); 
            const yCoordinates = coordinates.pop();
            let newDefenseEnemy = new Enemies(enemyDefenseArray.length, xCoordinates, yCoordinates);
            $(`[x = "${newDefenseEnemy.x}"][y = "${newDefenseEnemy.y}"]`).append(`<div class="enemy-defense" id="${newDefenseEnemy.id}"></div>`);
            enemyDefenseArray.push(newDefenseEnemy);
            game.enemyDefenseCheck++;
        }
    },

    generateEnemyAttacker() {
        // random spawn
        const coordinatesArray = [[0, 1], [1, 1], [3, 3], [3, 4], [1, 6], [0, 6]];
        for (let i = 0; i < coordinatesArray.length; i++){
            const randomCoordinates = coordinatesArray[Math.floor(Math.random() * coordinatesArray.length)];
            const randomXCoordinates = randomCoordinates.shift(); 
            const randomYCoordinates = randomCoordinates.pop();

            let newEnemyAttacker = new Knights(enemyAttackerArray.length, randomXCoordinates, randomYCoordinates);
            $(`[x = "${newEnemyAttacker.x}"][y = "${newEnemyAttacker.y}"]`).append(`<div class="enemy-attacker" id="${newEnemyAttacker.id}"></div>`);
            enemyAttackerArray.push(newEnemyAttacker);
            game.defenseCheck++;
        }
    }
    
}


// enemies not attacking defense knights
const enemyAttack = () =>{
    for (let i = 0; i < enemyAttackerArray.length; i++){
        for (let x = 0; x < knightDefenseArray.length; x++){
            // if (knightDefenseArray[x].x === enemyAttackerArray[i].x){
            //     console.log(knightDefenseArray[x].x)
                knightDefenseArray[x].hp = knightDefenseArray[x].hp - enemyAttackerArray[i].damage;
            // }
            console.log(knightDefenseArray[x].hp)

        }
        homeCity.defenses = homeCity.defenses - enemyAttackerArray[i].damage;
    }   
}


const knightDefenseAttack = () =>{
    for (let i = 0; i < knightDefenseArray.length; i++){
        for (let x = 0; x < enemyAttackerArray.length; x++){
            enemyAttackerArray[x].hp = enemyAttackerArray[x].hp - knightDefenseArray[i].damage;
            // if (enemyAttackerArray[0] && enemyAttackerArray[0].hp <= 0){
            //     $('[x = "0"][y = "1"]').css('opacity', 0.5);
            //     //$(`#${enemyAttackerArray[i].id}`).css
            // }
            // if (enemyAttackerArray[1] && enemyAttackerArray[1].hp <= 0){
            //     $('[x = "1"][y = "1"]').css('opacity', 0.5);
            // }
            // if (enemyAttackerArray[2] && enemyAttackerArray[2].hp <= 0){
            //     $('[x = "3"][y = "3"]').css('opacity', 0.5);
            // }
            // if (enemyAttackerArray[3] && enemyAttackerArray[3].hp <= 0){
            //     $('[x = "3"][y = "4"]').css('opacity', 0.5);
            // }
            // if (enemyAttackerArray[4] && enemyAttackerArray[4].hp <= 0){
            //     $('[x = "1"][y = "6"]').css('opacity', 0.5);
            // }
            // if (enemyAttackerArray[5] && enemyAttackerArray[5].hp <= 0){
            //     $('[x = "0"][y = "6"]').css('opacity', 0.5);
            // }
        }

    }
}
knightDefenseAttack();
knightDefenseAttack();
knightDefenseAttack();
knightDefenseAttack();




const battleUnitAttack = () => {
    $('.enemy-defense').on('click', function (e){
        const victimId = $(e.target).attr('id');
        for (let i = 0; i < enemyDefenseArray.length; i++){
            for (let x = 0; x < battleUnitArray.length; x++){
                if (victimId == enemyDefenseArray[i].id){
                    enemyDefenseArray[i].hp = enemyDefenseArray[i].hp - battleUnitArray[0].damage; 
                    if (enemyDefenseArray[0] && enemyDefenseArray[0].hp <= 0){
                        $('[x = "19"][y = "13"]').css('opacity', 0.5);
                    }  
                    if (enemyDefenseArray[1] && enemyDefenseArray[1].hp <= 0){
                        $('[x = "18"][y = "13"]').css('opacity', 0.5);
                    }  
                    if (enemyDefenseArray[2] && enemyDefenseArray[2].hp <= 0){
                        $('[x = "17"][y = "14"]').css('opacity', 0.5);
                    }  
                    if (enemyDefenseArray[3] && enemyDefenseArray[3].hp <= 0){
                        $('[x = "17"][y = "15"]').css('opacity', 0.5);
                    }  
                    if (enemyDefenseArray[4] && enemyDefenseArray[4].hp <= 0){
                        $('[x = "18"][y = "16"]').css('opacity', 0.5);
                    }  
                    if (enemyDefenseArray[5] && enemyDefenseArray[5].hp <= 0){
                        $('[x = "19"][y = "16"]').css('opacity', 0.5);
                    }     
                } 
            }
        }
    })

    $('.enemy-attacker').on('click', function (e){
        const victimId = $(e.target).attr('id');
            for (let i = 0; i < enemyAttackerArray.length; i++){
                for (let x = 0; x < battleUnitArray.length; x++){
                    if (victimId == enemyAttackerArray[i].id){
                        enemyAttackerArray[i].hp = enemyAttackerArray[i].hp - battleUnitArray[0].damage;
                        if (enemyAttackerArray[0] && enemyAttackerArray[0].hp <= 0){
                            $('[x = "0"][y = "1"]').css('opacity', 0.5);
                        }
                        if (enemyAttackerArray[1] && enemyAttackerArray[1].hp <= 0){
                            $('[x = "1"][y = "1"]').css('opacity', 0.5);
                        }
                        if (enemyAttackerArray[2] && enemyAttackerArray[2].hp <= 0){
                            $('[x = "3"][y = "3"]').css('opacity', 0.5);
                        }
                        if (enemyAttackerArray[3] && enemyAttackerArray[3].hp <= 0){
                            $('[x = "3"][y = "4"]').css('opacity', 0.5);
                        }
                        if (enemyAttackerArray[4] && enemyAttackerArray[4].hp <= 0){
                            $('[x = "1"][y = "6"]').css('opacity', 0.5);
                        }
                        if (enemyAttackerArray[5] && enemyAttackerArray[5].hp <= 0){
                            $('[x = "0"][y = "6"]').css('opacity', 0.5);
                        }     
                    }
                } 
    
            }
    })
    // $('.enemy-city').on('click', function (e){
    //     const victimId = $(e.target).attr('id');
    //     if (seconds % 2 === 0){
    //         if (victimId == 'enemy-city'){
    //             enemyCity.defenses = enemyCity.defenses - battleUnitArray[0].damage;
    //             if (enemyCity.defenses <= 0){
    //                 $('.enemy-city').remove();
    //                 alert('YOU WIN!!!')
    //             }
    //         }
    //     }

    // })

}

const deathCheck = () => {
    if (enemyCity.defenses <= 0){
        alert('YOU WIN!!!');
    }
    if (homeCity.defenses <= 0){
        alert('YOU LOSE!!!');
    }
    // if anyone hits 0 hp remove them from the map

    // const deathHome = $('.home-knight').attr('id');
    // for (let i = 0; i < knightDefenseAttack.length; i++){
    //     if (knightDefenseArray[i].hp <= 0){
    //         knightDefenseArray.splice([i], 1);

    //     }
    // }
}
deathCheck();

const render = () => {

}

// Show Stats on screen
    // should timer appear on screen?
// add to render function
if (seconds % 1 === 0){
    $('.battle-hp').empty();
    $('body').append('<div class="battle-hp">Battle Unit  HP: 0</div>');
    $('.battle-damage').empty();
    $('body').append(`<div class="battle-damage">Battle Unit Damage: 0</div>`);
    $('.lives').empty();
    $('body').append(`<div class="lives">Lives: ${game.lives} </div>`);
    $('.level').empty();
    $('body').append(`<div class="level">Level: ${game.level} </div>`);
}

const generator = () => {
    // if (seconds % 30 === 0){
        enemyFactory.generateEnemyAttacker();
        enemyAttack();
        enemyFactory.generateEnemyDefense(); 
        battleUnitFactory.generateBattleUnit();
        battleMove();
        battleUnitAttack();
        knightFactory.generateDefenseKnight();
        // knightDefenseAttack()

 
    // }
}
generator();

const attacks = () => {
    if (seconds % 2 === 0) {

    }
}

        // knightFactory.generateDefenseKnight every 30 seconds, 
        // if there isn't one in that spot
        // or just replace like a shift change?
