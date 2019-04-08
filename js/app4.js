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
    },
    battleUnitCheck: 0,
    defenseCheck: 0,
    lives: 3,
    level: 0,
    enemyCityDefense: 0,

}
game.makeGrid();
game.makeHomeCity();


// Set up timer.
    // set up in seconds
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
// what links to timer? 
    // everyone's attacks (can only hit so often)
    // enemy spawn times and amounts (randomized)
    // level ups
    // do cities build defenses back up? 
        // knightFactory.generateDefenseKnight every 30 seconds, if there isn't one in that spot
    // should timer appear on screen?
    // As time increases, so do enemy hordes.   

// Show Stats on screen
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
            let newDefenseKnight = new Knights(knightDefenseArray.length, 0, 2);
            $('[x = "0"][y = "2"]').empty();
            $('[x = "0"][y = "2"]').append('<div class="home-knight" id="1" occupied="true"></div>');
            knightDefenseArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="1"></div>');
            game.defenseCheck++;
        }
    },
}
knightFactory.generateDefenseKnight();

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
const makeEnemyCity = () => {
    $('[x ="18"][y="14"]').append('<div class="enemy-city"></div>')
}
makeEnemyCity();

const enemyCity = {
    defenses: 500,
    location: ["19,14", "19,15", "18,14", "18,15"], // not sure this is the way I want to save this
}

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

const enemyFactory = {
    generateEnemyDefense() {
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "19"][y = "13"]').append('<div class="enemy-knight" id="0"></div>')
                newEnemy = $('<div class="enemy-knight" id="1"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
        if (game.enemyCityDefense < 8){
            let newEnemy = new Enemies(enemyDefenseArray.length);
            enemyDefenseArray.push(newEnemy);
                $('[x = "18"][y = "13"]').append('<div class="enemy-knight" id="1"></div>')
                newEnemy = $('<div class="enemy-knight" id="1"></div>')[ 0 ];
                game.enemyCityDefense++;
        }
    },
    generateEnemyAttacker(){
    if (Math.random() < 0.3){
        let newEnemy = new Enemies(enemyAttackerArray.length, 0, 1);
        enemyAttackerArray.push(newEnemy);
        $('[x = "0"][y = "1"]').empty();
        $('[x = "0"][y = "1"]').append(`<div class="enemy-knight" id="e9"></div>`);
        newEnemy = $(`<div class="enemy-knight" id="e9"></div>`)[ 0 ];
        $('#e9').x = 0;
        $('#e9').y = 1;
    }
}
}
enemyFactory.generateEnemyDefense();
enemyFactory.generateEnemyAttacker();


enemyAttackCity = () =>{
    for (let i = 0; i < enemyAttackerArray.length; i++){
        for (let x = 0; x < enemyAttackerArray.length; x++){
            if (enemyAttackerArray[i] && knightDefenseArray[x]){
                knightDefenseArray[x].hp = knightDefenseArray[x].hp - enemyAttackerArray[i].damage;
            } else {
                homeCity.defenses = homeCity.defenses - enemyAttackerArray[i].damage;
            }
        }
    }
}

// if anyone hits 0 hp remove them from the map
// if home city hits 0 defenses, you lose

knightDefenseAttack = () =>{
    for (let i = 0; i < knightDefenseArray.length; i++){
        for (let x = 0; x < enemyAttackerArray.length; x++){
            if (knightDefenseArray[i] && enemyAttackerArray[x]){
                enemyAttackerArray[x].hp = enemyAttackerArray[x].hp - knightDefenseArray[i].damage;
            }
        
        }
    }
}

// all enemies hp are connected, hitting one takes hp from all
battleUnitAttack = () => {
    $('.enemy-knight').on('click', function (e){
        console.log(enemyDefenseArray[0].hp)
        for (let i = 0; i < enemyDefenseArray.length; i++){
            enemyDefenseArray[i].hp = enemyDefenseArray[i].hp - battleUnitArray[0].damage;        
        }
    })
}
battleUnitAttack();

console.log(battleUnitArray[0].damage)
