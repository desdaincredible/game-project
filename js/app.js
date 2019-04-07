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
    $('[x ="0"][y="3"]').append('<div class="home-city"></div>')
    $('[x ="0"][y="4"]').append('<div class="home-city"></div>')
    $('[x ="1"][y="3"]').append('<div class="home-city"></div>')
    $('[x ="1"][y="4"]').append('<div class="home-city"></div>')
}
makeHomeCity();

const homeCity = {
    defenses: 500,
    location: ["0,3", "0,4", "1,3", "1,4"], // not sure this is the way I want to save this
}


// Create fighters and make them able to move around the board.
    // how many to defend city?  start with 8
    // how to get them to move?
    // how to deterimine if they are player's people or enemies? class="home-knight"
    // how to spawn new ones (if necessary)?
    // how to attack? 
        //randomize attacks (accuracy and damage inflicted)
    // how to defend?


class Knights {
    constructor(hp, accuracy, damage, id){
        this.hp = hp;
        this.damage = damage;
        this.id = id;
        // this.accuracy = accuracy;
        // this.x = 0;
        // this.y = 0;
    }

    attack(){

    }
}



// only necessary if I end up adding new knights later
class KnightFactory {
    constructor(){
        this.knights = [];
    }
    generateKnight(){
        const newKnight = new Knights(this.knights.length);
    }
    findKnight(index){
        return this.knights[index];
    }
} 


const addKnightsToUI = () => {
$('[x ="0"][y="2"]').append('<div class="home-knight" id="0"></div>')
$('[x ="1"][y="2"]').append('<div class="home-knight" id="1"></div>')
}
addKnightsToUI();


const knightArray = [];

// instantiating the first knight
let knight1 = new Knights(100, 15, 1);
knightArray.push(knight1);

// attaching object to div, MISSING STATS
knight1 = $('<div class="home-knight" id="hk1"></div>')[ 0 ];


// knight1.hp = 5;

// movement, figure out how to move them individually.
// make it a function and call it in the class somehow?

// currentKnight = some kind of hybrid jquery js thing
// the div selected, unique id attribute
// maybe create an array with knight objects, referencing their id key (make it same as div)
// loop through and if knight.id == attr id, do the thing
let currentKnight = ''; 

// const selectKnight = () => {
//     knightArray.forEach(function() {
//         $('.home-knight').on('click', function(e){
//             // if div id == [i]

//         })
//     })

// getting there...can move 1 move when clicked. Both still move together.

$('.home-knight').on('click', function(e){
    currentKnight = e.target;         
});


const move = () => {
    $(document).keydown(function(e){
        if (currentKnight){
            if (e.keyCode === 37){ 
                direction = 'left';
                $('.home-knight').finish().animate({
                    left: '-=32'
                });
            } else if (e.keyCode === 38){
                direction = 'up';
                $('.home-knight').finish().animate({
                    top: '-=36'
                });
            } else if (e.keyCode === 39){
                direction = 'right';
                $('.home-knight').finish().animate({
                    left: '+=32'
                });
            } else if (e.keyCode === 40){
                direction = 'down';
                $('.home-knight').finish().animate({
                    top: '+=36'
                });                
            }
        }
    });
}
move();


$(document).keyup(function(e){
    if(currentKnight){
        currentKnight = false;
        $('.home-knight').stop(true, true);
    }
})

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

    // how many to defend city? 8
const addEnemiesToUI = () => {
    $('[x = "19"][y = "13"]').append('<div class="enemy-knight" id="e1"></div>')
    $('[x = "19"][y = "16"]').append('<div class="enemy-knight" id="e2"></div>')
    $('[x = "18"][y = "13"]').append('<div class="enemy-knight" id="e3"></div>')
    $('[x = "18"][y = "16"]').append('<div class="enemy-knight" id="e4"></div>')
    $('[x = "17"][y = "13"]').append('<div class="enemy-knight" id="e5"></div>')
    $('[x = "17"][y = "14"]').append('<div class="enemy-knight" id="e6"></div>')
    $('[x = "17"][y = "15"]').append('<div class="enemy-knight" id="e7"></div>')
    $('[x = "17"][y = "16"]').append('<div class="enemy-knight" id="e8"></div>')
}
addEnemiesToUI();

    // Have enemies pop up and randomly attack home city.
    // how to deterimine they are enemies? class="enemy-knight" id="e1" "e2" etc.
    // how to spawn next to home city?
    // how to randomize their spawns

const spawnEnemy = () => {
    if (Math.random() < 0.3){
        $('[x = "0"][y = "5"]').append('<div class="enemy-knight" id="e"></div>');
    }
    if (Math.random() < 0.3){
        $('[x = "1"][y = "5"]').append('<div class="enemy-knight" id="e"></div>');
    } 
    if (Math.random() < 0.3) {
        $('[x = "2"][y = "5"]').append('<div class="enemy-knight" id="e"></div>');
    } 
    if (Math.random() < 0.3) {
        $('[x = "2"][y = "4"]').append('<div class="enemy-knight" id="e"></div>');
    }
    if (Math.random() < 0.3){
        $('[x = "0"][y = "5"]').append('<div class="enemy-knight" id="e"></div>');
    }
    if (Math.random() < 0.3){
        $('[x = "1"][y = "5"]').append('<div class="enemy-knight" id="e"></div>');
    } 
    if (Math.random() < 0.3) {
        $('[x = "2"][y = "5"]').append('<div class="enemy-knight" id="e"></div>');
    } 
    if (Math.random() < 0.3) {
        $('[x = "2"][y = "4"]').append('<div class="enemy-knight" id="e"></div>');
    }
}
spawnEnemy();
    
    // how to attack? 
    // randomize their attacks (accuracy and damage inflicted)
    // give them hp stat, they disappear when it reaches 0

// Set up timer.
    // set up in seconds
    // what links to timer? 
        // everyone's attacks (can only hit so often)
        // enemy spawn times and amounts (randomized)
        // level ups
        // do cities build defenses back up? 
        // should timer appear on screen?



// As time increases, so do enemy hordes.

