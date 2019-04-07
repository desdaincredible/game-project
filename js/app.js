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
            // should timer appear on screen?
            // As time increases, so do enemy hordes.
    

// Create a grid.
    // how big/number of squares? 
    // size of squares?
    // starting with 20 x 20, 30px x 30px squares
const makeGrid = () => {
    $('body').append('<div class="container"><div>')
    for (let x = 0; x < 20; x++){
        for (let y = 0; y < 20; y++){
        $('.container').append(`<div class="grid-squares" x="${[x]}" y="${[y]}"></div>`)
        }
    }
}
makeGrid();

// Create home city to defend. Defense set at 500.
    // how many squares does it take up? can you move it? 4 x 4 at 0,3
const makeHomeCity = () => {
    $('[x ="0"][y="3"]').append('<div class="home-city"></div>');
    // $('[x ="0"][y="4"]').append('<div class="home-city"></div>')
    // $('[x ="1"][y="3"]').append('<div class="home-city"></div>')
    // $('[x ="1"][y="4"]').append('<div class="home-city"></div>')
}
makeHomeCity();

let homeCity = {
    defenses: 500,
}

homeCityArray = [];
homeCityArray.push(homeCity);

// attaching object to div (stats show when added to array)
homeCity = $('<div class="home-city" id="hc"></div>')[ 0 ];


// Create fighters and make them able to move around the board.
    // how many to defend city?  start with 8
    // how to get them to move?
    // how to deterimine if they are player's people or enemies? class="home-knight"
    // how to spawn new ones (if necessary)?
    // how to attack? 
        //randomize attacks (accuracy and damage inflicted)
    // how to defend?


class Knights {
    constructor(hp, damage, id){
        this.hp = hp;
        this.damage = damage;
        this.id = id;
        // this.accuracy = accuracy;
        // this.x = 0;
        // this.y = 0;
    }
    move(){

    }

    attack(){

    }
}

// add 'attaching to div' and use to keep track of all knights
class KnightFactory {
    constructor(){
        this.knights = [];
    }
    generateKnight(){
        const newKnight = new Knights(this.knights.length);
        this.knights.push(newKnight);
        // generate new defense knight every 30 seconds
        // setup once timer is set
    }
    findKnight(index){
        return this.knights[index];
    }
} 


const addKnightsToUI = () => {
$('[x ="0"][y="2"]').append('<div class="home-knight" id="hk1"></div>')
$('[x ="1"][y="2"]').append('<div class="home-knight" id="hk2"></div>')
}
addKnightsToUI();


const knightArray = [];

// instantiating the first knight
let knight1 = new Knights(100, 15, 'hk1');
knightArray.push(knight1);

let knight2 = new Knights(100, 15, 'hk2');
knightArray.push(knight2);

// attaching object to div (stats show when added to array)
// find a way to make this work when generating new knights
knight1 = $('<div class="home-knight" id="hk1"></div>')[ 0 ];
knight2 = $('<div class="home-knight" id="hk2"></div>')[ 0 ];

// movement, figure out how to move them individually.
// make it a function and call it in the class somehow?

//////////////
// if I can't get the movement thing to work, maybe change idea to having one unit that 
// walks/attacks and ability to place stationary fighters to defend city
//////////////

// currentKnight = some kind of hybrid jquery js thing
// the div selected, unique id attribute
// maybe create an array with knight objects, referencing their id key (make it same as div)
// loop through and if knight.id == attr id, do the thing
let currentKnight = ''; 

// const knightMove = () => {
//     const instance = this;
//         $('.home-knight').on('click', function(e){
//             // currentKnight = e.target;
//             $(document).keydown(function(e){
//                 if (e.keyCode === 37){ 
//                     direction = 'left';
//                     $('.home-knight').finish().animate({
//                         left: '-=32'
//                     });
//                 } else if (e.keyCode === 38){
//                     direction = 'up';
//                     $('.home-knight').finish().animate({
//                         top: '-=36'
//                     });
//                 } else if (e.keyCode === 39){
//                     direction = 'right';
//                     $('.home-knight').finish().animate({
//                         left: '+=32'
//                     });
//                 } else if (e.keyCode === 40){
//                     direction = 'down';
//                     $('.home-knight').finish().animate({
//                         top: '+=36'
//                     }); 
//                 }               
        
