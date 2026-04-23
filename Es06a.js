// funzione che esegue il calcolo
function calcolatrice(num1, operazione, num2) { // prende due numeri e un'operazione

    if (isNaN(num1) || isNaN(num2)) {
        return "Errore: numeri non validi"; // controlla se i valori sono numeri
    }

    let risultato;

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
            return "Errore: divisione per zero"; // controllo errore
        }
        risultato = num1 / num2; // divisione
    }
    else if (operazione === "**") {
        risultato = num1 ** num2; // potenza
    }
    else {
        return "Errore: operazione non valida"; // errore operazione
    }

    return risultato; // restituisce il risultato
}


// 🔽 INPUT UTENTE
let n1 = parseFloat(prompt("Inserisci il primo numero:")); // chiede il primo numero
let op = prompt("Inserisci operazione (+, -, *, /, **):"); // chiede operazione
let n2 = parseFloat(prompt("Inserisci il secondo numero:")); // chiede secondo numero

// OUTPUT
console.log("Risultato:", calcolatrice(n1, op, n2)); // stampa risultato
