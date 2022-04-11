let ligne = 5;
let colonne = 4;

let map = grid_cafet;
player.style.gridColumn = colonne;
player.style.gridRow = ligne;

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
            colonne = colonne + 3
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
        document.getElementById("player").src="pics/Walk_Left.png";
        if (ligne > 1) {
            if (map[ligne - 1][colonne] == "portekitch"){
                document.getElementById("mapimg").src="pics/kitchen_amongus.png";
                map = grid_kitchen;
                ligne=11;
                colonne=2;
                console.log("portecuisine");
                ligne --
            } else if (map[ligne - 1][colonne] != "sol") {
                console.log("bloqué");
            } else {
                ligne--;
                console.log("haut");
                console.log(ligne);
                console.log(colonne);
            }
            
        }
        else {
            console.log("bloqué")
        }
    }
    else if (touche == "ArrowDown") {
        document.getElementById("player").src="pics/Walk_Right.png";
        if (ligne < 12) {
            if (map[ligne + 1][colonne] == "portekitch"){
                console.log("portecui")
                ligne ++
            } else if (map[ligne + 1][colonne] != "sol") {
                console.log("bloqué")
            } else {
                ligne++;
                console.log("bas");
                console.log(ligne);
                console.log(colonne);
            }
        }
        else {
            console.log("bloqué");
        }
        
    }
    else if (touche == "ArrowLeft") {
        document.getElementById("player").src="pics/Walk_Left.png";
        if (colonne > 1) {
            if (map[ligne][colonne - 1] == "portekitch"){
                console.log("porte")
                colonne --
            } else if (map[ligne][colonne - 1] != "sol") {
                console.log("bloqué")
            } else {
                colonne--;
                console.log("gauche")
                console.log(ligne);
                console.log(colonne);
            }
        }
        else {
            console.log("bloqué");
        }
    }
    else if (touche == "ArrowRight") {
        document.getElementById("player").src="pics/Walk_Right.png";
        if (colonne < 12) {
            if (map[ligne][colonne + 1] == "portekitch"){
                console.log("porte")
                colonne ++
            } else if (map[ligne][colonne + 1] != "sol") {
                console.log("bloqué")
            } else {
                colonne++;
                console.log("droite")
                console.log(ligne);
                console.log(colonne);
            }

        }
        else {
            console.log("bloqué");
        }
    }
    let player = document.querySelector("#player");

    player.style.gridColumn = colonne;
    player.style.gridRow = ligne;
}


let temps = 300;

const timer = document.getElementById('timer');


function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    timer.innerText = minutes + ":" + secondes;
    temps = temps <= 0 ? 0 : temps - 1;
    if (temps == 0) {
        document.location.href="dead.html";
    }
}

setInterval(diminuerTemps, 1000);

document.addEventListener('keyup', deplacement);
document.addEventListener('keyup', pouvoir);
document.addEventListener('keyup', playAudio);