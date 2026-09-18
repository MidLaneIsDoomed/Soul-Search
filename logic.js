

/* Starts fullscreen */

const game = document.getElementById("game");
const start = document.getElementById("start");

start.addEventListener("click", ()=> {

    game.requestFullscreen();

});


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

   

    Links.addEventListener("click", () => {

        startingRoom.style.transition = "3s";
        startingRoom.style.opacity = "0";

        rooms[currentlink].style.display = "block";

        setTimeout(() => {
            roomNumber.style.display = "block";
            roomNumber.innerHTML =  currentlink + 1
        },3000)
        setTimeout(() => {
            roomNumber.style.opacity = "1";
        }, 3100)
        setTimeout(() => {
            roomNumber.style.opacity = "0"
        },5000 )
        setTimeout(() => {
            roomNumber.style.display = "none"
        },6000)
      
        setTimeout(() => {

            rooms[currentlink].style.opacity = "1";

        }, 5500);


    });

});


/* Johns Speaking bubble */
const johnSpeakingBubble = document.querySelector(".john-speaking-bubble")
const johnText = johnSpeakingBubble.querySelector("h1")

function clearJohnSpeakingBubble() {

    setTimeout(() => {

        johnSpeakingBubble.style.opacity = "0";

        setTimeout(() => {

            johnText.innerHTML = ""
            johnSpeakingBubble.style.display = "none"

        }, 500)

    }, 3000)

}

function showJohnsSpeakingBubble() {

    johnSpeakingBubble.style.display = "flex"

    setTimeout(() => {

        johnSpeakingBubble.style.opacity = "1"

    }, 100)

}

/* Hides all rooms */
rooms.forEach(room => {
    room.style.display = "none";
})

/* Shows number of room inbetween room changes */
const roomNumber = document.getElementById("room-number")

function showRoomNumber() {

rooms.forEach((section, currentRoom) => {

    let showCurrentRoom = currentRoom + 1;

    if(section.style.display === "block") {

            setTimeout(() => {
                roomNumber.style.display = "block";
                roomNumber.innerHTML = showCurrentRoom + 1
            },3000)
            setTimeout(() => {
                roomNumber.style.opacity = "1";
            }, 3100)
            setTimeout(() => {
                roomNumber.style.opacity = "0"
            },5000 )
            setTimeout(() => {
                roomNumber.style.display = "none"
            },6000)

        console.log("you are in room ",currentRoom + 1)
    }

})

}

/* Gateway to next room */
const gateways = document.querySelectorAll(".gateways")

gateways.forEach((gateway, currentGateway) => {
    
    gateway.addEventListener("click", () => {
        
        rooms[currentGateway].style.opacity = "0"

        showRoomNumber()

        setTimeout(() => {
            rooms[currentGateway].style.display = "none"
        },2500)
        setTimeout(() => {
            rooms[currentGateway + 1].style.display = "block"
        },6000)
        setTimeout(() => {
            rooms[currentGateway + 1].style.opacity = "1"
        },6100)

        console.log("pressed")

    })

}) 
