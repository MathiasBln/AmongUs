let ligne = 5;
let colonne = 4;

let map = grid_cafet;
player.style.gridColumn = colonne;
player.style.gridRow = ligne;

let cooldown = true;

const soundBuzzer = new Audio('../sounds/Emergency_meeting.mp3');

let test = false;

function playAudio(event) {
    const boite = document.querySelector('#alarme');
    let start = event.key;
    soundBuzzer.pause();
    soundBuzzer.currentTime = 0;
    soundBuzzer.volume = 0.1;
    if (ligne == 7 && colonne == 6) {
        boite.style.cssText='visibility:visible'
        if (start == " " || event.code =="Space" || event.keycode == 32) {
            soundBuzzer.play();
            }
        }
    else{boite.style.cssText='visibility:hidden'} 
    }

function immobile(event){
    let touche=event.key
    if (touche = " "){
        document.getElementById("player").src="pics/idle.png";
    } 
}
    //on integre le message a la grille quand le joueur passe devant le bouton, on peut aussi mettre le message directement dans le html
    // et l'afficher ou le hide en fonction de la position peut etre ?
    


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
        document.getElementById("player").src="gif/walk.gif";
        if (ligne > 1) {
            if (map[ligne - 1][colonne] == "portekitch"){
                document.getElementById("mapimg").src="pics/kitchen_amongus.png";
                map = grid_kitchen;
                ligne=11;
                colonne=2;
                console.log("portecuisine");
                ligne --
            } else if(map[ligne - 1][colonne] == "portemed_cafet"){
                document.getElementById("mapimg").src="pics/among_us_cafet.png";
                map = grid_cafet;
                ligne=12;
                colonne=7;
                console.log("portecafet");
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
        document.getElementById("player").src="gif/walk.gif";
        if (ligne < 12) {
            if(map[ligne + 1][colonne] == "portemed"){
                document.getElementById("mapimg").src="pics/medbay_amongus.png";
                map = grid_medbay;
                ligne=4;
                colonne=5;
                console.log("portemedbay");
                ligne --
            }else if (map[ligne + 1][colonne] != "sol") {
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
        document.getElementById("player").src="gif/walkreverse.gif";
        if (colonne > 1) {
            if (map[ligne][colonne - 1] == "portekitch_cafet"){
                document.getElementById("mapimg").src="pics/among_us_cafet.png";
                map = grid_cafet;
                ligne=6;
                colonne=12;
            } else if (map[ligne][colonne - 1] == "portecent"){
                document.getElementById("mapimg").src="pics/central_amongus.png";
                map = grid_central;
                ligne=8;
                colonne=12;
                console.log("portecent");
                colonne --
            } else if (map[ligne][colonne - 1] == "portedeath") {
                window.location.href='trap.html';
            } else if (map[ligne][colonne - 1] == "portenav_kitch") {
                document.getElementById("mapimg").src="pics/kitchen_amongus.png";
                map = grid_kitchen;
                ligne=10;
                colonne=10;
                colonne ++            
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
        document.getElementById("player").src="gif/walk.gif";
        if (colonne < 12) {
            if (map[ligne][colonne + 1] == "portekitch"){
                document.getElementById("mapimg").src="pics/kitchen_amongus.png";
                map = grid_kitchen;
                ligne=11;
                colonne=0;
                colonne ++
            } else if (map[ligne][colonne + 1] == "portenav") {
                if (test == true){
                    document.getElementById("mapimg").src="pics/navigation.png";
                    map = grid_navigation;
                    ligne=7;
                    colonne=1;
                    colonne ++
                }
                else {
                    alert("Il manque la clé");
                }         
            } else if (map[ligne][colonne +1] == "portecent_cafet"){
                document.getElementById("mapimg").src="pics/among_us_cafet.png";
                map = grid_cafet;
                ligne=7;
                colonne=2;
                console.log("portecent_cafet");
                ligne --
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


document.addEventListener('keydown', deplacement);
document.addEventListener('keyup', pouvoir);
document.addEventListener('keyup', playAudio);
document.addEventListener('keyup', immobile);

