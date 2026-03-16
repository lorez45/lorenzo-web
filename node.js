const num1 = Number(process.argv[2]); // legge il primo numero dalla linea di comando e lo converte in numero
const operation = process.argv[3]; // legge l'operazione da eseguire (add, sub, mul, div)
const num2 = Number(process.argv[4]); // legge il secondo numero e lo converte in numero

let result; // variabile che conterrà il risultato del calcolo

if(operation === "add"){ // controlla se l'operazione richiesta è una somma
    result = num1 + num2; // esegue la somma tra i due numeri
}
else if(operation === "sub"){ // controlla se l'operazione richiesta è una sottrazione
    result = num1 - num2; // esegue la sottrazione tra i due numeri
}
else if(operation === "mul"){ // controlla se l'operazione richiesta è una moltiplicazione
    result = num1 * num2; // esegue la moltiplicazione
}
else if(operation === "div"){ // controlla se l'operazione richiesta è una divisione
    result = num1 / num2; // esegue la divisione tra i due numeri
}
else{ // se l'operazione inserita non è tra quelle previste
    console.log("Operazione non valida"); // stampa un messaggio di errore
    process.exit(); // termina l'esecuzione del programma
}

console.log("Risultato:", result); // stampa il risultato finale nella console
