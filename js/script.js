// case de départ + map de départ
let ligne = 5;
let colonne = 4;
let map = grid_cafet;
player.style.gridColumn = colonne;
player.style.gridRow = ligne;

let cooldown = true;

// son pour le buzzer
const soundBuzzer = new Audio('sounds/Emergency_meeting.mp3');

// fonction pour jouer l'alarme
function playAlarm(event) {
    if (map == grid_cafet){
        const boite = document.querySelector('#alarme');
        let start = event.key;
        //On initie le son, en le mettant en pause, au début, et à un volume bas
        soundBuzzer.pause();
        soundBuzzer.currentTime = 0;
        soundBuzzer.volume = 0.1;

        //Si le joueur est au bonne endroit, la boîte de dialogue s'affiche, sinon elle est cachée
        if (ligne == 7 && colonne == 6) {
            boite.style.cssText='visibility:visible;'
            if (start == " " || event.code =="Space" || event.keycode == 32) {
                soundBuzzer.play();
            }
        } else{
            boite.style.cssText='visibility:hidden'
        }
    }
}


let round = 0;

function compteur(){
    if (ligne == 10 && colonne == 8){
        if ( burgerBool == true ){
            if(round < (diag_Purple[1].length -1)){
                round += 1;
                // change le dialogue
                purple.innerHTML = diag_Purple[1][round];
                // ajoute le boutton pour changer de dialogue
                purple.innerHTML += '<button id="buttonPurple" onclick="compteur()">Next</button>';    
            }
        } else if(round < (diag_Purple[0].length -1)){
            round += 1;
            // change le dialogue
            purple.innerHTML = diag_Purple[0][round];
            // ajoute le boutton pour changer de dialogue
            purple.innerHTML += '<button id="buttonPurple" onclick="compteur()">Next</button>';
        } 
    } else if (ligne == 7 && colonne == 6) {
        // DIAG BLACK
    } else if(ligne == 4 && colonne == 7) {
        // DIAG YELLOW
    } else if(ligne == 8 && colonne == 4) {
        // DIAG PINK
    } else if(ligne == 3 && colonne == 8) {
        // DIG WHITE
    }
}

function interaction(event){
    const inter = document.querySelector('#inter'); 
    const black = document.querySelector('#black'); 
    const purple = document.querySelector('#purple'); 
    const yellow = document.querySelector('#yellow'); 
    const pink = document.querySelector('#pink'); 
    const white = document.querySelector('#white'); 


    // inter with black pnj
    if(ligne == 7 && colonne == 6){
        if (map == grid_kitchen){
            inter.style.cssText='visibility:visible;'
            if (event.code == 'KeyF'){
                black.style.cssText='visibility:visible;'
                inter.style.cssText='visibility:hidden;'
            }
        }
     // inter with purple pnj
    }  else if(ligne == 10 && colonne == 8){
        if (map == grid_medbay){
            inter.style.cssText='visibility:visible;'
            if (event.code == 'KeyF'){  
                if (burgerBool == true ){
                    // change le dialogue
                    purple.innerHTML = diag_Purple[1][round];
                    // ajoute le boutton pour changer de dialogue
                    purple.innerHTML += '<button id="buttonPurple" onclick="compteur()">Next</button>';
                    purple.style.cssText='visibility:visible;'
                    inter.style.cssText='visibility:hidden;'
                    burger.style.cssText='visibility:hidden;'
                } else {
                    // affiche le texte 1           
                    purple.innerHTML = diag_Purple[0][round];
                    // ajoute le boutton pour changer le dialogue
                    purple.innerHTML += '<button id="buttonPurple" onclick="compteur()">Next</button>';
                    purple.style.cssText='visibility:visible;'
                    inter.style.cssText='visibility:hidden;'
                }         
                
            }
        }
    // inter with yellow pnj
    } else if(ligne == 4 && colonne == 7){
        if (map == grid_central){
            inter.style.cssText='visibility:visible;'
            if (event.code == 'KeyF'){
                yellow.style.cssText='visibility:visible;'
                inter.style.cssText='visibility:hidden;'
            }
        }
    // inter with pink pnj
    } else if(ligne == 8 && colonne == 4){
        if (map == grid_central){
            inter.style.cssText='visibility:visible;'
            if (event.code == 'KeyF'){
                pink.style.cssText='visibility:visible;'
                inter.style.cssText='visibility:hidden;'
            }
        }
    // inter with white pnj
    } else if(ligne == 3 && colonne == 8){
        if (map == grid_navigation){
            inter.style.cssText='visibility:visible;'
            if (event.code == 'KeyF'){
                white.style.cssText='visibility:visible;'
                inter.style.cssText='visibility:hidden;'
            }
        }
    } else if (ligne == 7 && colonne == 5 && map == grid_kitchen){
        inter.style.cssText='visibility:visible;'
        if (event.code == 'KeyF'){
            burgerBool = Boolean(true);
        }
    } else {
        black.style.cssText='visibility:hidden;'
        purple.style.cssText='visibility:hidden;'
        yellow.style.cssText='visibility:hidden;'
        pink.style.cssText='visibility:hidden;'
        white.style.cssText='visibility:hidden;'
        inter.style.cssText='visibility:hidden'
        round = 0;
    }
 
}


   
var emergency_button = document.getElementById("emergency_button");

