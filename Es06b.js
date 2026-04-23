// importo readline per input da terminale
const readline = require('readline'); // gestione input utente

// creo interfaccia input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// funzione che inverte le cifre di un numero
function inverti_cifre(numero) { // prende un numero e lo trasforma

    let stringa = numero.toString(); // converte numero in stringa

    let invertito = stringa.split("").reverse().join(""); 
    // split → divide in cifre
    // reverse → inverte ordine
    // join → ricompone stringa

    return parseInt(invertito); // ritorna numero invertito
}


// input utente
rl.question("Inserisci un numero intero: ", function(num) { // chiede numero

    const numero = parseInt(num); // converte input

    console.log("Numero invertito:", inverti_cifre(numero)); // stampa risultato

    rl.close(); // chiude programma
});
