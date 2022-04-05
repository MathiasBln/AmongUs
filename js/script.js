

let ligne = 1;
let colonne = 1;

let cooldown = true;




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
