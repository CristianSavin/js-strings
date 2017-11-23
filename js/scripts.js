
// Lectia 1

/*

    o persoana introduce o suma de bani in bani in MDL
    se cere sa se converteze ceasta suma de bani in dolari si euro
    si sa se afiseze rezultatul

 */
//var coefEuro =  20.45;
//var coefDolari = 17.32;
//var suma = prompt("Introduceti suma");
//
//// alert("Suma" + " " + suma + " " + "Lei se echivaleaza la"  + " " + suma / coefEuro + " " + "euro" +  " " + "sau" + " " + " " + suma / coefDolari + " " + "dolari");


/* Lectia 2 */

//var nota = prompt("Ce nota ai");
//var bine = 7;
//
//
//if(nota >= bine){
//    alert("Inveti bine");
//}else{
//    alert("Inveti rau");
//}


/*
     Pretul banane in variabila = 20lei
     Variabila 2 Cantitate = prompt "cite kg";
     Variabil 3 = prompt "Citi bani ai?";

*/

//var banane = 20;
//var cantitate = prompt("Cite kg de banane doresti");
//var bani = prompt("Citi bani ai?");
//var bani_necesari = banane * bani;
//var necesar_pentru =bani_necesari - bani;
//
//if(cantitate * banane <= bani){
//    alert("Iti ajunge bani");
//}else{
//    alert("Nu ai destuli bani" + " " + cantitate + " " + "kg de banane" + " " + "costa" + " " + bani_necesari + " " + "lei" + " " + "aveti nevoie inca de" + " " + necesar_pentru + " " + " lei ");
//}



//if(d){
//    alert("");
//}
//else if(a){
//    alert("");
//}else{
//    alert("");
//}


/* Tema de acasa LUCRUL CU VARIABILILE

 */

//var menuStraus = {
//    FastFood: {
//      Burgher:70,
//      Pizza:120,
//      Sandwich:40,
//      HotDog:60
//    },
//    Salate: {
//      Cezar_pui:120,
//      Cezar_crevete:170
//    },
//    Bauturi: {
//        Apa_plata:15,
//        CocaCola:20,
//        Sprite:20,
//        BereChisinau:25
//    }
//};

//
//var comanda = prompt("Ce doriti sa comandati de la StrausMd");
//var livrare_gratuita = 300;
//var comanda_data = menuStraus.FastFood.Burgher + menuStraus.FastFood.Sandwich + menuStraus.Bauturi.Apa_plata;
//
//
//if(comanda == "Burgher , Sandwich , Sprite"){
//    alert("Comanda dvs este Burgher , Sandwich , Sprite si costa" + " " + comanda_data + " " +
//    "Livrarea este gratuita");
//}else if(comanda_data <= livrare_gratuita){
//    alert("Livrarea va costa 30lei");
//}else{
//
//}


/* Lectia 3 */
/* afisam cifrele de la 1 pina la 10 prin ciclul while  */


/* ICRIMENT */
//n = 1;
//while(n <= 10){
//    console.log(n);
//    n++
//}

/* DECENEMENT */
//y = 10;
//while(n >= 1){
//    console.log(n);
//    n--;
//}


/* ICREMENT NOT 5 */
//var n = 1;
//while(n <= 10){
//    if ( n != 5){
//        console.log(n);
//    }
//    n++;
//}



/* ICREMENT NOT 3 , 5 , 7 */
//var n = 1;
//while(n <= 10){
//    if(n != 3 && n != 5 && n != 7){
//        console.log(n);
//    }
//    n++;
//}


/* CIFRE PARE */
//var n = 1;
//while(n <= 10){
//    if(n % 2 == 0){
//        console.log(n);
//    }
//    n++;
//}
//
///* CIRFRE IMPARE */
//var n = 1;
//while(n <= 10){
//    if(n % 3 == 0){
//        console.log(n);
//    }
//    n++;
//}
//
///* AFISEAZA TEXT */
//
//var n = 1;
//while(n <= 10){
//    document.write("* <br />");
//    n++;
//}

//
//var n = 1;
//while (n <= 9){
//    document.write("*");
//    if(n%3 == 0){
//        document.write("<br />");
//    }
//n++;
//}


//var n = 1;
//while(n <= 9){
//    if(n == 5){
//           document.write("$");
//    }
//    else{
//        document.write("*");
//    }
//    if(n % 3 == 0){
//        document.write("<br>");
//    }
//    n++;
//}



/* TEMA PE ACASA ROZOLVATA */

