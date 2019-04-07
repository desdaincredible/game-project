// Create a grid.
    // how big/number of squares? 
    // size of squares?
    // starting with 20 x 20, 30px x 30px squares
    $('body').append('<div class="container"><div>')
    for (let x = 0; x < 20; x++){
        for (let y = 0; y < 20; y++){
        $('.container').append(`<div class="grid-squares" x="${[x]}" y="${[y]}"></div>`)
        }
    }

// Create home city to defend. Defense set at 500.
    // how many squares does it take up? can you move it? 4 x 4 at 0,3
    $('[x ="0"][y="3"]').append('<div class="home-city"></div>')
    $('[x ="0"][y="4"]').append('<div class="home-city"></div>')
    $('[x ="1"][y="3"]').append('<div class="home-city"></div>')
    $('[x ="1"][y="4"]').append('<div class="home-city"></div>')

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
    move(){

    }
    render(){
        // clear current game-square div
        $('.home-knight').remove();
        $('.game-square[x = this.x][y = this.y]').append();
        move();
        $(document).keydown(function(e){
            if (e.keyCode == 37){ 
                direction = 'left';
                $('.home-knight').finish().animate({
                    left: '-= 50'
                })
                console.log("left pressed");
            } else if (e.keyCode == 38){
                direction = 'up';
                $('.home-knight').finish().animate({
                    top: '-=50'
                })
                console.log("up pressed");
            } else if (e.keyCode == 39){
                direction = 'right';
                $('.home-knight').finish().animate({
                    left: '-=50'
                })
                console.log("right pressed");
            } else if (e.keyCode == 40){
                direction = 'down';
                $('.home-knight').finish().animate({
                    top: '+=50'
                })                
                console.log("down pressed");
            }
        });
    }
    attack(){

    }
}

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
$('[x ="0"][y="2"]').append('<div class="home-knight" id="1"></div>')


// const move = () => {
//     $('#1').keydown(function(e){
//         if (e.which == 37){ 
//             direction = 'left';
//             $('.home-knight').animate({marginLeft: "-= 50"})
//             Knights.x--
//             console.log("left pressed");
//         } else if (e.which == 38){
//             direction = 'up';
//             Knights.y--
//             console.log("up pressed");
//         } else if (e.which == 39){
//             direction = 'right';
//             Knights.x++
//             console.log("right pressed");
//         } else if (e.which == 40){
//             direction = 'down';
//             Knights.y++
//             console.log("down pressed");
//         }
//     });
// }
// move();

$(document).keydown(function(e){
    if (e.keyCode === 37){ 
        direction = 'left';
        $('.home-knight').finish().animate({
            left: '-=32'
        });
        console.log("left pressed");
    } else if (e.keyCode === 38){
        direction = 'up';
        $('.home-knight').finish().animate({
            top: '-=36'
        });
        console.log("up pressed");
    } else if (e.keyCode === 39){
        direction = 'right';
        $('.home-knight').finish().animate({
            left: '+=32'
        });
        console.log("right pressed");
    } else if (e.keyCode === 40){
        direction = 'down';
        $('.home-knight').finish().animate({
            top: '+=36'
        });                
        console.log("down pressed");
    }
});

let currentKnight = ''; 


// failed attempt to make the guys move
const move = () => {
$(document).on('click', function(e){
//     $('e.target.div')
// currentKnight = e.target;
//     if (e.target === currentKnight){
    $('.container').keydown(function(e){
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
    // }
})
}
move();


// $('.home-knight').keydown(function(){
//     move();
// })


// how to get a turn based system
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





// Create enemy city with enemies that defend their city.
    // how many to defend city? how to get them to move? 
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




