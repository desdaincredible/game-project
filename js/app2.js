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
    enemyCityDefense: 0,

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
    console.log(seconds);
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

knightDefenseArray = [];

const knightFactory = {
    // make this DRY?
    generateDefenseKnight(){
        // knightFactory.generateDefenseKnight every 30 seconds, if there isn't one in that spot
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "0"][y = "2"]').empty();
            $('[x = "0"][y = "2"]').append('<div class="home-knight" id="0"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="0"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "1"][y = "2"]').empty();
            $('[x = "1"][y = "2"]').append('<div class="home-knight" id="1"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="1"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "0"][y = "2"]').empty();
            $('[x = "2"][y = "2"]').append('<div class="home-knight" id="2"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="2"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "1"][y = "2"]').empty();
            $('[x = "2"][y = "3"]').append('<div class="home-knight" id="3"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="3"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "0"][y = "2"]').empty();
            $('[x = "2"][y = "4"]').append('<div class="home-knight" id="4"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="4"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "1"][y = "2"]').empty();
            $('[x = "2"][y = "5"]').append('<div class="home-knight" id="5"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="5"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "0"][y = "2"]').empty();
            $('[x = "1"][y = "5"]').append('<div class="home-knight" id="6"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="6"></div>');
            game.defenseCheck++;
        }
        if (game.defenseCheck < 8){
            let newDefenseKnight = new Knights(knightDefenseArray.length);
            // $('[x = "1"][y = "2"]').empty();
            $('[x = "0"][y = "5"]').append('<div class="home-knight" id="7"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="7"></div>');
            game.defenseCheck++;
        }
    },
}
        // knightFactory.generateDefenseKnight every 30 seconds, 
        // if there isn't one in that spot
        // or just replace like a shift change?

// if (seconds % 30 === 0){
    knightFactory.generateDefenseKnight();
// }

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
battleUnitFactory.generateBattleUnit();

const battleMove = () => {
    $('#battle').on('click', function(e){
        $(document).keydown(function(e){
            if (e.keyCode === 37){ 
                direction = 'left';
                $('#battle').finish().animate({
                    left: '-=32'
                });
            } else if (e.keyCode === 38){
                direction = 'up';
                $('#battle').finish().animate({
                    top: '-=36'
                });
            } else if (e.keyCode === 39){
                direction = 'right';
                $('#battle').finish().animate({
                    left: '+=32'
                });
            } else if (e.keyCode === 40){
                direction = 'down';
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
const enemyFactory = {
    generateEnemyDefense() {
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "19"][y = "13"]').append('<div class="enemy-defense" id="0"></div>')
                newEnemy = $('<div class="enemy-defense" id="1"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "18"][y = "13"]').append('<div class="enemy-defense" id="1"></div>')
                newEnemy = $('<div class="enemy-defense" id="1"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "17"][y = "13"]').append('<div class="enemy-defense" id="2"></div>')
                newEnemy = $('<div class="enemy-defense" id="2"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "17"][y = "14"]').append('<div class="enemy-defense" id="3"></div>')
                newEnemy = $('<div class="enemy-defense" id="3"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "17"][y = "15"]').append('<div class="enemy-defense" id="4"></div>')
                newEnemy = $('<div class="enemy-defense" id="4"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "17"][y = "16"]').append('<div class="enemy-defense" id="5"></div>')
                newEnemy = $('<div class="enemy-defense" id="5"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "18"][y = "16"]').append('<div class="enemy-defense" id="6"></div>')
                newEnemy = $('<div class="enemy-defense" id="6"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "19"][y = "16"]').append('<div class="enemy-defense" id="7"></div>')
                newEnemy = $('<div class="enemy-defense" id="7"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
    },
    generateEnemyAttacker(){
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        // $('[x = "0"][y = "1"]').empty();
        $('[x = "0"][y = "1"]').append(`<div class="enemy-attacker" id="0"></div>`);
        newEnemy = $(`<div class="enemy-attacker" id="0"></div>`)[ 0 ];
    }
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        // $('[x = "1"][y = "1"]').empty();
        $('[x = "1"][y = "1"]').append(`<div class="enemy-attacker" id="1"></div>`);
        newEnemy = $(`<div class="enemy-attacker" id="1"></div>`)[ 0 ];
    }
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        // $('[x = "3"][y = "3"]').empty();
        $('[x = "3"][y = "3"]').append(`<div class="enemy-attacker" id="2"></div>`);
        newEnemy = $(`<div class="enemy-attacker" id="2"></div>`)[ 0 ];
    }
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        // $('[x = "3"][y = "4"]').empty();
        $('[x = "3"][y = "4"]').append(`<div class="enemy-attacker" id="3"></div>`);
        newEnemy = $(`<div class="enemy-attacker" id="3"></div>`)[ 0 ];
    }
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        // $('[x = "1"][y = "6"]').empty();
        $('[x = "1"][y = "6"]').append(`<div class="enemy-attacker" id="4"></div>`);
        newEnemy = $(`<div class="enemy-attacker" id="4"></div>`)[ 0 ];
    }
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        // $('[x = "0"][y = "6"]').empty();
        $('[x = "0"][y = "6"]').append(`<div class="enemy-attacker" id="5"></div>`);
        newEnemy = $(`<div class="enemy-attacker" id="5"></div>`)[ 0 ];
    }
    
}
}
enemyFactory.generateEnemyAttacker();
enemyFactory.generateEnemyDefense();