//var option = -1;
//var cantitate_burgher;
//var cantitate_sandwich;
//var cantitate_pizza;
//var livrare_gratuita = 300;
//var pizza = 120;
//var burgher = 70;
//var sandwich = 60;
//var date_personale;
//var nume;
//var telefon;
//var adresa;
//var etaj;
//var apartament;
//var inchide_meniu;
//while (option != 0){
//    console.log('1-' + option);
//    option = prompt("######### BUNA ZIUA, VA SALUTA COMPANIA STRAUS.MD , VA RUGAM SA ALEGETI DIN PRODUSELE NOASTRE ##########  \n " +
//        "0.ANULARE \n" +
//        "1.BURGHER \n" +
//        "2.SANDWICH \n" +
//        "3.PIZZA \n" +
//        "4.Introduce datele personale \n" +
//        "5.Arata comanda"
//    );
//    if(option == "1") {
//        cantitate_burgher = prompt("VA RUGAM INTRODUCETI NR. DE BURGHERE DORITE");
//    }
//    else if(option == "2"){
//        cantitate_sandwich = prompt("VA RUGAM INTRODUCETI NR. DE SANDWICH DORIT");
//    }
//    else if(option == "3"){
//        cantitate_pizza = prompt("VA RUGAM INTRODUCETI NR. DE PIZZA");
//    }
//    else if(option == "4"){
//        date_personale = false;
//        while(date_personale !== "0"){
//            console.log('2-' + option);
//            date_personale = prompt("Va rugam introduceti, \n" +
//                "0.Anulare comanda \n" +
//                "1.Numele: \n" +
//                "2.Nr.Telefon \n" +
//                "3.Adresa: \n" +
//                "4.Etajul \n" +
//                "5.Apartament \n" +
//                "6.Meniu pricipal"
//            );
//            if(date_personale == "1"){
//                nume = prompt("Introduceti numele");
//            }
//            else if(date_personale == "2"){
//                telefon = prompt("Introduceti numarul de telefon");
//            }
//            else if(date_personale == "3"){
//                adresa = prompt("Introduceti adresa");
//            }
//            else if(date_personale == "4"){
//                etaj = prompt("Introduceti nr. etajului");
//            }
//            else if(date_personale == "5"){
//                apartament = prompt("Introduceti nr. la apartament");
//            }
//            else if(date_personale == "6"){
//                break;
//            }
//        }
//    }
//    else if(option == "5"){
//        arata_comanda();
//    }
//}
//
//function arata_comanda(){
//    var total = cantitate_burgher * burgher + cantitate_sandwich * sandwich + cantitate_pizza * pizza;
//    if(cantitate_burgher == 0 && cantitate_sandwich == 0 && cantitate_pizza == 0){
//        alert("Dvs nu ati ales nimic din meniul nostru");
//    }
//    else if(cantitate_burgher >= 1 && cantitate_sandwich >= 1 && cantitate_pizza >= 1){
//        if(livrare_gratuita <= total){
//            alert("Felicitari ati beneficiat de livrare gratuita!!! \n" +
//            "Livrarea va fi pe loc in 30-40 minute. Va multumim.")
//        }else if(livrare_gratuita > total){
//            alert("Livrare va costa 30 de lei , si va pe loc in 30-40 de min. Va multumim");
//        }
//        alert("Comanda dvs este urmatoarea: \n" +
//            "Burghere" + " " + cantitate_burgher + "=" + " " + cantitate_burgher * burgher + " " + "Lei." + " \n" +
//            "Sandwich" + " " + cantitate_sandwich + "=" + " " + cantitate_sandwich * sandwich + " " + "Lei." + "\n" +
//            "Pizza" + " " + cantitate_pizza + "=" + " " + cantitate_pizza * pizza + " " + "Lei." + "\n" +
//            "Livrarea o sa fie livrata la \n" +
//            "Adresa:" + " " + adresa + " \n" +
//            "Etajul" + " " + etaj + " \n" +
//            "Apartamentul nr." +  " " + apartament + " \n" +
//            "Numele persoanei:" + " " + nume + " \n" +
//            "Numar de contact:" + " " + telefon + " \n" +
//            "Total spre achitare:" + total + " " + "Lei. \n"
//        );
//        option = 0;
//        inchide_meniu = prompt("Va rugam sa alegeti dintre urmatoarele: \n" +
//            "1.Finiseaza comanda"
//        );
//        if(inchide_meniu == "1"){
//            document.write("<img src='smile.jpg'  width='200px' height='200px' />" + "\n" +
//                "<h1>Felicitari comanda efectuata cu succes!!!!</h1>");
//        }
//
//    }
//}


