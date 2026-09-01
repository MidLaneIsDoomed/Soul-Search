
const game = document.getElementById("game");
const start = document.getElementById("start");

start.addEventListener("click", ()=> {

    game.requestFullscreen();

})

document.addEventListener("keydown", (eventESC)=> {
    if(eventESC.key === "Escape") {

        console.log("neger")

    }
});

/* starts the game */
const beginBtn = document.getElementById("begin-btn");

function startGame() {

    const rooms = document.querySelectorAll("section")
    let currentRoom = 0;


    const startingRoom = document.getElementById("starting-room")

    startingRoom.style.opacity = "0";
    rooms[currentRoom].style.opacity = "100";
    
    console.log("started!")
}

/* Finds all room and changes them */

const rooms = document.querySelectorAll("section")
let currentRoom = 0;

function roomChanger() {

    
    

};

