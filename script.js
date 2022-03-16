// initialisation des variables
let a = 0
let b = 0 
let c = 0 

// choix de l'opération 
let choix = prompt('1: addition /n 2: soustraction 3: multiplication 4: division');

// addition 
function addition(){
    a = parseInt(prompt('choix nombre 1'))
    b = parseInt(prompt('choix nombre 2'))
    c = a + b;
    alert('Le résultat est : ' + c);
}

// soustraction 
function soustraction(){
    a = parseInt(prompt('choix nombre 1'))
    b = parseInt(prompt('choix nombre 2'))
    c = (a - b);
    alert('Le résultat est : ' + c);
}

// multiplication 
function multiplication(){
    a = parseInt(prompt('choix nombre 1'))
    b = parseInt(prompt('choix nombre 2'))
    c = a * b;
    alert('Le résultat est : ' + c);
}

// division 
function division(){
    a = parseInt(prompt('choix nombre 1'))
    b = parseInt(prompt('choix nombre 2'))
    c = a / b;
    alert('Le résultat est : ' + c);
}

// s'assurer de choisir un des choix et pas autre chose 

// comportement en fonction du choix 
if (choix == 1) {
    addition();
} else if(choix == 2) {
    soustraction();
} else if(choix == 3) {
    multiplication();
} else if(choix == 4) {
    division();
};