const enemyAttack = () =>{
    if (seconds % 2 === 0) {
        for (let i = 0; i < enemyAttackerArray.length; i++){
            for (let x = 0; x < enemyAttackerArray.length; x++){
                if (enemyAttackerArray[i] && knightDefenseArray[x]){
                    knightDefenseArray[x].hp = knightDefenseArray[x].hp - enemyAttackerArray[i].damage;
                    // if (knightDefenseArray[i].hp <= 0){
    
                    //     // how to remove from board?
                    //     const ('#id') = knightDefenseArray[i];
                    //     $('#id').remove();                
                    // }
                } else {
                    homeCity.defenses = homeCity.defenses - enemyAttackerArray[i].damage;
                    if (homeCity.defenses <= 0){
                        $('.home-city').remove();
                        alert('YOU LOSE!!!')
                    }
                }
            }
        }
    }
}
// enemyAttack();


const knightDefenseAttack = () =>{
    // if (seconds % 2 === 0) {
        for (let i = 0; i < knightDefenseArray.length; i++){
            for (let x = 0; x < enemyAttackerArray.length; x++){
                if (knightDefenseArray[i] && enemyAttackerArray[x]){
                    enemyAttackerArray[x].hp = enemyAttackerArray[x].hp - knightDefenseArray[i].damage;
                }
            
            }
        }
    // }
}
// console.log(enemyAttackerArray)
// knightDefenseAttack();
// console.log(enemyAttackerArray)
// knightDefenseAttack();
// console.log(enemyAttackerArray)
// knightDefenseAttack();
// console.log(enemyAttackerArray)
// knightDefenseAttack();
// console.log(enemyAttackerArray)
// knightDefenseAttack();


const battleUnitAttack = () => {
    $('.enemy-defense').on('click', function (e){
        const victimId = $(e.target).attr('id');
        console.log(victimId)
    if (seconds % 2 === 0){
        for (let i = 0; i < enemyDefenseArray.length; i++){
            if (victimId == enemyDefenseArray[i].id){
                enemyDefenseArray[i].hp = enemyDefenseArray[i].hp - battleUnitArray[0].damage;      
            } 
            // if (enemyDefenseArray[i].hp <= 0){
            //     $(e.target).remove()
            // }
        }
    }
    })
}
battleUnitAttack();

const battleUnitAttack2 = () => {
    $('.enemy-attacker').on('click', function (e){
        const victimId = $(e.target).attr('id');
        console.log(victimId)
        // if (seconds % 2 === 0){
            for (let i = 0; i < enemyAttackerArray.length; i++){
                if (victimId == enemyAttackerArray[i].id){
                    enemyAttackerArray[i].hp = enemyAttackerArray[i].hp - battleUnitArray[0].damage;      
                } 
    
            }
        // }
    })
}
battleUnitAttack2()

const battleUnitAttack3 = () => {
    $('.enemy-city').on('click', function (e){
        const victimId = $(e.target).attr('id');
        if (seconds % 2 === 0){
            if (victimId == 'enemy-city'){
                enemyCity.defenses = enemyCity.defenses - battleUnitArray[0].damage;
                if (enemyCity.defenses <= 0){
                    $('.enemy-city').remove();
                    alert('YOU WIN!!!')
                }
            }
        }

    })
}
battleUnitAttack3();

const deathCheck = () => {
    if (enemyCity.defenses <= 0){
    }
    if (homeCity.defenses <= 0){
        alert('YOU LOSE!!!')
    }
    // if anyone hits 0 hp remove them from the map

    // const deathHome = $('.home-knight').attr('id');
    // for (let i = 0; i < knightDefenseAttack.length; i++){
    //     if (knightDefenseArray[i].hp <= 0){
    //         knightDefenseArray.splice([i], 1);

    //     }
    // }
    const deathEnemy = $('.enemy-knight').attr('id');
    for (let i = 0; i < enemyAttackerArray.length; i++){
        if (deathEnemy == enemyAttackerArray[i].id && enemyAttackerArray[i].hp <= 0){
            enemyAttackerArray.splice([i], 1);
            $(enemyAttackerArray[i].id).remove();
        }
    }
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
    if (seconds % 30 === 0){
        enemyFactory.generateEnemyDefense();
    }
}