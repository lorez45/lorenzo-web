// Creiamo un oggetto che rappresenta un libro
const book = {
  titolo: "Il nome della rosa",
  autore: "Umberto Eco",
  annoPubblicazione: 1980,
  genere: "Romanzo storico",
  numeroPagine: 512
};

// Stampa un'intestazione descrittiva
console.log("📚 Dettagli del libro:\n");

// Utilizziamo il ciclo for...in per scorrere tutte le proprietà dell'oggetto
for (let key in book) {
  // stampiamo nome della chiave e valore associato
  console.log(`${key} -> ${book[key]}`);
}
