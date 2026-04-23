// funzione che esegue un'operazione matematica tra due numeri
function calcolatrice(num1, operazione, num2) { // prende due numeri e una stringa operazione

    if (isNaN(num1) || isNaN(num2)) {
        return "Errore: numeri non validi"; // controlla se i valori inseriti sono numeri
    }

    let risultato;

    if (operazione === "+") {
        risultato = num1 + num2; // esegue la somma
    }
    else if (operazione === "-") {
        risultato = num1 - num2; // esegue la sottrazione
    }
    else if (operazione === "*") {
        risultato = num1 * num2; // esegue la moltiplicazione
    }
    else if (operazione === "/") {
        if (num2 === 0) {
            return "Errore: divisione per zero"; // evita errore matematico
        }
        risultato = num1 / num2; // esegue la divisione
    }
    else if (operazione === "**") {
        risultato = num1 ** num2; // calcola la potenza
    }
    else {
        return "Errore: operazione non valida"; // operazione non riconosciuta
    }

    return risultato; // restituisce il risultato finale
}


// 🔽 INPUT da terminale (Node.js)
const num1 = parseFloat(process.argv[2]); // primo numero inserito da terminale
const operazione = process.argv[3]; // operazione inserita (+, -, *, /, **)
const num2 = parseFloat(process.argv[4]); // secondo numero inserito

// 🔽 OUTPUT
console.log("Risultato:", calcolatrice(num1, operazione, num2)); // stampa risultato
