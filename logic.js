
/* Starts fullscreen */

const game = document.getElementById("game");
const start = document.getElementById("start");

start.addEventListener("click", ()=> {

    game.requestFullscreen();

});

// document.addEventListener("keydown", (eventESC)=> {
//     if(eventESC.key === "Escape") {

//         console.log("")

//     }
// });

/* starts the game */
const beginBtn = document.getElementById("begin-btn");

function startGame() {

    const rooms = document.querySelectorAll("section")
    let currentRoom = 0;


    const startingRoom = document.getElementById("starting-room")

    startingRoom.style.display = "none";
    rooms[currentRoom].style.opacity = "100";
    console.log("started!")

};

/*Nav bar Gateways*/

const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", ()=>{

    const doorParent = document.getElementById("door-container");

    doorParent.classList.remove("door-icon-hidden")
    doorParent.classList.add("door-icon-show")

    console.log("doors showing")

});


/* Finds all room and changes them */

const rooms = document.querySelectorAll("section")
let currentRoom = 0;

function roomChanger() {

    
    

};

