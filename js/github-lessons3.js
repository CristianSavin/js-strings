/**
 * Created by cristiansavin on 07.11.17.
 */
//var version  = 6;
//var name = "\"EcmaScript\"";
//var copy = "\u00A9";
//
//document.write("We learn" + " " + name + " " + copy + " " + version + ".0");
//
///* LESSONS 4 */
//
//var my_name = prompt("Enter a word");
//var my_array  = my_name.split('').reverse().join('');
//console.log(my_array);


/* LECTIA 6 SWAP-letter */

let word = prompt("Introduceti un cuvint");
let word_tmp = "";
for(let i = 1; i <= word.length; i++){
    if(i % 2){
        word_tmp += word.substring(i, i + 1 ) +  word.charAt(i - 1);
    }
}
console.log(word_tmp);


/* LECTIA nr. 3 */

let version_old = prompt(`
    Introduceti o versiune de plugin: \n
    exemplu: 1.2.3 
`);
let version_new = prompt(`
    Introduceti o versiune de plugin: \n
    exemplu: 1.2.3 
`);

let versiunea_mare = 0;

let version_old_int = parseInt(version_old.split('.').join(''));
let version_new_int = parseInt(version_new.split('.').join(''));

if(version_old_int > version_new_int){
    versiunea_mare = version_old;
}
else{
    versiunea_mare = version_new;
}
console.log(`Versiunea mai mare este ${versiunea_mare}`);

if(version_old.charAt(0) != version_new.charAt(0)){
    console.log('Schimbarea este majora');
}
else if(version_old.charAt(2) != version_new.charAt(2)){
    console.log("Schimbarea este medie");
}
else if(version_old.charAt(4) != version_new.charAt(4)){
    console.log("Schimbarea este neesentiala");
}