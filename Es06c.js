// funzione che stampa il triangolo di Tartaglia perfettamente centrato
function triangoloTartaglia(n) { // n = numero di righe

    let triangolo = []; // struttura dati del triangolo

    for (let i = 0; i < n; i++) { // ciclo righe

        triangolo[i] = []; // inizializza riga

        for (let j = 0; j <= i; j++) { // costruzione valori

            if (j === 0 || j === i) {
                triangolo[i][j] = 1; // bordi sempre 1
            } else {
                triangolo[i][j] =
                    triangolo[i - 1][j - 1] + triangolo[i - 1][j]; // somma sopra
            }
        }

        // converto la riga in stringa con larghezza fissa per ogni numero
        let riga = triangolo[i]
            .map(num => String(num).padStart(3, " ")) // uniforma larghezza numeri
            .join(""); // unisce senza disallineamenti

        // calcolo spazi per centratura perfetta
        let padding = " ".repeat((n - i) * 2); // riduce progressivamente

        // stampa finale centrata e simmetrica
        console.log(padding + riga);
    }
}


// esempio
triangoloTartaglia(6);
