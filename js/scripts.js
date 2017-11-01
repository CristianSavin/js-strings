
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



var incercari = 0;
do{
    pin = prompt("Introduceti Pin");
    incercari++;
    console.log(incercari);
}while(pin != "1111" && incercari < 3);
if(incercari == 3){
    alert("Card Blocked");
}else{
    alert("Welcome");
}



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




