/* LECTIA 4 * SWITCH */
//
//var ziua = prompt("Ce zi este astazi?");
//switch(ziua){
//    case 'Luni': alert("Astazi este ziua 1");
//        break;
//    case 'Marti': alert("Astazo este ziua a 2");
//        break;
//    case 'Miercuri': alert("Astazi este ziua a 3");
//        break;
//    case 'Joi': alert("Astazi este ziua a 4");
//        break;
//    case 'Vineri': alert("Astazi este ziua a 5");
//        break;
//    case 'Simbata': alert("Astazi este ziua a 6");
//        break;
//    case 'Duminica': alert("Astazi este ziua a 7");
//        break;
//}


//var n = 1;
//do{
//    document.write(n);
//    n++;
//}while(n <= 10);
//
//var v = 10;
//do{
//    document.write(v);
//    v--;
//}while(v >= 1);


//var pin = prompt("Introdu PIN");
//while(pin != "1111"){
//    alert("Gresit! Mai incearca");
//    pin = prompt('1111');
//}



//var incercari = 0;
//do{
//    pin = prompt("Introduceti Pin");
//    incercari++;
//    console.log(incercari);
//}while(pin != "1111" && incercari < 3);
//if(incercari == 3){
//    alert("Card Blocked");
//}else{
//    alert("Welcome");
//}



/* TEMA PE ACASA / MENIU STARUS IN DO WHILE */





//var cantitate_burghere = 0;
//var cantitate_pizza = 0;
//var cantitate_sandwich = 0;
//var pret_burgher = 80;
//var pret_pizza = 120;
//var pret_sandwich = 60;
//var nume;
//var telefon;
//var adresa;
//var etajul_apartamentul;
//var livrare_gratuita = 300;
//do{
//    var meniu = prompt(
//        "### VA SALUTA COMPANIA STRAUS MD ### \n" +
//        "MENIUL STRAUSMD \n" +
//        "0.Iesire \n" +
//        "1.Burgher --- 80Lei \n" +
//        "2.Pizza --- 120Lei \n" +
//        "3.Sandwich --- 60Lei \n" +
//        "4.Arata comanda"
//    );
//    if(meniu == "1"){
//        cantitate_burghere = prompt(
//            "Va rugam sa indicati cantitate de Burghere dorita"
//        );
//    }
//    else if(meniu == "2"){
//        cantitate_sandwich = prompt(
//            "Va rugam sa introduceti cantitatea de Pizza dorita"
//        );
//    }
//    else if(meniu == "3"){
//        cantitate_pizza = prompt(
//          "Va rugam sa introduceti cantitatea de Sandwich dorita"
//        );
//    }
//    else if(meniu == "4"){
//        if(cantitate_burghere == 0 || cantitate_pizza == 0 || cantitate_sandwich == 0){
//            alert("Dvs nu ati ales nimic din meniul nostru");
//        }
//        else if(cantitate_burghere >= 1 || cantitate_pizza >= 1 || cantitate_sandwich >= 1){
//            // Calculam cantitate la produse
//            var suma =   cantitate_burghere * pret_burgher + cantitate_pizza * pret_pizza + cantitate_sandwich * pret_sandwich;
//            alert("Comanda dvs este urmatoarea: \n" +
//                "Burghere: --" + cantitate_burghere + "\n" +
//                "Pizza: ---" + cantitate_pizza + "\n" +
//                "Sandwich: ---" + cantitate_sandwich + "\n" +
//                "Suma totala pentru produse este:" + suma + " Lei"
//            );
//        }
//        do{
//            var finiseaza_comanda = prompt(
//                "### Comanda dvs. este gata va rugam sa introduceti datele personale \n" +
//                "1.Numele: \n" +
//                "2.Nr.telefon: \n" +
//                "3.Adresa: \n" +
//                "4.Etajul, nr. Apartament: \n" +
//                "5.Iesire \n"
//            );
//
//
//            if(finiseaza_comanda == "1"){
//                nume = prompt(
//                  "Introduceti numele dvs."
//                );
//            }
//            else if(finiseaza_comanda == "2"){
//                telefon = prompt(
//                    "Introduceti numarul de telefon"
//                );
//            }
//            else if(finiseaza_comanda == "3"){
//                adresa = prompt(
//                  "Introduceti adresa dvs."
//                );
//            }
//            else if(finiseaza_comanda == "4"){
//                etajul_apartamentul = prompt(
//                  "Introduceti etajul si nr. la apartamentul dvs."
//                );
//            }
//        }while(finiseaza_comanda != "5");
//        if(suma > livrare_gratuita) {
//            alert(
//                "### COMANDA DVS ESTE URMATOAREA ### \n" +
//                "Burgher: ----" + cantitate_burghere + " \n" +
//                "Pizza: ----" + cantitate_pizza + " \n" +
//                "Sandwich: ----" + cantitate_sandwich + " \n" +
//                "### COMANDA VA FI LIVRATA LA ADRESA ###" + " \n" +
//                "Numele: ----" + nume + " \n" +
//                "Telefon: ----" + telefon + " \n" +
//                "Adresa: ----" + adresa + " \n" +
//                "Etajul si nr. Apartamentului: ----" + etajul_apartamentul +" \n" +
//                "Suma spre achitare este: ----" + suma + " \n" +
//                "Va felicitam ati beneficiat de livrare gratuita"
//            );
//        }
//        else if(suma < livrare_gratuita){
//            alert(
//                "### COMANDA DVS ESTE URMATOAREA ### \n" +
//                "Burgher: ----" + cantitate_burghere + " \n" +
//                "Pizza: ----" + cantitate_pizza + " \n" +
//                "Sandwich: ----" + cantitate_sandwich + " \n" +
//                "### COMANDA VA FI LIVRATA LA ADRESA ###" + " \n" +
//                "Numele: ----" + nume + " \n" +
//                "Telefon: ----" + telefon + " \n" +
//                "Adresa: ----" + adresa + " \n" +
//                "Etajul si nr. Apartamentului: ----" + etajul_apartamentul +" \n" +
//                "Suma spre achitare este: ----" + suma + " \n" +
//                "Livrarea va costa 30 de lei"
//            );
//        }
//    }
//
//}while(meniu != 0);