var pnj_dead = document.getElementById("pnj_dead");

// création pnj white
var pnj_white = document.createElement("img");
pnj_white.src = "pics/AmongUs_white.png";
pnj_white.style.width = 60 + "px";
pnj_white.style.gridColumnStart = 9;
pnj_white.style.gridRowStart = 3;
pnj_white.style.zIndex = 6;

// création pnj violet
var pnj_purple = document.createElement("img");
pnj_purple.src = "pics/AmongUs_purple.png";
pnj_purple.style.width = 65 + "px";
pnj_purple.style.gridColumnStart = 9;
pnj_purple.style.gridRowStart = 10;
pnj_purple.style.zIndex = 6;

// création pnj rose
var pnj_pink = document.createElement("img");
pnj_pink.src = "pics/AmongUs_pink.png";
pnj_pink.style.width = 60 + "px";
pnj_pink.style.gridColumnStart = 3;
pnj_pink.style.gridRowStart = 8;
pnj_pink.style.zIndex = 6;

// création pnj jaune
var pnj_yellow = document.createElement("img");
pnj_yellow.src = "pics/AmongUs_yellow.png";
pnj_yellow.style.width = 60 + "px";
pnj_yellow.style.gridColumnStart = 6;
pnj_yellow.style.gridRowStart = 4;
pnj_yellow.style.zIndex = 6;

// création pnj noir
var pnj_black = document.createElement("img");
pnj_black.src = "pics/AmongUs_black.png";
pnj_black.style.width = 65 + "px";
pnj_black.style.gridColumnStart = 7;
pnj_black.style.gridRowStart = 7;
pnj_black.style.zIndex = 6;



//                INVENTAIRE                   //

// gestion de la clé
var keyB = Boolean(false);
console.log(keyB);

// gestion du burger
var burgerBool = Boolean(false);
var burger = document.createElement("img");
burger.src = "pics/burger.png";

// ajout de la clé sur la map
var key = document.createElement("img");
key.src = "pics/key_card.png";
key.style.width = 40+"px" ;
key.style.gridColumnStart = 5;
key.style.gridRowStart = 11;
key.style.zIndex = 6;



var div = document.getElementById("grille");
var inventaire = document.getElementById("blockInventaire");


// ajout de la clé dans l'inventaire
function collision(){
    if( colonne == key.style.gridColumnStart && ligne == key.style.gridRowStart && map == grid_central ){
        keyB = Boolean(true);
        return keyB;
    }
}

// changement de gif à image pour le player
function immobile(event){
    let touche=event.key
    if (touche = " "){
        document.getElementById("player").src="pics/idle.png";
    } 
}
    //on integre le message a la grille quand le joueur passe devant le bouton, on peut aussi mettre le message directement dans le html
    // et l'afficher ou le hide en fonction de la position peut etre ?
    


