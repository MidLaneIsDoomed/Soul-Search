/* Opening Scene */

const beginBtn = document.getElementById("begin-btn");
const startingRoom = document.getElementById("starting-room")
const openingScene = document.getElementById("opening-scene")

const johnsFriendIMG = document.getElementById("johns-friend-img")
const johnsFriend2IMG = document.getElementById("johns-friend2-img")

const staticSound = document.getElementById("static-sound");

const whiteFlash = document.getElementById("white-flash")

function startGame() {

    startingRoom.style.transition = "3s";
    startingRoom.style.opacity = "0";

    rooms[0].style.display = "block";

    noContainer.style.display = "block";


    staticSound.play();
    staticSound.volume = "0"

    let volume = 0;

    setTimeout(() => {

        const fadeIn2 = setInterval(() => {
            volume += 0.01;
            staticSound.volume = volume;
           

            if(volume >= 0.7) {
                clearInterval(fadeIn2);
            } 
        }, 50);

    }, 3000);

    console.log("started!");

    setTimeout(() => {
        startingRoom.style.display = "none";
        openingScene.style.display = "flex"

        rotateOpeningScene();

    },3000)

    setTimeout(() => {
        johnsFriendIMG.style.display = "block"

        johnsFriendsImgGlitches();
        
            setTimeout(() => {
                    johnsFriend2IMG.style.display = "block"
                    openingSceneChangeText()
            },1000)

            setTimeout(() => {
                createNo();
            }, 4000)

    },3500)


    setTimeout(() => {

        whiteFlash.style.opacity = "1";
        whiteFlash.style.zIndex = "1001";

    }, 14000)

    setTimeout(() => {

        openingScene.style.display = "none";

        noContainer.innerHTML = "";
        noContainer.style.display = "none";

        clearInterval(noTimer);
        clearInterval(johnsFriendsImgGlitchesTimer);
        clearInterval(rotateInterval);

        staticSound.pause();

        setTimeout(() => {
            whiteFlash.style.opacity = "0";
            johnSpeakingBubble.style.display = "none";

            setTimeout(() => {

                showJohnsSpeakingBubble();
                johnText.innerText = "That dream again...";
                clearJohnSpeakingBubble();

                setTimeout(() => {

                    showJohnsSpeakingBubble();
                    johnText.innerText = "Wait where the hell am I?";
                    clearJohnSpeakingBubble();

                }, 4000)

            }, 1500)

        }, 1000)

    }, 15000)


    setTimeout(() => {

        setTimeout(() => {
            roomNumber.style.display = "block";
            roomNumber.innerHTML = "1";
        },2900) 

        setTimeout(() => {
            roomNumber.style.opacity = "1";
        },3000)

        setTimeout(() => {
            roomNumber.style.opacity = "0";
        },4500)

        setTimeout(() => {
            roomNumber.innerHTML = "";
        }, 6000);

        setTimeout(() => {
            roomNumber.style.display = "none";
        },6000)

        setTimeout(() => {
            rooms[0].style.opacity = "1";
        }, 5000);

    }, 20000)

}

/* Rotates and scales openingScene */
let rotateInterval;
let rotation = 0;
let scaling = 1;

function rotateOpeningScene() { 

    rotateInterval = setInterval(() =>{

        rotation += 0.05;
        scaling += 0.002

        openingScene.style.transform = `rotate(${rotation}deg)`;
        openingScene.style.scale = scaling;

        console.log(rotation)

    }, 20)

}



const openingSceneTextsContainer = document.getElementById("your-fault-container");
const openingSceneTexts = openingSceneTextsContainer.querySelectorAll("p")

function openingSceneChangeText() {

    openingSceneTexts.forEach(texts => {
        texts.style.color = "red"
        texts.innerText = ""
        texts.innerHTML = "YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT YOU DID IT"
    })

}


const noContainer = document.getElementById("no-container")
let noTimer;

function createNo() {

    noTimer = setInterval( () => {

        let noElement = document.createElement("p")

        noElement.innerText = "No"
        
        const x = Math.random() * window.innerWidth - 100;
        const y = Math.random() * window.innerHeight - 230;

        noElement.style.left = x + "px";
        noElement.style.top = y + "px";


        noContainer.appendChild(noElement)

    }, 50)

}

/* Removes the overflow No elemts */
// let cleanupInterval;

// function startCleanup() {
//     cleanupInterval = setInterval(() => {
//         const elements = document.querySelectorAll(".your-fault");

//         elements.forEach(element => {
//             const rect = element.getBoundingClientRect();

//             if (
//                 rect.right < 0 ||
//                 rect.left > window.innerWidth ||
//                 rect.bottom < 0 ||
//                 rect.top > window.innerHeight
//             ) {
//                 element.remove();
//             }
//         }); 

//     }, 500); 
// }

// function stopCleanup() {
//     clearInterval(cleanupInterval);
// }


let johnsFriendsImgGlitchesTimer;

function johnsFriendsImgGlitches() {

    johnsFriendsImgGlitchesTimer = setInterval(() => {

        johnsFriendIMG.style.opacity = Math.random() + 0.2;
        johnsFriend2IMG.style.opacity = Math.random() + 0.2;

        johnsFriendIMG.style.scale = Math.random() * 0.3 + 0.9;
        johnsFriend2IMG.style.scale = Math.random() * 0.3 + 0.9;

    }, 60)

}





