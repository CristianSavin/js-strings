var words       = [
    "programming",
    "developing",
    "testing",
    "optimization",
    "updating",
    "upgrading",
    "releasing",
    "merging"
];

/* INTRODUCEM UN CUVINT NOU IN VARIABILA new_word */

var new_word = prompt(
    `
        Va rugam sa introduceti un termen!
        
    `
);
/* INTRODUCEM VARIABILA new_word in ARRAY PE POZITIA 3 == indexul 2 din array */

words.splice(2, 0 , new_word);
console.log(words);

/* STERGEM VARIABILA new_word CARE SE AFLA PE POZITIA 3 indexul 2 IN ARRAY */
var index = words.indexOf(new_word);
words.splice(index , 1);
console.log(words);

/* AICI AFISAM ARRAY-UL ORI PRIN CICLUL FOR SAU PRIN CICLUL FOR IN */
for(var i in words){
    console.log("obj." + i + " = " + words[i]);
}
/* AICI AFISAM ELEMENTELE DE PE POZITIA 4 PINA LA SFIRSITUL SIRULUI */
var curr_pos = 4;
while(curr_pos < words.length){
    console.log(words[curr_pos]);
    curr_pos++;
}

/* AICI SELECTAM ELEMENTELE DIN SIR CARE SE INCEP CU LITERA u */
var character = words[4];
var character2 = words[5];

/* AICI AFISAM ELEMTELE CARE SE INCEP CU LITERA u INTR-UN ARRAY NOU */
var characters_u = [character , character2];
console.log(characters_u);

/* AICI FACE SORTARE IN ARRAY PENTRU A PRIMI ELEMNTELE DIN ARRAY SORTATE DUPA ORDINEA ALFABETICA */
words.sort();
console.log(words);


