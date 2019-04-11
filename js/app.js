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
        $('[x ="0"][y="3"]').append('<div class="home-city-image"></div>');
        $('[x ="0"][y="3"]').append('<div class="home-city"></div>');
        $('[x ="1"][y="3"]').append('<div class="home-city"></div>');
        $('[x ="0"][y="4"]').append('<div class="home-city"></div>');
        $('[x ="1"][y="4"]').append('<div class="home-city"></div>');
    },
    makeEnemyCity() {
        $('[x ="18"][y="14"]').append('<div class="enemy-city-image"></div>');
        $('[x ="18"][y="14"]').append('<div class="enemy-city"></div>');
        $('[x ="19"][y="14"]').append('<div class="enemy-city"></div>')
        $('[x ="18"][y="15"]').append('<div class="enemy-city"></div>')
        $('[x ="19"][y="15"]').append('<div class="enemy-city"></div>')
    },
}
let level = 0;

let timePassing;
let seconds = 0;

const secondsGoUp = () => {
    seconds++;
}
secondsGoUp();

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
        this.hp = Math.floor(Math.random() * (50 - 25 + 1)) + 50;
        this.damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

const knightDefenseArray = [];

const knightFactory = {
    generateDefenseKnight(){
        // while (game.defenseCheck < 6){
            const coordinatesArray = [[0, 2], [1, 2], [2, 3], [2, 4], [1, 5], [0, 5]];
            // knightFactory.generateDefenseKnight every 30 seconds, if there isn't one in that spot
            for (let i = 0; i < coordinatesArray.length; i++){
                const coordinates = coordinatesArray[i];
                const xCoordinates = coordinates.shift(); 
                const yCoordinates = coordinates.pop();
                let newDefenseKnight = new Knights(knightDefenseArray.length, xCoordinates, yCoordinates);
                $(`[x = "${newDefenseKnight.x}"][y = "${newDefenseKnight.y}"]`).empty();
                $(`[x = "${newDefenseKnight.x}"][y = "${newDefenseKnight.y}"]`).append(`<div class="home-knight" id="${newDefenseKnight.id}"></div>`);
                knightDefenseArray.push(newDefenseKnight);
                game.defenseCheck++;
            }
        // }

    }
}

