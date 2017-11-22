var people = [
    "Marina,22,F",
    "Ion,30,M",
    "Tatiana,31,F",
    "Vlad,20,M",
    "Irina,21,F"
];
for(var i = 0 ; i < people.length; i++){
   console.log(i , people[i]);
}

/* MEN */
var men_slice = people[1];
var men_slice_two = people[3];

var str_men = men_slice.toString();
var str_men_two = men_slice_two.toString();

for(var m = 0; m < str_men.length; m++){
    if(str_men.charAt(m) == "M"){
       var men_char = str_men.substring(0 , str_men.length - 2);
    }
}
for(var m2 = 0; m2 < str_men_two.length; m2++){
    if(str_men_two.charAt(m2) == "M"){
        var men_char2 = str_men_two.substring(0 , str_men_two.length - 2);
    }
}

var men = [men_char , men_char2];

/* WOMEN */
var women_slice = people[0];
var women_slice_two = people[2];
var women_slice_three = people[4];

var str_women = women_slice.toString();
var str_women_two = women_slice_two.toString();
var str_women_three = women_slice_three.toString();


for(var w = 0; w < str_women.length; w++){
    if(str_women.charAt(w) == "F"){
        var women_char = str_women.substring(0 , str_women.length - 2);
    }
}
for(var w2 = 0; w2 < str_women_two.length; w2++){
    if(str_women_two.charAt(w2) == "F"){
        var women_char2 = str_women_two.substring(0 , str_women_two.length - 2);
    }
}
for(var w3 = 0; w3 < str_women_three.length; w3++){
    if(str_women_three.charAt(w3) == "F"){
        var women_char3 = str_women_three.substring(0 , str_women_three.length - 2);
    }
}

var women = [women_char , women_char2 , women_char3];



console.log(`Sirul de genul masculin este: \n
       ${men} :\n
       Sirul de genul feminin este: \n
       ${women}
`);

