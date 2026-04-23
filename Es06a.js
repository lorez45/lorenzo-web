// funzione che esegue il calcolo tra due numeri
function calcolatrice(num1, operazione, num2) {

    // controllo se i numeri sono validi
    if (isNaN(num1) || isNaN(num2)) {
        return "Errore: numeri non validi"; // restituisce errore se non sono numeri
    }

    let risultato;

    // controllo dell'operazione richiesta
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
        if (num2 === 0) {
            return "Errore: divisione per zero"; // controllo divisione per zero
        }
        risultato = num1 / num2; // divisione
    }
    else if (operazione === "**") {
        risultato = num1 ** num2; // potenza
    }
    else {
        return "Errore: operazione non valida"; // errore se operazione non riconosciuta
    }

    return risultato; // restituisce il risultato finale
}


// esempio di utilizzo (simula input utente)
const n1 = 5;
const op = "+";
const n2 = 3;

console.log("Risultato:", calcolatrice(n1, op, n2)); // stampa risultato
