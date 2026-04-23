// importo il modulo readline per gestire input da tastiera
const readline = require('readline'); // serve per leggere dati da terminale

// creo interfaccia di input/output
const rl = readline.createInterface({
    input: process.stdin, // input da tastiera
    output: process.stdout // output su terminale
});


// funzione calcolatrice che esegue operazioni matematiche
function calcolatrice(num1, operazione, num2) { // prende due numeri e un'operazione

    if (isNaN(num1) || isNaN(num2)) { // controllo numeri validi
        return "Errore: numeri non validi";
    }

    let risultato; // variabile risultato

    if (operazione === "+") {
        risultato = num1 + num2; // somma
    }
    else if (operazione === "-") {
        risultato = num1 - num2; // sottrazione
    }
    else if (operazione === "*") {
        risultato = num1 * num2; // moltiplicazione
    }
    else if (operazione === "/") {
        if (num2 === 0) return "Errore: divisione per zero"; // controllo errore
        risultato = num1 / num2; // divisione
    }
    else if (operazione === "**") {
        risultato = num1 ** num2; // potenza
    }
    else {
        return "Errore: operazione non valida"; // operazione non riconosciuta
    }

    return risultato; // restituisce risultato finale
}


// input guidato da tastiera
rl.question("Inserisci il primo numero: ", function(n1) { // chiede primo numero

    rl.question("Inserisci operazione (+, -, *, /, **): ", function(op) { // chiede operazione

        rl.question("Inserisci secondo numero: ", function(n2) { // chiede secondo numero

            const num1 = parseFloat(n1); // conversione input
            const num2 = parseFloat(n2);

            console.log("Risultato:", calcolatrice(num1, op, num2)); // stampa risultato

            rl.close(); // chiude programma
        });

    });

});