/* TEMA PE ACASA / MENIU STARUS IN DO WHILE si SWITCH CASE */



//var cantitate_burghere = 0;
//var cantitate_pizza = 0;
//var cantitate_sandwich = 0;
//var pret_burgher = 80;
//var pret_pizza = 120;
//var pret_sandwich = 60;
//var nume;
//var telefon;
//var adresa;
//var etajul_apartamentul;
//var livrare_gratuita = 300;
//do{
//    var meniu = prompt(
//        "### VA SALUTA COMPANIA STRAUS MD ### \n" +
//        "MENIUL STRAUSMD \n" +
//        "0.Iesire \n" +
//        "1.Burgher --- 80Lei \n" +
//        "2.Pizza --- 120Lei \n" +
//        "3.Sandwich --- 60Lei \n" +
//        "4.Arata comanda \n"
//    );
//    switch(meniu){
//        case '1' :{
//            cantitate_burghere = prompt(
//                "Va rugam sa indicati cantitate de Burghere dorita"
//            );
//            break;
//        }
//        case '2' :{
//            cantitate_pizza = prompt(
//                "Va rugam sa introduceti cantitatea de Sandwich dorita"
//            );
//            break;
//        }
//        case '3' :
//        {
//            cantitate_sandwich = prompt(
//                "Va rugam sa introduceti cantitatea de Pizza dorita"
//            );
//            break;
//        }
//        case '4' : {
//            if(cantitate_burghere == 0 || cantitate_pizza == 0 || cantitate_sandwich == 0){
//                alert("Dvs nu ati ales nimic din meniul nostru");
//            }
//            else if(cantitate_burghere >= 1 || cantitate_pizza >= 1 || cantitate_sandwich >= 1){
//                // Calculam cantitate la produse
//                var suma =   cantitate_burghere * pret_burgher + cantitate_pizza * pret_pizza + cantitate_sandwich * pret_sandwich;
//                alert("Comanda dvs este urmatoarea: \n" +
//                    "Burghere: --" + cantitate_burghere + "\n" +
//                    "Pizza: ---" + cantitate_pizza + "\n" +
//                    "Sandwich: ---" + cantitate_sandwich + "\n" +
//                    "Suma totala pentru produse este:" + suma + " Lei"
//                );
//
//                do{
//                    var finiseaza_comanda = prompt(
//                        "### Comanda dvs. este gata va rugam sa introduceti datele personale \n" +
//                        "1.Numele: \n" +
//                        "2.Nr.telefon: \n" +
//                        "3.Adresa: \n" +
//                        "4.Etajul, nr. Apartament: \n" +
//                        "5.Iesire \n"
//                    );
//
//                    switch(finiseaza_comanda){
//                        case '1': {
//                            nume = prompt(
//                                "Introduceti numele dvs."
//                            );
//                            break
//                        }
//                        case '2' :{
//                            telefon = prompt(
//                                "Introduceti numarul de telefon"
//                            );
//                            break
//                        }
//                        case '3': {
//                            adresa = prompt(
//                                "Introduceti adresa dvs."
//                            );
//                            break
//                        }
//                        case '4': {
//                            etajul_apartamentul = prompt(
//                                "Introduceti etajul si nr. la apartamentul dvs."
//                            );
//                            break
//                        }
//                    }
//                }while(finiseaza_comanda != "5");
//                    if(suma > livrare_gratuita) {
//                        alert(
//                            "### COMANDA DVS ESTE URMATOAREA ### \n" +
//                            "Burgher: ----" + cantitate_burghere + " \n" +
//                            "Pizza: ----" + cantitate_pizza + " \n" +
//                            "Sandwich: ----" + cantitate_sandwich + " \n" +
//                            "### COMANDA VA FI LIVRATA LA ADRESA ###" + " \n" +
//                            "Numele: ----" + nume + " \n" +
//                            "Telefon: ----" + telefon + " \n" +
//                            "Adresa: ----" + adresa + " \n" +
//                            "Etajul si nr. Apartamentului: ----" + etajul_apartamentul +" \n" +
//                            "Suma spre achitare este: ----" + suma + " \n" +
//                            "Va felicitam ati beneficiat de livrare gratuita"
//                        );
//                    }
//                    else if(suma < livrare_gratuita){
//                        alert(
//                            "### COMANDA DVS ESTE URMATOAREA ### \n" +
//                            "Burgher: ----" + cantitate_burghere + " \n" +
//                            "Pizza: ----" + cantitate_pizza + " \n" +
//                            "Sandwich: ----" + cantitate_sandwich + " \n" +
//                            "### COMANDA VA FI LIVRATA LA ADRESA ###" + " \n" +
//                            "Numele: ----" + nume + " \n" +
//                            "Telefon: ----" + telefon + " \n" +
//                            "Adresa: ----" + adresa + " \n" +
//                            "Etajul si nr. Apartamentului: ----" + etajul_apartamentul +" \n" +
//                            "Suma spre achitare este: ----" + suma + " \n" +
//                            "Livrarea va costa 30 de lei"
//                        );
//                    }
//                meniu = 0;
//            }
//            break;
//        }
//    }
//}while(meniu != 0);


