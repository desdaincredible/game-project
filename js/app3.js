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
        this.hp = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        this.damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
        this.id = id;
        this.x = x;
        this.y = y;
    }
    move(){

    }

    attack(){

    }
}

const knightFactory = {
    knightsArray: [],
    // make this DRY
    // why are some only showing as jquery objects?
    generateDefenseKnight(){
        // let newDefenseKnight = new Knights(this.knightsArray.length);
        // knightFactory.generateDefenseKnight every 30 seconds, if there isn't one in that spot
        if (game.defenseCheck < 8 && game.lives > 0){
            let newDefenseKnight = new Knights(this.knightsArray.length, 0, 2);
            if (Math.random() < 0.5){
            $('[x = "0"][y = "2"]').empty();
            $('[x = "0"][y = "2"]').append('<div class="home-knight" id="d1" occupied="true"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "1"][y = "2"]').empty();
            $('[x = "1"][y = "2"]').append('<div class="home-knight" id="d2"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "2"][y = "2"]').empty();
            $('[x = "2"][y = "2"]').append('<div class="home-knight" id="d3"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "2"][y = "3"]').empty();
            $('[x = "2"][y = "3"]').append('<div class="home-knight" id="d4"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "2"][y = "4"]').empty();
            $('[x = "2"][y = "4"]').append('<div class="home-knight" id="d5"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d6"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "2"][y = "5"]').empty();
            $('[x = "2"][y = "5"]').append('<div class="home-knight" id="d7"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "1"][y = "5"]').empty();
            $('[x = "1"][y = "5"]').append('<div class="home-knight" id="d8"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
            if (Math.random() < 0.5){
            $('[x = "0"][y = "5"]').empty();
            $('[x = "0"][y = "5"]').append('<div class="home-knight" id="d9"></div>');
            this.knightsArray.push(newDefenseKnight);
            newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
            game.defenseCheck++;
            }
        }
        // make rest of spawn locations once attacks work
    },
    generateBattleUnit(){
        // new battle unit every 2 minutes, if one doesn't exist
        if (game.battleUnitCheck < 1){
            let newBattleUnit = new Knights('battle');
            $('[x ="0"][y="7"]').append('<div class="home-knight" id="battle"></div>');
            game.battleUnitCheck++;  
            // this.knightsArray.push(newBattleUnit);      
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
        this.hp = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        this.damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        this.id = id;
        this.x = x;
        this.y = y;
    }

attackCity(){
    // if near knight or home city, auto attack (city takes priority)
    homeCity.defenses - enemyFactory.enemyArray.damage;
}
attackCity();
attackCity();
attackCity();


// attackCity(){
//     // if near knight or home city, auto attack (city takes priority)
//     if ($('.enemy-knight').x == 0 && $('.enemy-knight').y == 1 || $('.enemy-knight').x == 1 && $('.enemy-knight').y == 1){
//         $('.enemy-knight').x += 1;
//     }
//     if ($('.enemy-knight').x == 0 && $('.enemy-knight').y == 6  && $('.home-knight') == false || $('.enemy-knight').x == 1 && $('.enemy-knight').y == 6  && $('.home-knight') == false){
//         $('.enemy-knight').x -= 1;
//     }
//     homeCity.defenses - Enemies.damage;
// }

attackKnight(){
    knights.hp - Enemies.damage;
    }
}

attackHomeCity = () => {
    // if near knight or home city, auto attack (city takes priority)
    for (let i = 0; i < enemyFactory.enemyArray.length; i++){
            homeCity.defenses - 20;
    }
}

// find a way to do this DRY
// fix id numbers
const enemyFactory = {
    enemyArray: [],
    // generateEnemyCityDefense() {
    //     if (game.enemyCityDefense < 8){
    //         let newEnemy = new Enemies(this.enemyArray.length);
    //         this.enemyArray.push(newEnemy);
    //             $('[x = "19"][y = "13"]').append('<div class="enemy-knight" id="e1"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="[i]"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "19"][y = "16"]').append('<div class="enemy-knight" id="e2"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e2"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "18"][y = "13"]').append('<div class="enemy-knight" id="e3"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e3"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "18"][y = "16"]').append('<div class="enemy-knight" id="e4"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e4"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "17"][y = "13"]').append('<div class="enemy-knight" id="e5"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e5"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "17"][y = "14"]').append('<div class="enemy-knight" id="e6"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e6"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "17"][y = "15"]').append('<div class="enemy-knight" id="e7"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e7"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //             $('[x = "17"][y = "16"]').append('<div class="enemy-knight" id="e8"></div>')
    //             newEnemy = $('<div class="enemy-knight" id="e8"></div>')[ 0 ];
    //             game.enemyCityDefense++;

    //     }
    // },
    generateEnemy(){
        // let newEnemy = new Enemies(this.enemyArray.length,);
        // this.enemyArray.push(newEnemy);

        if (Math.random() < 0.3){
            let newEnemy = new Enemies(this.enemyArray.length, 0, 1);
            this.enemyArray.push(newEnemy);
            if ('')
            $('[x = "0"][y = "2"]').empty();
            $('[x = "0"][y = "2"]').append(`<div class="enemy-knight" id="e9"></div>`);
            newEnemy = $(`<div class="enemy-knight" id="e9"></div>`)[ 0 ];
            $('#e9').x = 0;
            $('#e9').y = 1;
                if (seconds % 5 === 0){
                    attackHomeCity()
                }
        }
        if (Math.random() < 0.3){
            let newEnemy = new Enemies(this.enemyArray.length, 1, 1);
            this.enemyArray.push(newEnemy);
            $('[x = "1"][y = "1"]').empty();
            $('[x = "1"][y = "1"]').append('<div class="enemy-knight" id="e10"></div>');
            newEnemy = $('<div class="enemy-knight" id="e10"></div>')[ 0 ];
            $('#e10').x = 1;
            $('#e10').y = 1;
        } 
        // if (Math.random() < 0.3) {
        //     $('[x = "2"][y = "1"]').empty();
        //     $('[x = "2"][y = "1"]').append('<div class="enemy-knight" id="e11"></div>');
        //     newEnemy = $('div class="enemy-knight" id="e11"></div>')[ 0 ];
        // } 
        // if (Math.random() < 0.3) {
        //     $('[x = "3"][y = "1"]').empty();
        //     $('[x = "3"][y = "1"]').append('<div class="enemy-knight" id="e12"></div>');
        //     newEnemy = $('div class="enemy-knight" id="e12"></div>')[ 0 ];
        // }
        // if (Math.random() < 0.3){
        //     $('[x = "3"][y = "2"]').empty();
        //     $('[x = "3"][y = "2"]').append('<div class="enemy-knight" id="e13"></div>');
        //     newEnemy = $('div class="enemy-knight" id="e13"></div>')[ 0 ];
        // }
        // if (Math.random() < 0.3){
        //     $('[x = "3"][y = "3"]').empty();
        //     $('[x = "3"][y = "3"]').append('<div class="enemy-knight" id="e14"></div>');
        //     newEnemy = $('div class="enemy-knight" id="14"></div>')[ 0 ];
        // } 
        // if (Math.random() < 0.3) {
        //     $('[x = "3"][y = "4"]').empty();
        //     $('[x = "3"][y = "4"]').append('<div class="enemy-knight" id="e15"></div>');
        //     newEnemy = $('div class="enemy-knight" id="15"></div>')[ 0 ];
        // } 
        // if (Math.random() < 0.3) {
        //     $('[x = "3"][y = "5"]').empty();
        //     $('[x = "3"][y = "5"]').append('<div class="enemy-knight" id="e16"></div>');
        //     newEnemy = $('div class="enemy-knight" id="16"></div>')[ 0 ];
        // }
        // if (Math.random() < 0.3) {
        //     $('[x = "3"][y = "6"]').empty();
        //     $('[x = "3"][y = "6"]').append('<div class="enemy-knight" id="e17"></div>');
        //     newEnemy = $('<div class="enemy-knight" id="e17"></div>')[ 0 ];
        // }
        // if (Math.random() < 0.3) {
        //     $('[x = "2"][y = "6"]').empty();
        //     $('[x = "2"][y = "6"]').append('<div class="enemy-knight" id="e18"></div>');
        //     newEnemy = $('div class="enemy-knight" id="e18"></div>')[ 0 ];
        // }
        // if (Math.random() < 0.3) {
        //     $('[x = "1"][y = "6"]').empty();
        //     $('[x = "1"][y = "6"]').append('<div class="enemy-knight" id="e19"></div>');
        //     newEnemy = $('div class="enemy-knight" id="e19"></div>')[ 0 ];
        // }
        // if (Math.random() < 0.3) {
        //     $('[x = "0"][y = "6"]').empty();
        //     $('[x = "0"][y = "6"]').append('<div class="enemy-knight" id="e20"></div>');
        //     newEnemy = $('div class="enemy-knight" id="e20"></div>')[ 0 ];
        // }

    }
} 
// enemyFactory.generateEnemyCityDefense();
enemyFactory.generateEnemy();

// attackHomeCity = () => {
//     // if near knight or home city, auto attack (city takes priority)
//     for (let i = 0; i < enemyFactory.enemyArray.length; i++){
//         // if (enemyFactory.enemyArray[i].x == 0 && enemyFactory.enemyArray[i].y == 1){
//             homeCity.defenses - enemyFactory.enemyArray[i].damage;
//         // }
//     }
// }
// for (let i = 0; i < knightFactory.knightsArray.length; i++){
//     if (knightFactory.knightsArray[i].x != 2 && knightFactory.knightsArray[i].y != 0){
//         attackHomeCity();
//     }
// }
    
    // how to attack? 
    // randomize their attacks (accuracy and damage inflicted)

    // give them hp stat, they disappear when it reaches 0



    // is square occupied?
    // if yes, attack 
        // attack is target square's hp - attacker's damage


/////////////////////////////
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
        this.hp = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        this.damage = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
        this.id = id;
        this.x = x;
        this.y = y;
    }
    move(){

    }

    attack(){

    }
}

knightsArray = [],

// const knightFactory = {
generateDefenseKnight = () => {
        let newDefenseKnight = new Knights(0, 0, 2);
        $('[x = "0"][y = "2"]').empty();
        $('[x = "0"][y = "2"]').append('<div class="home-knight" id="d1"></div>');
        knightsArray.push(newDefenseKnight);
        newDefenseKnight = $('<div class="home-knight" id="d1"></div>');
        game.defenseCheck++;
}

// generateBattleUnit(){
//         let newBattleUnit = new Knights('battle');
//         $('[x ="0"][y="7"]').append('<div class="home-knight" id="battle" ></div>');
//         game.battleUnitCheck++;  
//         // this.knightsArray.push(newBattleUnit);      
// },
// } 
// knightFactory.generateBattleUnit();
// knightFactory.generateDefenseKnight();

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
        this.hp = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
        this.damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

const enemyAttack = () => {
    if ($(`.game-square[x=${this.x+1}][y=${this.y}]`).attr('.home-knight')) {
        knightsArray[0].hp = knightsArray[0].hp--;
    }
}

enemyArray = [];
// const enemyFactory = {
//     enemyArray: [],
//     generateEnemyCityDefense() {
//         let newEnemy = new Enemies(this.enemyArray.length);
//         this.enemyArray.push(newEnemy);
//             $('[x = "19"][y = "13"]').append('<div class="enemy-knight" id="e1"></div>')
//             newEnemy = $('<div class="enemy-knight" id="[i]"></div>')[ 0 ];
//             game.enemyCityDefense++;
//     },
    const generateEnemy = () => {
        let newEnemy = new Enemies(0, 0, 1);
        this.enemyArray.push(newEnemy);
        $('[x = "0"][y = "1"]').empty();
        $('[x = "0"][y = "1"]').append(`<div class="enemy-knight" id="e9"></div>`);
        console.log(newEnemy.damage);
    }
// } 
// enemyFactory.generateEnemyCityDefense();
// enemyFactory.generateEnemy();


const render = () => {
    console.log(knightsArray);
    generateDefenseKnight();
    console.log(enemyArray);
    generateEnemy();
        console.log(knightsArray[0]);
        enemyAttack();
        console.log(knightsArray[0]);
        enemyAttack();
        console.log(knightsArray[0]);
        enemyAttack();
}
render();

// is square occupied?
    // by person or city?

// if person, attack 
    // attack is target square's hp - attacker's damage
// if city
    // attack is city's defense = attacker's damage
// render