class BattleUnit {
    constructor(id, x, y){
        this.hp = Math.floor(Math.random() * (150 - 75 + 1)) + 75;
        this.damage = Math.floor(Math.random() * (75 - 25 + 1)) + 25;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

let battleUnitArray = [];

const battleUnitFactory = {
    generateBattleUnit(){
            let newBattleUnit = new BattleUnit('battle', 0, 7);
            battleUnitArray.push(newBattleUnit);
            $('[x ="0"][y="7"]').append('<div class="home-knight" id="battle"></div>');
    },
}
// Didn't make it so it doesn't move off screen
const battleMove = () => {
    $('#battle').on('click', function(e){
        $(document).keydown(function(e){
            if (e.keyCode === 37){ 
                direction = 'left';
                battleUnitArray[0].x = battleUnitArray[0].x--;
                $('#battle').finish().animate({
                    left: '-=62'
                });
            } else if (e.keyCode === 38){
                direction = 'up';
                battleUnitArray[0].y = battleUnitArray[0].y--;
                $('#battle').finish().animate({
                    top: '-=67'
                });
            } else if (e.keyCode === 39){
                direction = 'right';
                battleUnitArray[0].x = battleUnitArray[0].x++;
                $('#battle').finish().animate({
                    left: '+=62'
                });
            } else if (e.keyCode === 40){
                direction = 'down';
                battleUnitArray[0].y = battleUnitArray[0].y++;
                $('#battle').finish().animate({
                    top: '+=67'
                }); 
            }               
    
        });
    });
}

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
        this.hp = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
        this.damage = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

enemyDefenseArray = [];
enemyAttackerArray = [];

const enemyFactory = {
    generateEnemyDefense() {
        if (enemyDefenseArray.length < 7) {
            const coordinatesArray = [[19, 13], [18, 13], [17, 14], [17, 15], [18, 16], [19, 16]];
            for (let i = 0; i < coordinatesArray.length; i++){
                const coordinates = coordinatesArray[i];
                const xCoordinates = coordinates.shift(); 
                const yCoordinates = coordinates.pop();
                let newDefenseEnemy = new Enemies(enemyDefenseArray.length, xCoordinates, yCoordinates);
                $(`[x = "${newDefenseEnemy.x}"][y = "${newDefenseEnemy.y}"]`).empty();
                $(`[x = "${newDefenseEnemy.x}"][y = "${newDefenseEnemy.y}"]`).append(`<div class="enemy-defense" id="${newDefenseEnemy.id}"></div>`);
                enemyDefenseArray.push(newDefenseEnemy);
            }
        }
    },

    generateEnemyAttacker() {
        // random spawn
        if (enemyAttackerArray.length < 7) {
            const coordinatesArray = [[0, 1], [1, 1], [3, 3], [3, 4], [1, 6], [0, 6]];
            for (let i = 0; i < coordinatesArray.length; i++){
                const randomCoordinates = coordinatesArray[Math.floor(Math.random() * coordinatesArray.length)];
                const randomXCoordinates = randomCoordinates.shift(); 
                const randomYCoordinates = randomCoordinates.pop();
                let newEnemyAttacker = new Enemies(enemyAttackerArray.length, randomXCoordinates, randomYCoordinates);
                $(`[x = "${newEnemyAttacker.x}"][y = "${newEnemyAttacker.y}"]`).empty();
                $(`[x = "${newEnemyAttacker.x}"][y = "${newEnemyAttacker.y}"]`).append(`<div class="enemy-attacker" id="${newEnemyAttacker.id}"></div>`);
                enemyAttackerArray.push(newEnemyAttacker);
            }
        }
    }
    
}


// if I did this better, I would loop through squares where an enemy is possible,
// if enemy is present, the closest knight would fight the enemy
const enemyAttackerAttack = () => {
    for (let i = 0; i < enemyAttackerArray.length; i++){
        for (let x = 0; x < knightDefenseArray.length; x++){
            if (enemyAttackerArray[i].id == knightDefenseArray[x].id){
                knightDefenseArray[x].hp = knightDefenseArray[x].hp - enemyAttackerArray[i].damage;
            }  
            if (enemyAttackerArray[i].id == knightDefenseArray[x].id && knightDefenseArray[x].hp <= 0) {
                homeCity.defenses = homeCity.defenses - enemyAttackerArray[i].damage;
            }
            if (knightDefenseArray[x].hp <= 0){
                $(`[x = "${knightDefenseArray[x].x}"][y = "${knightDefenseArray[x].y}"]`).empty();
                knightDefenseArray.splice(knightDefenseArray[x]);
            }
            if (homeCity.defenses <= 0){
                $('.home-city').css('opacity', 0);
            }
        }
    }   
}

const knightDefenseAttack = () => {
    for (let i = 0; i < knightDefenseArray.length; i++){
        for (let x = 0; x < enemyAttackerArray.length; x++){
            if (knightDefenseArray[i].id == enemyAttackerArray[x].id){
                enemyAttackerArray[x].hp = enemyAttackerArray[x].hp - knightDefenseArray[i].damage;
            }  
            if (enemyAttackerArray[x].hp <= 0){
                $(`[x = "${enemyAttackerArray[x].x}"][y = "${enemyAttackerArray[x].y}"]`).empty();
                enemyAttackerArray.splice(enemyAttackerArray[x]);
            }
        }
    }   
}

const enemyDefenseAttack = () => {
    for (let i = 0; i < enemyDefenseArray.length; i++){
        for (let x = 0; x < battleUnitArray.length; x++){
            if (enemyDefenseArray[i].id == battleUnitArray[x].id){
                battleUnitArray[x].hp = battleUnitArray[x].hp - enemyDefenseArray[i].damage;
            }  
            if (battleUnitArray[x].hp <= 0){
                $(`[x = "${battleUnitArray[x].x}"][y = "${battleUnitArray[x].y}"]`).empty();
                battleUnitArray.splice(battleUnitArray[x]);
            }
        }
    }   
}

const battleUnitAttack = () => {
    $('.enemy-defense').on('click', function (e){
        const victimId = $(e.target).attr('id');
        for (let i = 0; i < enemyDefenseArray.length; i++){
            for (let x = 0; x < battleUnitArray.length; x++){
                if (victimId == enemyDefenseArray[i].id){
                    enemyDefenseArray[i].hp = enemyDefenseArray[i].hp - battleUnitArray[0].damage;
                    if (enemyDefenseArray[i] && enemyDefenseArray[i].hp <= 0){
                        $(`[x = "${enemyDefenseArray[i].x}"][y = "${enemyDefenseArray[i].y}"]`).empty();
                        enemyDefenseArray.splice(enemyDefenseArray[x]);
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
                    if (enemyAttackerArray[i] && enemyAttackerArray[i].hp <= 0){
                        $(`[x = "${enemyAttackerArray[i].x}"][y = "${enemyAttackerArray[i].y}"]`).empty();
                        enemyAttackerArray.splice(enemyAttackerArray[x]);
                    }  
                } 
            }
        }
    })
    $('.enemy-city').on('click', function (e){
        const victimId = $(e.target).attr('class');
        for (let i = 0; i < battleUnitArray.length; i++){
                if (victimId == 'enemy-city'){
                    enemyCity.defenses = enemyCity.defenses - battleUnitArray[i].damage;
                    if (enemyCity.defenses <= 0){
                        $(`.enemy-city`).css('opacity', 0);
                    }  
                } 
        }            
    })

}

const playButtonInGame = () => {
    $('body').prepend('<button id="start">PLAY</button>');
        $('#start').click(function(){
            clearInterval(timePassing)
            timePassing = setInterval(secondsGoUp, 1000);
        })
}

const pauseGame = () => {
    $('body').prepend('<button id="stop">PAUSE</button>');
    $('#stop').click(function(){
        clearInterval(timePassing);
    })
}

const generator = () => {
        enemyFactory.generateEnemyAttacker();
        enemyFactory.generateEnemyDefense(); 
        battleUnitFactory.generateBattleUnit();
        battleMove();
        knightFactory.generateDefenseKnight();
}

const levelUp = () => {
        level++;
        $('.level').text('Level: ' + level);
}
setInterval(levelUp, 60000)

const showOnScreen = () => {
    $('body').prepend('<div class="stats"></div>');
    $('.level').empty();
    $('.stats').prepend(`<div class="level">Level: ${level} </div>`);
    $('.container').append('<div class="audio"></div>');
    $('.audio').css('opacity', '0');
    $('.audio').append('<audio loop="loop" autoplay="autoplay" controls="controls">' + '<source src="Audio/warcraft.ogg"/>' + '</audio>');
}

const attacks = () => {
        setInterval(knightDefenseAttack, 20000)
        setInterval(enemyAttackerAttack, 20000)
        setInterval(battleUnitAttack, 2000)
        setInterval(enemyDefenseAttack, 1000)
}

const deathCheck = () => {
    if (enemyCity.defenses <= 0){
        clearInterval(timePassing)
        $('body').empty();
        $('body').css('background', 'black');
        $('body').append('<img class="victory" src="images/victory.png">'); 
        $('body').append('<div class="start-button"></div>');
        $('.start-button').append('<button id="play-again">PLAY AGAIN</button>');
        $('#play-again').click(function(){
            // clearInterval(timePassing)
            window.location.reload(true);
            timePassing = setInterval(secondsGoUp, 1000);
        })    
    }
    if (homeCity.defenses <= 0){
        $('body').empty();
        $('body').css('background', 'black');
        $('body').append('<img class="game-over" src="images/game-over.png">'); 
        $('body').append('<div class="start-button"></div>');
        $('.start-button').append('<button id="play-again">PLAY AGAIN</button>');
        $('#play-again').click(function(){
            // clearInterval(timePassing)
            window.location.reload(true);
            timePassing = setInterval(secondsGoUp, 1000);  
        })  
    }
}
setInterval(deathCheck, 1000);

const render = () => {
    $('.logo').remove();
    $('.start-button').remove();
    // $('audio').css('opacity', '0')
    $('body').css('background-image', 'url(images/background.jpg)');
    game.makeGrid();
    game.makeHomeCity();
    game.makeEnemyCity();
    pauseGame();
    playButtonInGame();
    showOnScreen();
    generator();
    attacks();
}

const startGame = () => {
    $('body').append('<div class="start-button"></div>');
    $('.start-button').append('<button id="start">PLAY</button>');
    // $('body').prepend('<div class="audio"></div>');
    // $('.audio').append('<audio loop="loop" autoplay="autoplay" controls="controls">' + '<source src="Audio/warcraft.ogg"/>' + '</audio>');
    $('#start').click(function(){
        timePassing = setInterval(secondsGoUp, 1000);
        render();
    })
    }

const startUpPage = () => {
    $('body').empty();
    $('body').css('background-color', 'black');
    $('body').append('<div class="logo"></div>');
    $('.logo').append('<img class="logo-img" src="images/warcraftish-logo.png">')
    startGame();
}

const generatorCheck = () => {
        if (enemyAttackerArray.length === 0){
            enemyFactory.generateEnemyAttacker();
        }
        if (!battleUnitArray[0]){
            battleUnitFactory.generateBattleUnit();
            battleMove();
        }
        if (knightDefenseArray.length === 0){
            knightFactory.generateDefenseKnight();
        }
        if (enemyDefenseArray.length === 0){
            enemyFactory.generateEnemyDefense();
        }
}

setInterval(generatorCheck, 10000)

startUpPage();
    



    
    
