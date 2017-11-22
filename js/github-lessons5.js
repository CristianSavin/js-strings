var menu = [
    "Pizza" ,
    "Salad" ,
    "Soup"
];

var menu_price = [
    65.00 ,
    45.00 ,
    25.00
];

/* AICI SETAM TOATE ELEMENTELE DIN SIRUL / MENU / LE SETAM DIN LITERE MARI IN MICI
    PENTRU A PUTEA FACE COMPARARE CU CEIA CE INTRODUCE UTILIZATORUL IN VARIABILA
    / OPTION_NAME /
 */

for(var i = 0; i < menu.length; i++) {
  menu[i] = menu[i].toString().toLowerCase();
}


/* SOLICITAM DE LA UTILIZATOR SA SE INTRODUCA UN PRODUS IN / VARIABILA OPTION_NAME / */
var option_name = prompt("Numiti optiunea solicitata:?");

/* SETAM TEXTUL INTRODUS DE UTILIZATOR IN LITERE MICI CA SA FIE COINCIDENTA CU CEIA CE
   AVEM IN SIRUL / MENU /
 */
var set_lowercase = option_name.toLowerCase();


/* VERIFICAM DACA PRODUSUL COINCIDE CU PRODUSUL CARE SE AFLA PE POZITIA 0 IN SIRUL / MENU / */
if(set_lowercase == menu[0]){
    alert(`Optiunea aleasa '${menu[0]}' costa ${menu_price[0]} o portie`);
    var cantitate_pizza = prompt(
        "Cite" + " " + menu[0] + " " + " doriti?"
    );
    if(cantitate_pizza <= 0){
        alert("Dvs. nu ati introdus nimic va rugam sa mai introduceti inca odata cantitatea dorita");
        cantitate_pizza = prompt(
            "Cite" + " " + menu[0] + " " + " doriti?"
        );
        if(cantitate_pizza > 0){
            var total_pizza = cantitate_pizza * menu_price[0];
            alert("Dvs. doriti" + " " + cantitate_pizza + " " + menu[0] + " "+ "pretul va fi:" + " " + total_pizza + " " + "lei");
        }
        else{
            alert("La revedere");
        }
    }
    else if(cantitate_pizza > 0){
        var total_pizza = cantitate_pizza * menu_price[0];
        alert("Dvs. doriti" + " " + cantitate_pizza + " " + menu[0] + " "+ "pretul va fi:" + " " + total_pizza + " " + "lei");
    }
}

/* VERIFICAM DACA PRODUSUL COINCIDE CU PRODUSUL CARE SE AFLA PE POZITIA 1 IN SIRUL / MENU / */
else if(set_lowercase == menu[1]){
    alert(`Optiunea aleasa: '${menu[1]}' costa  ${menu_price[1]} o portie`);

    var cantitate_salad = prompt(
        "Cite" + " " + menu[1] + " " + " doriti?"
    );
    if(cantitate_salad <= 0){
        alert("Dvs. nu ati introdus nimic va rugam sa mai introduceti inca odata cantitatea dorita");
        cantitate_salad = prompt(
            "Cite" + " " + menu[1] + " " + " doriti?"
        );
        if(cantitate_salad > 0){
            var total_salad = cantitate_salad * menu_price[1];
            alert("Dvs. doriti" + " " + cantitate_salad + " " + menu[1] + " "+ "pretul va fi:" + " " + total_salad + " " + "lei");
        }
        else{
            alert("La revedere");
        }
    }
    else if(cantitate_salad > 0){
        var total_salad = cantitate_salad * menu_price[1];
        alert("Dvs. doriti" + " " + cantitate_salad + " " + menu[1] + " "+ "pretul va fi:" + " " + total_salad + " " + "lei");
    }
}

/* VERIFICAM DACA PRODUSUL COINCIDE CU PRODUSUL CARE SE AFLA PE POZITIA 2 IN SIRUL / MENU / */
else if(set_lowercase == menu[2]){
    alert(`Optiunea aleasa: '${menu[2]}' costa ${menu_price[2]} o portie `);

    var cantitate_soup = prompt(
        "Cite" + " " + menu[2] + " " + " doriti?"
    );
    if(cantitate_soup <= 0){
        alert("Dvs. nu ati introdus nimic va rugam sa mai introduceti inca odata cantitatea dorita");
        cantitate_soup = prompt(
            "Cite" + " " + menu[2] + " " + " doriti?"
        );
        if(cantitate_soup > 0){
            var total_soup = cantitate_soup * menu_price[2];
            alert("Dvs. doriti" + " " + cantitate_soup + " " + menu[2] + " "+ "pretul va fi:" + " " + total_soup + " " + "lei");
        }
        else{
            alert("La revedere");
        }
    }
    else if(cantitate_soup > 0){
        var total_soup = cantitate_soup * menu_price[2];
        alert("Dvs. doriti" + " " + cantitate_soup + " " + menu[2] + " "+ "pretul va fi:" + " " + total_soup + " " + "lei");
    }
}
/* VERIFICAM DACA PRODUSUL COINCIDE CU VRI-UN PORDUS DIN SIRUL / MENU / */
else if(set_lowercase == ""){
    alert("Nu ati introdus nici o denumire de produs sau nu a fost gasit asa produs in meniu, ne cerem scuze!")
}

