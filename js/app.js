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
     

let homeCity = {
    defenses: 500,
}
homeCity = $('<div class="home-city" id="hc"></div>')[ 0 ];

class Knights {
    constructor(hp, damage, id){
        this.hp = hp;
        this.damage = damage;
        this.id = id;
    }
    move(){

    }

    attack(){

    }
}

const knightFactory = {
    knightsArray: [],
    generateDefenseKnight(){
        let newDefenseKnight = new Knights(this.knightsArray.length);
        this.knightsArray.push(newDefenseKnight);
        // knightFactory.generateDefenseKnight every 30 seconds, if there isn't one in that spot
        if (game.defenseCheck < 8 && game.lives > 0){
            // Math.random for location
            $('[x = "0"][y = "1"]').empty();
            $('[x = "1"][y = "1"]').append('<div class="home-knight" id="d1"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
        }
        // make rest of spawn locations once attacks work
    },
    generateBattleUnit(){
        // new battle unit every 2 minutes, if one doesn't exist
        if (game.battleUnitCheck < 1){
            $('[x ="0"][y="7"]').append('<div class="home-knight" id="battle"></div>')
            game.battleUnitCheck++;        
        }
    },
    findKnight(index){
        return this.knights[index];
    }
} 
knightFactory.generateBattleUnit();
knightFactory.generateDefenseKnight();

if (seconds % 30 === 0){
    KnightFactory.generateDefenseKnight();
}

//////////////
// if I can't get the movement thing to work, maybe change idea to having one unit that 
// walks/attacks and ability to place stationary fighters to defend city
//////////////
// if not home city, enemy city, .home-knight or enemy-knight, can move/spawn
// if home city or .home-knight, enemy can attack
// if enemy city or .enemy-knight, home knights can attack


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

// Create enemy city with enemies that defend their city.

const makeEnemyCity = () => {
    $('[x ="19"][y="14"]').append('<div class="enemy-city"></div>')
    $('[x ="19"][y="15"]').append('<div class="enemy-city"></div>')
    $('[x ="18"][y="14"]').append('<div class="enemy-city"></div>')
    $('[x ="18"][y="15"]').append('<div class="enemy-city"></div>')
}
makeEnemyCity();

const enemyCity = {
    defenses: 500,
    location: ["19,14", "19,15", "18,14", "18,15"], // not sure this is the way I want to save this
}

class Enemies {
    constructor(id){
        this.hp = 100;
        this.damage = 15;
        this.id = id;
    }

    attackCity(){
        // if near knight or home city, auto attack (city takes priority)
        homeCity.defenses - Enemies.damage;
    }
    attackKnight(){
        knights.hp - Enemies.damage;
    }
}

enemyArray = [];

class EnemyFactory {
    constructor(){
        this.enemies = [];
    }
    generateEnemy(){
        let newEnemy = new Enemies(this.enemies.length);
        if (Math.random() < 0.3){
            $('[x = "0"][y = "1"]').empty();
            $('[x = "0"][y = "1"]').append('<div class="enemy-knight" id="e9"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e9"></div>')[ 0 ];

        }
        if (Math.random() < 0.3){
            $('[x = "1"][y = "1"]').empty();
            $('[x = "1"][y = "1"]').append('<div class="enemy-knight" id="e10"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e10"></div>')[ 0 ];
        } 
        if (Math.random() < 0.3) {
            $('[x = "2"][y = "1"]').empty();
            $('[x = "2"][y = "1"]').append('<div class="enemy-knight" id="e11"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e11"></div>')[ 0 ];
        } 
        if (Math.random() < 0.3) {
            $('[x = "3"][y = "1"]').empty();
            $('[x = "3"][y = "1"]').append('<div class="enemy-knight" id="e12"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e12"></div>')[ 0 ];
        }
        if (Math.random() < 0.3){
            $('[x = "3"][y = "2"]').empty();
            $('[x = "3"][y = "2"]').append('<div class="enemy-knight" id="e13"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e13"></div>')[ 0 ];
        }
        if (Math.random() < 0.3){
            $('[x = "3"][y = "3"]').empty();
            $('[x = "3"][y = "3"]').append('<div class="enemy-knight" id="e14"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="14"></div>')[ 0 ];
        } 
        if (Math.random() < 0.3) {
            $('[x = "3"][y = "4"]').empty();
            $('[x = "3"][y = "4"]').append('<div class="enemy-knight" id="e15"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="15"></div>')[ 0 ];
        } 
        if (Math.random() < 0.3) {
            $('[x = "3"][y = "5"]').empty();
            $('[x = "3"][y = "5"]').append('<div class="enemy-knight" id="e16"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="16"></div>')[ 0 ];
        }
        if (Math.random() < 0.3) {
            $('[x = "3"][y = "6"]').empty();
            $('[x = "3"][y = "6"]').append('<div class="enemy-knight" id="e17"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="17"></div>')[ 0 ];
        }
        if (Math.random() < 0.3) {
            $('[x = "2"][y = "6"]').empty();
            $('[x = "2"][y = "6"]').append('<div class="enemy-knight" id="e18"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e18"></div>')[ 0 ];
        }
        if (Math.random() < 0.3) {
            $('[x = "1"][y = "6"]').empty();
            $('[x = "1"][y = "6"]').append('<div class="enemy-knight" id="e19"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e19"></div>')[ 0 ];
        }
        if (Math.random() < 0.3) {
            $('[x = "0"][y = "6"]').empty();
            $('[x = "0"][y = "6"]').append('<div class="enemy-knight" id="e20"></div>');
            this.enemies.push(newEnemy);
            // newEnemy = $('div class="enemy-knight" id="e20"></div>')[ 0 ];
        }

    }
    findEnemy(index){
        return this.enemies[index];
    }
} 
const enemyFactory = new EnemyFactory(this.hp, this.damage, this.id);
enemyFactory.generateEnemy();


    // how many to defend city? 8
const addEnemiesToUI = () => {
    let enemy1 = new Enemies(100, 15, 1);
    enemyArray.push(enemy1);
    $('[x = "19"][y = "13"]').append('<div class="enemy-knight" id="e1"></div>')
    enemy1 = $('<div class="enemy-knight" id="e1"></div>')[ 0 ];
    let enemy2 = new Enemies(100, 15, 2);
    enemyArray.push(enemy2);
    $('[x = "19"][y = "16"]').append('<div class="enemy-knight" id="e2"></div>')
    enemy2 = $('<div class="enemy-knight" id="e2"></div>')[ 0 ];
    let enemy3 = new Enemies(100, 15, 3);
    enemyArray.push(enemy3);
    $('[x = "18"][y = "13"]').append('<div class="enemy-knight" id="e3"></div>')
    enemy3 = $('<div class="enemy-knight" id="e3"></div>')[ 0 ];
    let enemy4 = new Enemies(100, 15, 4);
    enemyArray.push(enemy4);
    $('[x = "18"][y = "16"]').append('<div class="enemy-knight" id="e4"></div>')
    enemy4 = $('<div class="enemy-knight" id="e4"></div>')[ 0 ];
    let enemy5 = new Enemies(100, 15, 5);
    enemyArray.push(enemy5);
    $('[x = "17"][y = "13"]').append('<div class="enemy-knight" id="e5"></div>')
    enemy5 = $('<div class="enemy-knight" id="e5"></div>')[ 0 ];
    let enemy6 = new Enemies(100, 15, 6);
    enemyArray.push(enemy6);
    $('[x = "17"][y = "14"]').append('<div class="enemy-knight" id="e6"></div>')
    enemy6 = $('<div class="enemy-knight" id="e6"></div>')[ 0 ];
    let enemy7 = new Enemies(100, 15, 7);
    enemyArray.push(enemy7);
    $('[x = "17"][y = "15"]').append('<div class="enemy-knight" id="e7"></div>')
    enemy7 = $('<div class="enemy-knight" id="e7"></div>')[ 0 ];
    let enemy8 = new Enemies(100, 15, 8);
    enemyArray.push(enemy8);
    $('[x = "17"][y = "16"]').append('<div class="enemy-knight" id="e8"></div>')
    enemy8 = $('<div class="enemy-knight" id="e8"></div>')[ 0 ];
}
addEnemiesToUI();

    // Have enemies pop up and randomly attack home city.

    
    // how to attack? 
    // randomize their attacks (accuracy and damage inflicted)

    // give them hp stat, they disappear when it reaches 0
