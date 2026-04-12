/** 
 * ESERCITAZIONE 1 - LIVELLO BASE
 * Gestione di una Biblioteca di Libri
 */

console.log("=== ESERCITAZIONE 1: BIBLIOTECA DI LIBRI ===\n");

// ============================================================================
// PARTE 1: Creazione di Oggetti Libro
// ============================================================================

const libro1 = {
  titolo: "Dune", 
  autore: "Frank Herbert", 
  anno: 1965, 
  genere: "Fantascienza", 
  pagine: 688, 
  disponibile: true 
};

const libro2 = {
  titolo: "Il Codice Da Vinci",
  autore: "Dan Brown",
  anno: 2003,
  genere: "Thriller",
  pagine: 454,
  disponibile: false // inizialmente non disponibile
};

// ============================================================================
// PARTE 2: Accesso e Modifica delle Proprietà
// ============================================================================

// stampa titolo e autore usando la notazione punto
console.log(`Titolo: ${libro1.titolo} - Autore: ${libro1.autore}`);

// modifica la disponibilità del libro2 (restituito)
libro2.disponibile = true;

// aggiunge una nuova proprietà (isbn) a libro1
libro1.isbn = "978-0441013593";

// ============================================================================
// PARTE 3: Metodi degli Oggetti
// ============================================================================

const libro3 = {
  titolo: "La ragazza del treno",
  autore: "Paula Hawkins",
  anno: 2015,
  pagine: 306,
  disponibile: true,
  
  // restituisce una stringa con le info principali del libro
  getInfo: function() {
    return `${this.titolo} di ${this.autore} (${this.anno})`;
  },
  
  // gestisce il prestito del libro
  presta: function() {
    if (this.disponibile) {
      this.disponibile = false; // il libro non è più disponibile
      console.log(`Libro prestato: ${this.titolo}`);
    } else {
      console.log("Libro non disponibile"); // già prestato
    }
  },
  
  // gestisce la restituzione del libro
  restituisci: function() {
    this.disponibile = true; // torna disponibile
    console.log(`Libro restituito: ${this.titolo}`);
  }
};

// ============================================================================
// PARTE 4: Array di Oggetti
// ============================================================================

// array che contiene tutti i libri
const biblioteca = [libro1, libro2, libro3];

// funzione che filtra i libri per autore usando filter()
function cercaPerAutore(libri, autore) {
  return libri.filter(libro => libro.autore === autore);
}

// funzione che restituisce solo i libri disponibili
function libriDisponibili(libri) {
  return libri.filter(libro => libro.disponibile);
}

// stampa tutte le informazioni dei libri in formato leggibile
function stampaBiblioteca(libri) {
  libri.forEach(libro => { // ciclo su ogni libro
    console.log(`Titolo: ${libro.titolo}`);
    console.log(`Autore: ${libro.autore}`);
    console.log(`Anno: ${libro.anno}`);
    console.log(`Disponibile: ${libro.disponibile ? "Sì" : "No"}`); // operatore ternario
    console.log("---");
  });
}

// ============================================================================
// PARTE 5: Statistiche
// ============================================================================

// calcola statistiche generali della biblioteca
function statisticheBiblioteca(libri) {
  const totaleLibri = libri.length; // numero totale di libri

  const libriDisponibili = libri.filter(l => l.disponibile).length; // conta disponibili

  // somma totale delle pagine usando reduce()
  const totalePagine = libri.reduce((somma, libro) => somma + libro.pagine, 0);

  // media delle pagine arrotondata
  const mediaPagine = Math.round(totalePagine / totaleLibri);

  // lista autori senza duplicati usando Set
  const autori = [...new Set(libri.map(libro => libro.autore))];

  return {
    totaleLibri,
    libriDisponibili,
    totalePagine,
    mediaPagine,
    autori
  };
}

console.log("\n=== FINE ESERCITAZIONE 1 ===");