/* LECTIA NR 5 FOR */

//for (var x = 1 ; x < 10 ; x++){
//    console.log(x);
//}
//
//var incercari = 0;
//for(var pin = "" ; pin != "1111" ; incercari++){
//    pin = prompt(
//      "Introduceti pinul!"
//    );
//    if (pin == "1111"){
//        alert("Corect");
//    }
//    else if(incercari == 2){
//        alert("Card blocat");
//        break;
//    }
//    else{
//        alert("Gresit");
//    }
//}



/* ALTERNATIVA LA IF/ELSE */

// ( Conditie ) ? cod_daca_adevar : cod_daca_fals

//var a = prompt(
//    "Da-mi un numar intreg: ?"
//);
//a < 0 ?
//    alert("Neg")
//:
//    a == 0 ?
//    alert("z")
//:
//    alert("poz");


/* LECTIA 6 */


// VERIFICARE DE PE POZITIA 0

// Y -> porumb
// x -> bob
// | -> grau
// . -> pamint

//var total = 0;
//var gradina = '....YYYYxxxYYYYxxx....|||||||';
//var price_porumb = 100;
//var price_grau = 50;
//var price_bob = 300;
//
//for (var parcela = 0 ; parcela < gradina.length ; parcela++){
//    console.log(gradina.charAt(parcela));
//    if(gradina.charAt(parcela) == "Y"){
//        total+= price_porumb;
//        console.log(parcela , gradina.charAt(parcela));
//    }
//   else if(gradina.charAt(parcela) == "x"){
//        total+= price_bob;
//
//        console.log(parcela , gradina.charAt(parcela));
//    }
//    else if(gradina.charAt(parcela) == "|"){
//        total+= price_grau;
//        console.log(parcela , gradina.charAt(parcela));
//    }
//}
//alert(`Profit ${total} lei`);