//             });
//         });
// }

// knightMove();





// $('.home-knight').on('click', function(e){
//     currentKnight = e.target;
//     if (currentKnight == $('#hk1')){
//         knight1.move()
//     } else if (currentKnight == $('#hk2')){
//         knight2.move();
//     }        
// });

// const selectKnight = () => {
//     knightArray.forEach(function() {
//         $('.home-knight').on('click', function(e){
//             // if div id == [i]

//         })
//     })

// getting there...can move 1 move when clicked. Both still move together.
// maybe use div id, add a matching value to pull with .val that is unique?




// const move = () => {
//     $(document).keydown(function(e){
//         if (currentKnight){
//             if (e.keyCode === 37){ 
//                 direction = 'left';
//                 $('.home-knight').finish().animate({
//                     left: '-=32'
//                 });
//             } else if (e.keyCode === 38){
//                 direction = 'up';
//                 $('.home-knight').finish().animate({
//                     top: '-=36'
//                 });
//             } else if (e.keyCode === 39){
//                 direction = 'right';
//                 $('.home-knight').finish().animate({
//                     left: '+=32'
//                 });
//             } else if (e.keyCode === 40){
//                 direction = 'down';
//                 $('.home-knight').finish().animate({
//                     top: '+=36'
//                 });                
//             }
//         }
//     });
// }
// move();


// $(document).keyup(function(e){
//     if(currentKnight){
//         currentKnight = false;
//         $('.home-knight').stop(true, true);
//     }
// })

// tried .focus, .off, button to remove all event listeners with .off

// make global variable currentPlayer and change it with on click. 
// Move function will only work on current player.


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
            $('[x = "0"][y = "5"]').empty();
            $('[x = "0"][y = "5"]').append('<div class="enemy-knight" id="e9"></div>');
            this.enemies.push(newEnemy);
        }
        if (Math.random() < 0.3){
            $('[x = "1"][y = "5"]').empty();
            $('[x = "1"][y = "5"]').append('<div class="enemy-knight" id="e10"></div>');
            this.enemies.push(newEnemy);
        } 
        if (Math.random() < 0.3) {
            $('[x = "2"][y = "5"]').empty();
            $('[x = "2"][y = "5"]').append('<div class="enemy-knight" id="e11"></div>');
            this.enemies.push(newEnemy);
        } 
        if (Math.random() < 0.3) {
            $('[x = "2"][y = "4"]').empty();
            $('[x = "2"][y = "4"]').append('<div class="enemy-knight" id="e12"></div>');
            this.enemies.push(newEnemy);
        }
        if (Math.random() < 0.3){
            $('[x = "0"][y = "5"]').empty();
            $('[x = "0"][y = "5"]').append('<div class="enemy-knight" id="e13"></div>');
            this.enemies.push(newEnemy);
        }
        if (Math.random() < 0.3){
            $('[x = "1"][y = "5"]').empty();
            $('[x = "1"][y = "5"]').append('<div class="enemy-knight" id="e14"></div>');
            this.enemies.push(newEnemy);
        } 
        if (Math.random() < 0.3) {
            $('[x = "2"][y = "5"]').empty();
            $('[x = "2"][y = "5"]').append('<div class="enemy-knight" id="e15"></div>');
            this.enemies.push(newEnemy);
        } 
        if (Math.random() < 0.3) {
            $('[x = "2"][y = "4"]').empty();
            $('[x = "2"][y = "4"]').append('<div class="enemy-knight" id="e16"></div>');
            this.enemies.push(newEnemy);
        }

        // newEnemy = $('div class="enemy-knight" id="e9"></div>')[ 0 ];
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
