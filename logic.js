function log() {
    console.log("milou är en fitta")
}

const game = document.getElementById("game");
const start = document.getElementById("start");

start.addEventListener("click", ()=> {
    game.requestFullscreen();
})

document.addEventListener("keydown", )