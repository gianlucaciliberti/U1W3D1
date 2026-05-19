/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
    {
        id: 1,
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 28,
        attivo: true,
        città: 'Milano',
    },
    {
        id: 2,
        nome: 'Anna',
        cognome: 'Bianchi',
        eta: 35,
        attivo: false,
        città: 'Roma',
    },
    {
        id: 3,
        nome: 'Luca',
        cognome: 'Verdi',
        eta: 22,
        attivo: true,
        città: 'Milano',
    },
    {
        id: 4,
        nome: 'Sara',
        cognome: 'Neri',
        eta: 17,
        attivo: true,
        città: 'Torino',
    },
    {
        id: 5,
        nome: 'Marco',
        cognome: 'Gialli',
        eta: 45,
        attivo: false,
        città: 'Roma',
    },
    {
        id: 6,
        nome: 'Chiara',
        cognome: 'Rosa',
        eta: 30,
        attivo: true,
        città: 'Milano',
    },
];

/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
     function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 1-------')
const quadrato = n => n * n;
console.log(quadrato(5));

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nome, cognome, eta, città).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 2-------')
const persona = utenti.map(({nome, cognome, eta}) => ({
    nome, cognome, eta
}));
persona.forEach((user) => {
    const { nome, cognome, eta } = user;
    console.log(nome, cognome, eta);
});

/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 3-------')
const riepilogo = ({ nome, cognome, eta }) =>
    `${nome} ${cognome} (${eta} anni)`;

console.log(riepilogo(utenti[0]));
console.log(riepilogo(utenti[1]));
console.log(riepilogo(utenti[2]));

/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 4-------')
const numeri = [1, 2, 3];
const copyNumber = [...numeri];

copyNumber.push(99);
console.log(numeri);
console.log(copyNumber);

/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 5-------')
frutti = ['mela', 'banana'];
verdure = ['carota', 'spinaci'];

cibo = [...frutti, ...verdure]
console.log(cibo);

/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 6-------')
const prodotto = {
    nome: 'Cuffie',
    prezzo: 79.99
};
myProdotto = { ...prodotto, disponibile: true };
console.log(myProdotto);

/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 7-------')
utenti.forEach(utente => {
    console.log(`- ${utente.nome} ${utente.cognome} (${utente.città})`)
});


/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 8-------')
const nomiCompleti = utenti.map(
    utente => `${utente.nome} ${utente.cognome}`
);

console.log(nomiCompleti)

/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 9-------')
const utentiPlus = utenti.map(
    utente => ({ ...utente, descrizione: `${utente.nome} ${utente.cognome}, ${utente.città}` }

    ),
)
console.log(utentiPlus)
/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 10-------')
const attivo = utenti.filter(utente => utente.attivo);
console.log(attivo)

/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 11-------')
const majorMilan = utenti
    .filter(utente => utente.eta >= 18)
    .filter(utente => utente.città === 'Milano')
console.log(majorMilan)
/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 12-------')
const finded = utenti.find((utente) => utente.id === 4);
console.log(finded);

/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 13a-------')
const sommaEta = utenti.reduce((acc, utente) => acc + utente.eta, 0);
console.log(sommaEta);
const etaMedia = sommaEta / utenti.length;
console.log(etaMedia)
console.log('--------ESERCIZIO 13b-------')

/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('--------ESERCIZIO 14a-------')
const sortedEta = utenti
    .sort((a, b) => a.eta - b.eta)
    .map ((utente) => utente.nome)
console.log(sortedEta)
console.log('--------ESERCIZIO 14b-------')
const sortedName = utenti
    .sort ((a, b) => {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return true;
    })
    .map ((utente) =>utente.nome);

console.log(sortedName)

//Modo alternativo
const sortedName2 = utenti.map((utente) => utente.nome) .sort();
console.log(sortedName2);

/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('---------ESERCIZIO 15---------')
const chain = utenti
    .filter(utente => utente.attivo === true)
    .map(utente => `${utente.nome} ${utente.cognome}`)
    .sort()
console.log(chain)