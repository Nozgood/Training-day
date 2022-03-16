// initialisation des variables
let a = 0
let b = 0 
let c = 0 
let choix = 0;

// addition 
function addition(){
    a = parseInt(prompt('ADDITION \n \n Choisis ton premier nombre : \n'))
    b = parseInt(prompt('ADDITION \n \n Choisis ton deuxième nombre : \n'))
    c = a + b;
    if (isNaN(c)) {
        alert('je ne peux pas effectuer d\'opération si je n\'ai pas deux nombres, rafraichis la page')
    } else {
        alert('Le résultat est : ' + c);
    }
    return c;
}

// soustraction
function soustraction(){
    a = parseInt(prompt('SOUSTRACTION \n \n Choisis ton premier nombre : \n'))
    b = parseInt(prompt('SOUSTRACTION \n \n Choisis ton deuxième nombre : \n '))
    c = a - b;
    if (isNaN(c)) {
        alert('je ne peux pas effectuer d\'opération si je n\'ai pas deux nombres, rafraichis la page')
    } else {
        alert('Le résultat est : ' + c);
    }
    return c;
}

// multiplication 
function multiplication(){
    a = parseInt(prompt('MULTIPLICATION \n \n Choisis ton premier nombre : \n'))
    b = parseInt(prompt('MULTIPLICATION \n \n Choisis ton deuxième nombre : \n'))
    c =  a * b;
    if (isNaN(c)) {
        alert('je ne peux pas effectuer d\'opération si je n\'ai pas deux nombres, rafraichis la page')
    } else {
        alert('Le résultat est : ' + c);
    }
    return c;
}

// division 
function division(){
    a = parseInt(prompt('DIVISION \n \n Choisis ton premier nombre : \n'))
    b = parseInt(prompt('DIVISIONs \n \n Choisis ton deuxième nombre : \n'))

    if( b ==  0) {
        alert('je ne peux diviser par 0 \n \nRafraichir la page')
    } else {
        c = a / b;
        if (isNaN(c)) {
            alert('je ne peux pas effectuer d\'opération si je n\'ai pas deux nombres, rafraichis la page')
        } else {
            alert('Le résultat est : ' + c);
        }
        return c;
    }
}

// choix de l'opération 
do {
    choix = parseInt(prompt('Fais ton choix (sélectionne l\'opération en tapant sa valeur):\n\n 1 - Addition\n 2 - soustraction\n 3 - multiplication \n 4 - division'));
} while (choix > 4 || isNaN(choix)) 

// comportement en fonction du choix + obligation de choisir nombre 
switch(choix) {
    case 1:
        addition();
    break;
    case 2:
        soustraction();
    break;
    case 3:
        multiplication();
    break;
    case 4: 
        division();
    break;
    default: 
        alert('erreur')
}