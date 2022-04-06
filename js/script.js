

let ligne = 1;
let colonne = 1;

let cooldown = true;

const soundBuzzer = new Audio('../sounds/Emergency_meeting.mp3');

function playAudio(event) {
    let start = event.key;
    soundBuzzer.pause();
    soundBuzzer.currentTime = 0;
    soundBuzzer.volume = 0.1;
    if (start == " ") {
        soundBuzzer.play();
        }
    
    }



function pouvoir(event) {
    let touche = event.key;
    if (touche == "Enter") {
        if (ligne > 1 && colonne < 12){
            ligne = ligne + 3;
            colonne = colonne + 3;
        }
        
    let player = document.querySelector("#player");

    player.style.gridColumn = colonne;
    player.style.gridRow = ligne;
    return cooldown = false; 
    }
}
console.log(cooldown);

function deplacement(event) {
    let touche = event.key;
    console.log(touche);
    if (touche == "ArrowUp") {
        if (ligne > 1) {
            ligne--;
            console.log("haut");
        }
        else {
            console.log("bloqué")
        }
    }
    else if (touche == "ArrowDown") {
        if (ligne < 12) {
            ligne++;
            console.log("bas");
        }
        else {
            console.log("bloqué");
        }
        
    }
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {
            colonne--;
            console.log("gauche")
        }
        else {
            console.log("bloqué");
        }
    }
    else if (touche == "ArrowRight") {
        if (colonne < 12) {
            colonne++;
            console.log("droite")
        }
        else {
            console.log("bloqué");
        }
    }
    let player = document.querySelector("#player");

    player.style.gridColumn = colonne;
    player.style.gridRow = ligne;
}

document.addEventListener('keyup', deplacement);
document.addEventListener('keyup', pouvoir);
document.addEventListener('keyup', playAudio);
