                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         es05c.js
// ===============================
// ESERCITAZIONE 4 - JSON E SERIALIZZAZIONE
// ===============================

console.log("=== ESERCITAZIONE 4: JSON E SERIALIZZAZIONE ===\n");


// ===============================
// PARTE 1 - SERIALIZZAZIONE
// ===============================

console.log("--- PARTE 1 ---");

// Oggetto libro
const libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
  genere: "Giallo",
  pagine: 503,
  disponibile: true
};

// JSON.stringify
const libroJSON = JSON.stringify(libro);
console.log("Libro JSON:", libroJSON);


// Array di libri
const biblioteca = [
  { titolo: "Libro 1", autore: "Autore 1", anno: 2020 },
  { titolo: "Libro 2", autore: "Autore 2", anno: 2021 },
  { titolo: "Libro 3", autore: "Autore 3", anno: 2022 }
];

// JSON formattato
const bibliotecaJSON = JSON.stringify(biblioteca, null, 2);
console.log("\nBiblioteca JSON:\n", bibliotecaJSON);


// Oggetto completo per filtraggio
const libroCompleto = {
  titolo: "Cent'anni di solitudine",
  autore: "Gabriel Garc  a M  rquez",
  anno: 1967,
  genere: "Realismo magico",
  pagine: 432,
  isbn: "978-0060883287",
  disponibile: true,
  dataAcquisto: "2024-01-15"
};

// Replacer (solo alcune propriet  )
const libroFiltrato = JSON.stringify(libroCompleto, ["titolo", "autore", "anno"]);
console.log("\nLibro filtrato:", libroFiltrato);


// ===============================
// PARTE 2 - DESERIALIZZAZIONE
// ===============================

console.log("\n--- PARTE 2 ---");

// JSON string
const jsonString = '{"titolo":"Don Chisciotte","autore":"Miguel de Cervantes","anno":1605,"pagine":863,"disponibile":true}';

// parse
const libroRecuperato = JSON.parse(jsonString);
console.log("\nLibro recuperato:", libroRecuperato);


// Array JSON
const arrayJSON = '[{"titolo":"Orgoglio e Pregiudizio","autore":"Jane Austen","anno":1813},{"titolo":"Moby Dick","autore":"Herman Melville","anno":1851},{"titolo":"Guerra e Pace","autore":"Lev Tolstoj","anno":1869}]';

const libriArray = JSON.parse(arrayJSON);

console.log("\nLibri:");
libriArray.forEach(libro => {
  console.log("-", libro.titolo);
});


// Error handling
const jsonNonValido = '{"titolo":"Libro Rotto","autore":"Sconosciuto",}';

try {
  JSON.parse(jsonNonValido);
} catch (errore) {
  console.log("\nErrore JSON:", errore.message);
}


// ===============================
// PARTE 3 - REPLACER & REVIVER
// ===============================

console.log("\n--- PARTE 3 ---");

// Utente
const utente = {
  nome: "Mario Rossi",
  email: "mario@example.com",
  password: "12345",
  ruolo: "admin"
};

// Replacer sicurezza
function replacerSicuro(key, value) {
  if (key === "password") return undefined;
  return value;
}

const utenteJSON = JSON.stringify(utente, replacerSicuro);
console.log("\nUtente JSON:", utenteJSON);


// Date
const prestito = {
  libro: "Il Piccolo Principe",
  utente: "Laura",
  dataPrestito: new Date("2024-03-01"),
  dataScadenza: new Date("2024-03-15"),
  restituito: false
};

const prestitoJSON = JSON.stringify(prestito);
console.log("\nPrestito JSON:", prestitoJSON);


// Reviver
function reviverDate(key, value) {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
}

const prestitoRecuperato = JSON.parse(prestitoJSON, reviverDate);
console.log("\nPrestito recuperato:", prestitoRecuperato);


// ===============================
// PARTE 4 - CLONAZIONE
// ===============================

console.log("\n--- PARTE 4 ---");

const bibliotecaOriginale = {
  nome: "Biblioteca",
  indirizzo: {
    via: "Via Roma",
    citt  : "Milano",
    cap: "20100"
  },
  libri: [
    { titolo: "A", disponibile: true },
    { titolo: "B", disponibile: false }
  ]
};

// deep clone
const bibliotecaCopia = JSON.parse(JSON.stringify(bibliotecaOriginale));

bibliotecaCopia.indirizzo.citt   = "Roma";
bibliotecaCopia.libri[0].disponibile = false;

console.log("Originale citt  :", bibliotecaOriginale.indirizzo.citt  );
console.log("Copia citt  :", bibliotecaCopia.indirizzo.citt  );


// confronto
function oggettiUguali(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log("\nConfronto:", oggettiUguali({ a: 1 }, { a: 1 }));


// ===============================
// PARTE 5 - STORAGE SIMULATO
// ===============================

console.log("\n--- PARTE 5 ---");

const storage = (function () {
  const dati = {};

  return {
    setItem: (k, v) => dati[k] = String(v),
    getItem: (k) => dati[k] || null,
    removeItem: (k) => delete dati[k],
    clear: () => Object.keys(dati).forEach(k => delete dati[k]),
    get length() { return Object.keys(dati).length; }
  };
})();

// salva oggetto
function salvaOggetto(k, obj) {
  storage.setItem(k, JSON.stringify(obj));
}

// recupera oggetto
function recuperaOggetto(k) {
  return JSON.parse(storage.getItem(k));
}

// test
salvaOggetto("utente", { nome: "Luca", eta: 20 });

console.log("\nStorage utente:", recuperaOggetto("utente"));


// lista
function aggiungiALista(k, el) {
  const lista = recuperaOggetto(k) || [];
  lista.push(el);
  salvaOggetto(k, lista);
}

aggiungiALista("preferiti", "Libro A");
aggiungiALista("preferiti", "Libro B");

console.log("Preferiti:", recuperaOggetto("preferiti"));


// ===============================
// PARTE 6 - CLASSE
// ===============================

console.log("\n--- PARTE 6 ---");

class BibliotecaPersistente {
  constructor() {
    this.libri = [];
  }

  aggiungiLibro(l) {
    this.libri.push(l);
  }

  getStatistiche() {
    return {
      totale: this.libri.length
    };
  }

  esportaJSON() {
    return JSON.stringify(this.libri, null, 2);
  }
}

// test
const b = new BibliotecaPersistente();

b.aggiungiLibro({ titolo: "1984" });
b.aggiungiLibro({ titolo: "Il Signore degli Anelli" });

console.log("\nLibri:", b.libri);
console.log("Statistiche:", b.getStatistiche());
console.log("\nJSON:\n", b.esportaJSON());


console.log("\n=== FINE ESERCITAZIONE ===");
