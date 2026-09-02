
/* Starts fullscreen */

const game = document.getElementById("game");
const start = document.getElementById("start");

start.addEventListener("click", ()=> {

    game.requestFullscreen();

});

/* Takes you to the menu */

// document.addEventListener("keydown", (eventESC)=> {
//     if(eventESC.key === "Escape") {

//         game.requestFullscreen()
        
//         console.log("meny")

//     }
// });


/*Nav bar Gateways*/

const menuIcon = document.getElementById("menu-icon");
const doorParent = document.getElementById("door-container");


menuIcon.addEventListener("click", ()=>{

    if(doorParent.className === "door-icon-hidden") {

        doorParent.classList.remove("door-icon-hidden")
        doorParent.classList.add("door-icon-show")

        menuIcon.style.rotate = "0 0 1 90deg"

    } else {

        doorParent.classList.remove("door-icon-show")
        doorParent.classList.add("door-icon-hidden")

        menuIcon.style.rotate = "0 0 1 0deg"

    }

});

const hyperlinks = doorParent.querySelectorAll("a");
const rooms = document.querySelectorAll("section");


hyperlinks.forEach((Links, currentlink) => {
   
    
    
    Links.addEventListener("click", ()=>{

        
        const startingRoom = document.getElementById("starting-room")
        startingRoom.style.display = "none";

        rooms.forEach(room => {
            room.style.display = "none";
        })
       
        rooms[currentlink].style.display = "block";
        rooms[currentlink].style.opacity = "1";
       
        
        console.log(rooms[currentlink])
    });

});


/* Opening Scene */

const beginBtn = document.getElementById("begin-btn");
const startingRoom = document.getElementById("starting-room")

function startGame() {

    startingRoom.style.transition = "5s"
    startingRoom.style.opacity = "0";
 
    openingScene()

    console.log("started!")

}


let firstRoomTimer;
let firstRoomTimer2;

function openingScene() {
    firstRoomTimer = setTimeout(function() {

        startingRoom.style.display = "none"



        firstRoom()

    }, 5000);
} 

rooms.forEach(room => {
    room.style.display = "none";
})

function firstRoom() {

    rooms[0].style.opacity = "1"
    rooms[0].style.display = "block"

    clearTimeout(firstRoomTimer);

}