// Verificare de pe ultima pozitie
//var total = 0;
//var gradina = '....YYYYxxxYYYYxxx....|||||||';
//var price_porumb = 100;
//var price_grau = 50;
//var price_bob = 300;
//
//for (var parcela = gradina.length - 1 ; parcela >= 0 ; parcela--){
//    if(gradina.charAt(parcela) == "Y"){
//        total+= price_porumb;
//        console.log(parcela , gradina.charAt(parcela));
//    }
//   else if(gradina.charAt(parcela) == "x"){
//        total+= price_bob;
//
//        console.log(parcela , gradina.charAt(parcela));
//    }
//    else if(gradina.charAt(parcela) == "|"){
//        total+= price_grau;
//        console.log(parcela , gradina.charAt(parcela));
//    }
//}
//alert(`Profit ${total} lei`);

//
//var gradina = prompt("Arata gradina \n" +
//    "x = bob \n" +
//    "Y = porumb \n" +
//    "| = grau"
//);
//var price_porumb = 100;
//var price_grau = 50;
//var price_bob = 300;
//var total = 0;
//
//for(var parcela = 0 ; parcela < gradina.length  ; parcela++){
//    if(gradina.charAt(parcela) == "Y"){
//        total+= price_porumb;
//        console.log(parcela , gradina.charAt(parcela));
//    }
//    else if(gradina.charAt(parcela) == "x"){
//        total+= price_bob;
//
//        console.log(parcela , gradina.charAt(parcela));
//    }
//    else if(gradina.charAt(parcela) == "|"){
//        total+= price_grau;
//        console.log(parcela , gradina.charAt(parcela));
//    }
//}
//alert(`Profit ${total} lei`);


/* LECTIA 7 */

//var styles = `body{
//      colod: red;
//      }`;
//var color = 'blue';
//styles = styles.replace('red' , color);
//alert(styles);



//// REGULAR EXPRESSIONS /// RegExp

/// * shabloane / patterne care permit prelucrarea textelor <- limbaj perl
// var html = `<div class="container first">
//         ...
//     </div>`;
// var new_class = "last";
// var content = "This is the content";
// html = html.replace('first' , new_class);
// html = html.replace('...' , content);
// console.log(html);
//
//
// /* ARRAY  date tabelare unidimensional , bidimensional , multidimensional
// 	Colectie de valori ordonate, 0-9....
// 	["ion"]["Maria"]["???"]
// 	// 0   ,   1,      2
// */
// var orase = ["Chisinau" , "Tiraspol" , "Calarasi" , "Dubasari"];

// index       0    ,         1,          2,            3
// orase.pop(); Sterge ultimul element
// orase.push(); Introduce un nou element la sfirsit;
// orase.unshift(); Introduce un element nou la inceput;
// orase.shift(); Sterge primul element;
/* EXEMPLU care transfroma un string in ARRAY

 var orase = "Chisinau Balti Orhei".split();
 result
 console.log(result);
 result in browser
 "Chisinau" , "Balti" , "Orhei";
*/

/* 
	
	var orase = "Chisinau Balti Orhei".join(|);
	console.log(orase);
	result 
	"Chisinau | Balti | Orhei";
*/

/* 
	
	var orase = ["Chisinau" , "Balti" , "Orhei"]
	orase.revers

	inverseaza array inversat

	var orase = ["Chisinau" , "Balti" , "Orhei"]
	orase.slice(1);

	var orase = ["Chisinau" , "Balti" , "Orhei"]
	orase.slice(1, 2 , "Tiraspol")

	orase = ["Chisinau" , "Balti" , "Orhei"]
	orase[1] =  "Moscova";

*/

// console.log(orase[1] , orase.length);
//
// // ARRAY liniar -> unidimensional
//
// var gradina = ["Y" , "Y" , "Y" , "." , "." , "x" , "x" , "x"];
// var price_bob = 300;
// var price_grau = 50;
// var price_porumb = 100;
// var total = 0;
//
// console.log("gradina are" + " " + gradina.length + " " + " metri");
// for (var i = 0; i < gradina.length ; i++) {
// 	 if(gradina[i] == "Y"){
//        total+= price_porumb;
//    }
//    else if(gradina[i] == "x"){
//        total+= price_bob;
//    }
//    else if(gradina[i] == "."){
//        total+= price_grau;
//    }
// }
// console.log(`Profit ${total} lei`);
//
//
// var images = [
// 	"toamna.jpg" ,
// 	"iarna.jpg" ,
// 	"vara.jpg"
// ];
//
// var n = 2;
// while(n >= 0){
// 	console.log(images[n]);
// 	n--;
// }



