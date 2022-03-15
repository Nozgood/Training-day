let a = 0;
let b = 0;
let c = 0;


function calculator() {
    let whichOpe = Number = prompt('Veuillez selectionner votre opération : 1 - Addition 2 - soustraction 3 - multiplication 4 - division')

    if (whichOpe = 1) {
        a = prompt('indiquez le premier nombre');
        b = prompt('indiquez le deuxieme nombre');
        c = a + b;

        alert('voici le résultat : ' + c);
    }
}

calculator();