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
    constructor(hp, accuracy, damage){
        this.hp = hp;
        this.accuracy = accuracy;
        this.damage = damage;
        this.x = 0;
        this.y = 0;
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

let knight1 = new Knights(100, 1, 15);

const addKnightsToUI = () => {
$('[x ="0"][y="2"]').append('<div class="home-knight" id="hk1"></div>')
$('[x ="1"][y="2"]').append('<div class="home-knight" id="hk2"></div>')
}
addKnightsToUI();


// movement, figure out how to move them individually.
// make it a function and call it in the class somehow?

// currentKnight = some kind of hybrid jquery js thing
// the div selected, unique id attribute
// maybe create an array with knight objects, referencing their id key (make it same as div)
// loop through and if knight.id == attr id, do the thing
let currentKnight = ''; 

const move = () => {
$('.home-knights').on('click', function(e){
    $(document).keydown(function(e){
        if (e.keyCode === 37){ 
            direction = 'left';
            $('.home-knights').finish().animate({
                left: '-=32'
            });
        } else if (e.keyCode === 38){
            direction = 'up';
            $('.home-knights').finish().animate({
                top: '-=36'
            });
        } else if (e.keyCode === 39){
            direction = 'right';
            $('.home-knights').finish().animate({
                left: '+=32'
            });
        } else if (e.keyCode === 40){
            direction = 'down';
            $('.home-knights').finish().animate({
                top: '+=36'
            });                
        }
    });
})
}
move();


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
    $('[x = "19"][y = "13"]').append('<div class="enemy-knights" id="ek1"></div>')
    $('[x = "19"][y = "16"]').append('<div class="enemy-knights" id="ek2"></div>')
    $('[x = "18"][y = "13"]').append('<div class="enemy-knights" id="ek3"></div>')
    $('[x = "18"][y = "16"]').append('<div class="enemy-knights" id="ek4"></div>')
    $('[x = "17"][y = "13"]').append('<div class="enemy-knights" id="ek5"></div>')
    $('[x = "17"][y = "14"]').append('<div class="enemy-knights" id="ek6"></div>')
    $('[x = "17"][y = "15"]').append('<div class="enemy-knights" id="ek7"></div>')
    $('[x = "17"][y = "16"]').append('<div class="enemy-knights" id="ek8"></div>')
}
addEnemiesToUI();
    // how to deterimine they are enemies?
    // how to spawn next to home city?
    // how to attack? 
        //randomize attacks (accuracy and damage inflicted)
    // how to defend?

// Set up timer.
    // set up in seconds
    // what links to timer? 
        // everyone's attacks (can only hit so often)
        // enemy spawn times and amounts (randomized)
        // level ups
        // do cities build defenses back up? 
        // should timer appear on screen?

// Have enemies pop up and randomly attack home city.
    // how to randomize their spawns
    // randomize their attacks (accuracy and damage inflicted)
    // give them hp stat, they disappear when it reaches 0

// As time increases, so do enemy hordes.


// BONUS
// Create ally city that will add to player's attack and defense as long as player is 
// near it.
    // how does it know when the player is near the city?
    // add defense/extra hp to home city
    // add attack accuracy/damage inflicted to player's people?

// Player needs to protect ally city + home city.