// gestion déplacement
function deplacement(event) {
    let touche = event.key;
    console.log(touche);
    // gestion flèche du haut
    if (touche == "ArrowUp") {
        document.getElementById("player").src="gif/walk.gif";
        // gestion sorti grid
        if (ligne > 1) {
            // direction med à cafet
            if(map[ligne - 1][colonne] == "portemed_cafet"){
                document.getElementById("mapimg").src="pics/among_us_cafet.png";
                map = grid_cafet;
                ligne=12;
                colonne=7;
            // gestion des murs
            } else if (map[ligne - 1][colonne] != "sol") {
                console.log("bloqué");
            } else {
                ligne--;
            }
        }
    }
    
    // gestion flèche du bas
    else if (touche == "ArrowDown") {
        document.getElementById("player").src="gif/walk.gif";
        // gestion sorti grid
        if (ligne < 12) {
             // direction cafet à med
            if(map[ligne + 1][colonne] == "portemed"){
                document.getElementById("mapimg").src="pics/medbay_amongus.png";
                map = grid_medbay;
                ligne=2;
                colonne=5;
                console.log("portemedbay");
            }else if (map[ligne + 1][colonne] != "sol") {
                console.log("bloqué")
            } else {
                ligne++;

            }
        }
    }

    // gestion flèche de gauche
    else if (touche == "ArrowLeft") {
        document.getElementById("player").src="gif/walkreverse.gif";
        // gestion sorti grid
        if (colonne > 1) {
            // direction kitchen à cafet
            if (map[ligne][colonne - 1] == "portekitch_cafet"){
                document.getElementById("mapimg").src="pics/among_us_cafet.png";
                map = grid_cafet;
                ligne=6;
                colonne=11;
                colonne=12;
            // direction cafet à central
            } else if (map[ligne][colonne - 1] == "portecent"){
                document.getElementById("mapimg").src="pics/central_amongus.png";
                map = grid_central;
                ligne=8;
                colonne=12;
            // direction kitchen à trap
            } else if (map[ligne][colonne - 1] == "portedeath") {
                window.location.href='trap.html';
            // direction navigation à kitchen
            } else if (map[ligne][colonne - 1] == "portenav_kitch") {
                document.getElementById("mapimg").src="pics/kitchen_amongus.png";
                map = grid_kitchen;
                ligne=10;
                colonne=10;
            } else if (map[ligne][colonne - 1] != "sol") {
                console.log("bloqué")
            } else {
                colonne--;
            }
        }
    }

    // gestion flèche de droite
    else if (touche == "ArrowRight") {
        document.getElementById("player").src="gif/walk.gif";
        // gestion sorti grid
        if (colonne < 12) {
            // direction cafet à kitchen
            if (map[ligne][colonne + 1] == "portekitch"){
                document.getElementById("mapimg").src="pics/kitchen_amongus.png";
                map = grid_kitchen;
                ligne=11;
                colonne=1;
                colonne ++
            // direction kitchen à navigation
            } else if (map[ligne][colonne + 1] == "portenav") {
                // gestion clé
                if (keyB == true){
                    document.getElementById("mapimg").src="pics/navigation.png";
                    map = grid_navigation;
                    ligne=7;
                    colonne=1;
                }
                else {
                    alert("Il manque la clé");
                }         
            // direction central à cafet
            } else if (map[ligne][colonne +1] == "portecent_cafet"){
                document.getElementById("mapimg").src="pics/among_us_cafet.png";
                map = grid_cafet;
                ligne=7;
                colonne=3;
                console.log("portecent_cafet");
                ligne --
                colonne=2;
            } else if (map[ligne][colonne + 1] != "sol") {
                console.log("bloqué")
            } else {
                colonne++;
            }

        }
    }

    let player = document.querySelector("#player");

    player.style.gridColumn = colonne;
    player.style.gridRow = ligne;

    // ajout ou non des PNJ sur les différentes map
    if (map == grid_kitchen){
        key.remove();
        emergency_button.remove();
        pnj_dead.remove();
        pnj_pink.remove();
        pnj_purple.remove();
        pnj_yellow.remove();
        pnj_white.remove();
        div.appendChild(pnj_black);
    } else if(map == grid_central){
        emergency_button.remove();
        pnj_dead.remove();
        pnj_black.remove();
        pnj_white.remove();
        pnj_purple.remove();
        div.appendChild(pnj_yellow);
        div.appendChild(pnj_pink);
        div.appendChild(key);
        collision();
        if (keyB == true){
            key.remove();
        }
    } else if(map == grid_medbay){
        key.remove();
        emergency_button.remove();
        pnj_dead.remove();
        pnj_pink.remove();
        pnj_black.remove();
        pnj_yellow.remove();
        pnj_white.remove();
        div.appendChild(pnj_purple);
    } else if(map == grid_navigation){
        key.remove();
        emergency_button.remove();
        pnj_dead.remove();
        pnj_pink.remove();
        pnj_purple.remove();
        pnj_yellow.remove();
        pnj_black.remove();
        div.appendChild(pnj_white);
    }else if(map == grid_cafet){
        key.remove();
        pnj_pink.remove();
        pnj_purple.remove();
        pnj_yellow.remove();
        pnj_black.remove();
        pnj_white.remove();
        div.appendChild(pnj_dead);
        div.appendChild(emergency_button);
    }


    if (keyB == true){
        key.style.width = 100+"px";
        key.style.margin = 10+"px"
        inventaire.appendChild(key);

    } 
    if (burgerBool == true){
        burger.style.width = 100+"px";
        burger.style.margin = 10+"px"
        inventaire.appendChild(burger);
    }

}

// fonction du temps - 5 min
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


// activation des fonctions
setInterval(diminuerTemps, 1000);
document.addEventListener('keydown', deplacement);
document.addEventListener('keyup', playAlarm);
document.addEventListener('keyup', immobile);
document.addEventListener('keyup', interaction);

