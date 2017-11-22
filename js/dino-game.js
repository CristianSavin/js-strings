/* GAME */

// Timer executare cod peste un interval sau inverva repetat

// setTimeout(f() , interva)  - once
// setInterval(f() , interval) - repeat
// clearTimeout(id) , curata un interva;
// clearInterval(id) curata intervalul;

// " _ " -> drum
// " - " -> hop
// "&#127797;"

var map = [];

for (var n = 1; n<= 100; n++){
    map.push("_");
}
var is_jumping = false; // Sare sau nu ?
var life = 100;
var life_text = document.getElementById("life_info");
var start_game = setInterval(showMap, 100);
var finish_game = document.getElementById("text");
var score = document.getElementById("score");
var start_score = 0;
var finish_score = document.getElementById("finish-score");
var show_img = document.getElementById("my-foto");
function showMap(){
    document.getElementById("map").innerHTML = '';
    if(is_jumping){
        document.getElementById("map").innerHTML = "<img class='jump' src='../marinplus.gif'/>";
    }
    else{
        document.getElementById("map").innerHTML = "<img class='dino' src='../marinplus.gif'/>";
    }
    for(var i = 0; i < map.length; i++){
        document.getElementById("map").innerHTML += map[i];
    }
    map.shift();

    var x = Math.round(Math.random() * 96 );
    if(x > 0 && x <= 90){
        map.push("_");
    }
    else if (x > 90 && x <= 93){
        map.push("<span class='goose_fly'><img src='../goose_fly.gif' /></span>");
    }
    else if( x > 94 && x <= 97){
        map.push("<span class='goose_run'><img src='../goose_run.gif'></span>");
    }
    else{
        map.push("<span class='penis'><img src='../penis.png' \></span>");
    }

    if(map[0] == "<span class='goose_fly'><img src='../goose_fly.gif' /></span>" && is_jumping == false){
        life -= 20;
        life_text.innerHTML = "&#128154;" + life
    }
    else if(map[0] == "<span class='goose_fly'><img src='../goose_fly.gif' /></span>" && is_jumping == false){
        life -= 35;
        life_text.innerHTML = "&#128154;" + life
    }
    else if(map[0] == "<span class='penis'><img src='../penis.png' ></span>" && is_jumping == false) {
        life -= 40;
        life_text.innerHTML = "&#128154;" + life
    }
    else if(map[0] == "<span class='goose_fly'><img src='../goose_fly.gif' /></span>" && is_jumping == true){
        score.innerHTML = `&#9733; ${start_score+=20}`;
    }
    else if(map[0] == "<span class='goose_run'><img src='../goose_run.gif'></span>" && is_jumping == true){
        score.innerHTML = `&#9733; ${start_score+=35}`;
    }
    else if(map[0] == "<span class='penis'><img src='../penis.png' ></span>" && is_jumping == true){
        score.innerHTML = `&#9733; ${start_score+=40}`;
    }
    if(life <= 0){
        clearInterval(start_game);
        finish_game.innerHTML = "Game Over";
        finish_score.innerHTML = "Scorul dvs este" + " " + start_score;
        show_img.innerHTML = '<img src="../fuck_goose.png" alt=""/>';
    }

}

function jump(){
    is_jumping = true;
    setTimeout(fall, 700);
}
function fall(){
    is_jumping = false;
}

// DACA DINO NU A SARIT SI A CAZUT IN CACTUS TREBUIE DE SCOS DIN VIATA PUNCTE