/* LECTIA 7 */

var a = [3, 2, 1];
var x = 1;
a [a[x - 1] ++];

console.log(a);



var persoane = [
    "Vanea" ,
    "Irina" ,
    "Pechia" ,
    "Doina" ,
    "Wasea" ,
    "Maria"
];

// 1) De schimbat cu locul prima si ultima celula cel putin prin doua metode


var temporara = persoane[0];
persoane[0] = persoane[5];
persoane[5] = temporara;
console.log(persoane);

var temporar_two = persoane[0];
var temporar_three = persoane[5];
persoane.shift();
persoane.pop();
persoane.unshift(temporar_two);
persoane.push(temporar_three);
console.log(persoane);

var primul = persoane.shift();
var doi = persoane.pop();
persoane.push(doi);
persoane.unshift(primul);
console.log(persoane);


var trei = persoane.splice(0 , 1);
var patru = persoane.splice(0 , 5);
persoane.unshift(trei);
persoane.push(patru);
console.log(persoane);


/* FUNCTIA ESTE UN BLOCK DE FUNCTII CARE POATE FI ACCESATE */
/* FUNCTIILE POT PRIMI VALORI , SI FUNCTIILE POT RETURNA VALORI */

// function salut(){
//     alert("Norok");
// }

/* FUNCTIILE se folosesc pentru a facilita munca si codul si pentru a nu repeta codul */

/*

    DRY
    SCOPING
    SEPARATION of CONCERNS

 */

// function salut(lang){
//     lang = prompt(`Selecteaza limba:
//     1). Engleza.
//     2). Rusa.
//     3). Romana.
//     `);
//         if(lang === "1") {
//             alert("Hello");
//         }
//         else if(lang === "2"){
//             alert("Privet")
//         }
//         else if(lang === "3"){
//             alert("Zdarova");
//         }
// }
// salut();

/* FUNCTIA CARE NU CONFLICTA CU CUVINTELE REZERVATE IN JS */
function f(){ ///START ZONA LOCALA


    ////// START LOCALE ZONE
}

// var top = 10;
// top++;
// result este undefined;

// top este cuvint rezervat de javascript
// module - pentru a exclude conflicte    /// de citit despre functii si modeule


/* FUNCTIE CARE NU INTERACTIONEAZA CU CUVINTELE REZERVATE DIN JS */
// (function(){
//
// })();


/*

    hand
    ACTOR  (eu)-> ACTION  (prepar)-> SUBJECT (bors)-> RESULT (bors)-> PARAMETER (ingrediente)


 */


/* OOP */


// OBIECTUL ESTE UN CONTAINER CAR ESTE FORMAT DIN * PROPRIETATI si METODE

// var mobil  = {
//     brand : "Iphone X" ,
//     color : "Pink",
//     price: 32000,
//     diagonala: 5.9,
//     camera: "50Mp",
//     used: false ,
//     interval : [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//     ],
//     colors : [
//       "pink" ,
//       "black",
//       "white"
//     ],
//     battery : {
//         type : "Li Ion",
//         amperage: 7800,
//         voltage: 3.7
//     },
//     /* METODE */
//     call: function(){
//         alert("piiib .... piiibbbbb");
//     },
//     selfie : function(){
//         my_interval();
//     }
// };
// function my_interval(){
//     for(var i = 10; i >= 0; i--){
//         console.log(mobil.interval[i]);
//         if(mobil.interval[i] >= 1){
//             alert("cik cik");
//         }
//     }
//
//
// console.log(mobil.selfie() , mobil.battery.amperage);



