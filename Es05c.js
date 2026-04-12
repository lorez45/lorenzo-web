/**
 * ESERCITAZIONE 4 - JSON E SERIALIZZAZIONE
 */

console.log("=== ESERCITAZIONE 4: JSON E SERIALIZZAZIONE ===\n");

// ================= PARTE 1 =================

const libro = {
  titolo: "La Biblioteca di Mezzanotte", // proprietà base
  autore: "Matt Haig",
  anno: 1980,
  genere: "Giallo",
  pagine: 503,
  disponibile: true
};

// converte oggetto JS in stringa JSON
const libroJSON = JSON.stringify(libro);

const biblioteca = [
  { titolo: "Libro 1", autore: "Autore 1", anno: 2020 },
  { titolo: "Libro 2", autore: "Autore 2", anno: 2021 },
  { titolo: "Libro 3", autore: "Autore 3", anno: 2022 }
];

// stringify con indentazione per renderlo leggibile
const bibliotecaJSON = JSON.stringify(biblioteca, null, 2);

const libroCompleto = {
  titolo: "L'ombra del vento",
  autore: "Carlos Ruiz Zafón",
  anno: 1967,
  genere: "Realismo magico",
  pagine: 432,
  isbn: "978-0060883287",
  disponibile: true,
  dataAcquisto: "2024-01-15"
};

// converte solo alcune proprietà usando replacer (array)
const libroFiltrato = JSON.stringify(libroCompleto, ["titolo", "autore", "anno"]);

// ================= PARTE 2 =================

// parse: da JSON a oggetto JS
const libroRecuperato = JSON.parse('{"titolo":"Il Conte di Montecristo","autore":"Alexandre Dumas","anno":1605,"pagine":863,"disponibile":true}');

// parse array JSON
const libriArray = JSON.parse('[{"titolo":"Il Grande Gatsby","autore":"F. Scott Fitzgerald","anno":1813},{"titolo":"Dracula","autore":"Bram Stoker","anno":1851},{"titolo":"I Miserabili","autore":"Victor Hugo","anno":1869}]');

// stampa titoli con forEach
libriArray.forEach(libro => {
  console.log("Titolo:", libro.titolo);
});

// gestione errore parsing
try {
  JSON.parse('{"titolo":"Libro Rotto","autore":"Sconosciuto",}');
} catch (errore) {
  console.error("Errore di parsing JSON:", errore.message); // intercetta errore JSON
}

// ================= PARTE 3 =================

const utente = {
  nome: "Mario Rossi",
  email: "mario@example.com",
  password: "segreta123",
  ruolo: "admin"
};

// replacer: esclude password per sicurezza
function replacerSicuro(key, value) {
  if (key === "password") return undefined; // proprietà rimossa
  return value;
}

const utenteJSON = JSON.stringify(utente, replacerSicuro);

const prestito = {
  libro: "Norwegian Wood",
  utente: "Giulia Verdi",
  dataPrestito: new Date("2024-03-01"),
  dataScadenza: new Date("2024-03-15"),
  restituito: false
};

// Date vengono convertite automaticamente in stringhe
const prestitoJSON = JSON.stringify(prestito, null, 2);

// reviver: riconverte stringhe in Date
function reviverDate(key, value) {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value); // riconversione
  }
  return value;
}

const prestitoRecuperato = JSON.parse(prestitoJSON, reviverDate);

// ================= PARTE 4 =================

const bibliotecaOriginale = {
  nome: "Biblioteca Comunale",
  indirizzo: { via: "Via Roma 10", città: "Milano", cap: "20100" },
  libri: [
    { titolo: "Libro A", disponibile: true },
    { titolo: "Libro B", disponibile: false }
  ]
};

// deep clone usando JSON
const bibliotecaCopia = JSON.parse(JSON.stringify(bibliotecaOriginale));

bibliotecaCopia.indirizzo.città = "Roma"; // modifica copia
bibliotecaCopia.libri[0].disponibile = false;

// confronto oggetti tramite JSON
function oggettiUguali(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2); // confronto stringhe
}

// ================= PARTE 5 =================

// simulazione localStorage con closure
const storage = (function() {
  const dati = {}; // memoria privata
  
  return {
    setItem: function(chiave, valore) {
      dati[chiave] = String(valore); // salva sempre come stringa
    },
    
    getItem: function(chiave) {
      return dati.hasOwnProperty(chiave) ? dati[chiave] : null; // recupera valore
    },
    
    removeItem: function(chiave) {
      delete dati[chiave]; // elimina elemento
    },
    
    clear: function() {
      for (let key in dati) delete dati[key]; // svuota tutto
    },
    
    get length() {
      return Object.keys(dati).length; // numero elementi
    }
  };
})();

const mieiBibliLibri = [
  { titolo: "Libro A", autore: "Autore A" },
  { titolo: "Libro B", autore: "Autore B" }
];

// salvataggio e recupero da storage
storage.setItem("biblioteca", JSON.stringify(mieiBibliLibri));
const bibliotecaRecuperata = JSON.parse(storage.getItem("biblioteca"));

// helper per salvare oggetti
function salvaOggetto(chiave, oggetto) {
  storage.setItem(chiave, JSON.stringify(oggetto));
}

function recuperaOggetto(chiave) {
  try {
    const valore = storage.getItem(chiave);
    return valore ? JSON.parse(valore) : null; // parse sicuro
  } catch (errore) {
    console.error("Errore nel recupero:", errore.message);
    return null;
  }
}

function aggiungiALista(chiave, elemento) {
  const lista = recuperaOggetto(chiave) || []; // recupera o crea array
  lista.push(elemento);
  salvaOggetto(chiave, lista);
}

// ================= PARTE 6 =================

class BibliotecaPersistente {
  constructor(chiaveStorage = "biblioteca") {
    this.chiaveStorage = chiaveStorage;
    this.libri = [];
    this.carica(); // carica dati salvati
  }
  
  aggiungiLibro(libro) {
    this.libri.push(libro); // aggiunge libro
    this.salva(); // salva automaticamente
  }
  
  rimuoviLibro(titolo) {
    this.libri = this.libri.filter(l => l.titolo.toLowerCase() !== titolo.toLowerCase());
    this.salva();
  }
  
  cercaLibro(titolo) {
    return this.libri.find(l => l.titolo.toLowerCase() === titolo.toLowerCase()); // ricerca case-insensitive
  }
  
  salva() {
    storage.setItem(this.chiaveStorage, JSON.stringify(this.libri)); // salva JSON
  }
  
  carica() {
    try {
      const dati = storage.getItem(this.chiaveStorage);
      if (dati) this.libri = JSON.parse(dati);
    } catch (errore) {
      console.error("Errore caricamento:", errore.message);
      this.libri = [];
    }
  }
  
  esportaJSON() {
    return JSON.stringify(this.libri, null, 2); // JSON leggibile
  }
  
  importaJSON(jsonString) {
    try {
      this.libri = JSON.parse(jsonString);
      this.salva();
    } catch (errore) {
      console.error("Errore import:", errore.message);
    }
  }
  
  getStatistiche() {
    const autori = new Set(this.libri.map(l => l.autore));
    const generi = new Set(this.libri.map(l => l.genere));
    const totalePagine = this.libri.reduce((tot, l) => tot + (l.pagine || 0), 0);
    
    return {
      totaleLibri: this.libri.length,
      autoriUnici: autori.size,
      totalePagine: totalePagine,
      generiUnici: generi.size
    };
  }
}

console.log("\n=== FINE ESERCITAZIONE 4 ===");