var home = {
    name : "Premium King's Penthouse ******",
    type: "penthouse",
    area : 500, // M2
    price : 1000000,  // EURO
    image: [
        "https://media-cdn.tripadvisor.com/media/photo-s/09/f0/8c/11/alila-seminyak.jpg" ,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj78JZZalAgDJG21xlLnY3AeDdpGbwlWXgkxAllLzxcrdrGcvG",
        "http://www.adelto.co.uk/wp-content/uploads/2012/02/Contemporary-Homes-In-Manchester-10.jpg" ,
    ],
    rooms: [
        {name: "Kitchen" , area : 50},
        {name: "Bathroom" , area : 100},
        {name: "Dorm view \"Piata Centrala \" " , area: 40},
        {name: "Dorm view \" Peretele Cladirii Vecine \" " , area : 40},
        {name: "Dorm view \" Adaptat pentru catzei \" " , area: 50},
        {name: "Livingroom" , area : 240}
    ],

    // METODE / ACTIUNI

    show : function(){
        document.write("<h1>" + this.name + "</h1>");
        for(var i = 0 ; i < this.image.length ; i++){
            document.write("<img width=400 height=200 src=\"" + this.image[i] + "\"  >");
        }
    } ,
    show_rooms : function(){
        document.write(`<table border="1px">`);
        for (var n = 0 ; n < home.rooms.length; n++){
            document.write(`    
                <tr>
                    <td>
                        ${this.rooms[n].name} 
                    </td>
                    <td>
                        ${this.rooms[n].area}
                    </td>
                </tr>
            `)
        }
        document.write(`</table>`);
    }
};
home.show();
home.show_rooms();


/* ACASA DE CITIT DESTE XML SI DESPRE JSON
*  De creat un obiect pentru utilizator de ,nume , parola , avatar , info despre el,
* */


/* lessons 2 OOP  OBIECTE DINAMICE / DINAMICAL OBJECT */
var person = {
    name : "Ivan Trzurcan",
    age: 1
};

/* MODIFICAM OBIECTUL  -> adaugam proprietati in obiect*/
person.car = "Tesla XXXXX";
person.job = "Jsnik";

/* MODIFICAM OBIECTU  -> eliminam proprietati*/
delete persoane.car;
console.log(person.name);
console.log(person.age);
console.log(persoane.car);
console.log(person.job);



/* 1) . Adauga 3 persoane in membri 2). De eliminat seful 3). De adaugat pozitia de capitan cu numele din prompt. */
// var echipa = {
//     denumire: "Echipa 2017" ,
//     membrii: [],
//     sef: "Mircea Snegur" ,
//     get_date : function(){
//         for (var m = 1; m <= 3; m++){
//             this.membrii.push(prompt("Introduceti numele mumrului:"));
//         }
//         delete this.sef;
//         var capitan = prompt("Introduceti numele capitanului");
//         this.capitan =  capitan;
//         document.write(`<table border="1px">
//                 <tr>
//                     <td>
//                         Nume echipa
//                     </td>
//                     <td>
//                         ${this.denumire}
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         Membrii
//                     </td>
//                     <td colspan="3">
//                         ${this.membrii[0]}${this.membrii[1]}${this.membrii[2]}
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         Capitan
//                     </td>
//                     <td>
//                         ${this.capitan}
//                     </td>
//                 </tr>
//             </table>`)
//     }
// };
//
// echipa.get_date();
//
// /* 1). Trebuie sa apara televizor, calculator , pat , fotoliu , masa   , Prin metoda prompt , la fel brad*/
// var room = {
//     init_questions : function(){
//         var tv = prompt("Model televizor");
//         var pc = prompt("Model calculator");
//         var pat = prompt("Model pat");
//         var fotoliu = prompt("Model fotoliu");
//         var masa = prompt("Model masa");
//         this.tv = tv;
//         this.pc = pc;
//         this.pat = pat;
//         this.fotliu = fotoliu;
//         document.write(`<table border="1px">`);
//         document.write(`
//             <tr>
//                 <td>
//                     TV
//                 </td>
//                 <td>
//                     ${this.tv}
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     PC
//                 </td>
//                 <td>
//                     ${this.pc}
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     Pat
//                 </td>
//                 <td>
//                     ${this.pat}
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     Fotoliu
//                 </td>
//                 <td>
//                     ${this.fotliu}
//                 </td>
//             </tr>
//         `);
//         document.write(`</table>`)
//
//     }
// };
// room.init_questions();


/* SABLONIZAREA OBIECTELOR */
// clase (prototipare)
// Factori

// ECMASCRIPT 6
// Clasele trebuie sa fie numite cu litera majuscula exemplu (Product)


class Product {  // TIP NOU DE DATE
    constructor(denumire){ // CONSTRUCTOR
        this.name = denumire;
        this.price = prompt("Pret");
    }
}


// CREEAM OBIECTE NOI DE TIP PRODUS
var p_1 = new Product("Cartofi");
var p_2 = new Product("Perj");
var p_3 = new Product("Fasole");

console.log(p_1);
console.log(p_2);
console.log(p_3);

/* DE MODELAT CITEVA OBIECTE DIN REALITATE */
class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        alert(this.name);
    }
}
var user = new User("Grisa");
user.sayHi();

























