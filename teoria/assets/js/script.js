const traditionalCode = document.querySelector('#traditionalCode');
const traditionalResult = document.querySelector('#traditionalResult');
const arrowCode = document.querySelector('#arrowCode');
const arrowResult = document.querySelector('#arrowResult');

//Expression function tradizionale
const traditionalSum = function (a, b) {
    return a + b;
}

//Arrow function
const arrowSum = (a, b) => (arrowResult.textContent = a + b); //return implicito, senza graffe, quando il corpo della function è una sola operazione

traditionalCode.innerHTML = '<code> const traditionalSum = function (a,b) {return a + b;}<code>';

traditionalResult.textContent = traditionalSum(8, 5);

arrowCode.innerHTML = '<code>const arrowSum = (a,b) => {return a + b;} <code>'

arrowSum(8, 5);

//this contestuale

const utente = {
    nome: 'Pippo',
    saluta: function () {
        console.log(`Ciao, ${this.nome}`);
    }
};

utente.saluta();

const developer = function (language) {
    console.log(`Sono ${this.name}, sviluppatore ${this.language}`);
};

const newDeveloper = {
    name: 'Mario',
    language: 'JavaScript',
};

developer.call(newDeveloper);

this.name = 'Pippo';
this.language = 'PHP';
developer(this.name, this.language);

//this lessicale : arrow function, eredita il valore dal punto in cui è chiamata e da come è chiamata la funzione
const myCar = {
    brand: 'Fiat',
    model: '500',
    obtainDescription: function () {
        const describeCar = () => {
            return `Auto: ${this.brand} ${this.model}`;
        };
        return describeCar();
    },
};

console.log(myCar.obtainDescription());

function container() {
    const myArrow = () => {
        console.log(`Eredito il this dall'invocazione della funzione: ${this}`);
    };
    myArrow();
}
container.call('Antonio');
container.call('Giovanna');

const counter = {
    seconds: 10,
    start: function () {
        const myCounter = setInterval(() => {
            console.log(this.seconds);
            this.seconds--;
            if (this.seconds === 8) {
                setTimeout(() => {
                    console.log('STOP!');
                    clearInterval(myCounter);
                }, 1000);
            }
        }, 1000);
    },
};

counter.start();

/*class Counter {
    constructor(seconds) {
        this.seconds=seconds;
    }
    start() {
        const myCounter = setInterval (() => {
                this.seconds--;
                console.log(this.seconds);
                if (this.seconds===0) {
                    console.log ('STOP!');
                    clearInterval(myCounter)
            } 
        }, 1000);
    };
};
const newCounter = new Counter (15);
console.log(newCounter.start);*/


//destructuring
const notObject = document.querySelector('#notObject');
const yesArray = document.querySelector('#yesArray');
const yesObject = document.querySelector('#yesObject');
const modernObject = document.querySelector('#modernObject')

const namesArray = ['Pippo', 'Pluto', 'Paperino']
const student = {
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
};

const record = {
    title: 'The dark side of the moon',
    author: 'Pink Floyd',
    year: 1973,
};

notObject.textContent = student;
yesArray.textContent = namesArray;
yesObject.textContent = `${student.name}, ${student.surname}, ${student.age}`;

const { name, surname, age } = student;
modernObject.textContent = `${name}, ${surname}, ${age}`;

let { title, author, year } = record;
((title = 'a saucerful of secrets'), (author = 'Pink Floyd'), (year = 1968));//Modifica le variabili senza toccare l'oggetto originario

console.log(record);
anotherObject.textContent = `${title}, ${author}, ${year}`;

if (author === 'Pink Floyd') {
    record.author = author;
    record.title = title;
    record.year = year;
} else {
    console.error('Autore non corrispondente');
}
console.log(record);

// SPREAD E REST
/*const myNameArray = ['Pippo', 'Pluto', 'Paperino'];
const copyNames=myNameArray
console.log(myNameArray,copyNames);

copyNames[1]='Paperone'; //in questo modo cambiano entrambi gli array
console.log(myNameArray,copyNames);*/

const myNameArray = ['Pippo', 'Pluto', 'Paperino'];
const copyNames = [...myNameArray];
console.log(myNameArray, copyNames);

copyNames[1] = 'Paperone';
console.log(myNameArray, copyNames);

const firstNumberArray = [1, 2, 3, 4];
const secondNumberArray = [5, 6, 7, 8];

const concatArray = [...firstNumberArray, ...secondNumberArray];
console.log(concatArray);

const firstPerson = {
    firstName: 'Mario',
    address: {
        via: 'Roma',
        citta: 'Napoli',
    },
};

const otherAddress = { ...firstPerson.address }; //Lo spread copia solo il primo livello

const otherPerson = { ...firstPerson };//destrutturazione completa dei nidi dell'oggetto

otherPerson.address = { ...otherAddress };//creiamo due classi destrutturate per modificare solo la copia dell'oggetto interno

otherPerson.address.citta = 'Milano'//Così facendo cambio solo la città dell'oggetto spread

console.log(firstPerson);
console.log(otherPerson);

const mySum = (...values) => {
    let mytotal = 0;
    for (let i = 0; i < values.length; i++) {
        mytotal += values[i];
    }
    return mytotal;
}
console.log(`Somma con tre parametri: ${mySum(3, 4, 5)}`);
console.log(`Somma con due parametri: ${mySum(8, 9)}`);
console.log(`Somma con quattro parametri: ${mySum(12, 23, 45, 10)}`);

//Metodi array ES6+
const forEach = document.querySelector('#forEach');

namesArray.forEach((name) => {
    forEach.innerHTML += `${name} studente frequentante <br />`;
});
console.log(namesArray)

const multiply = firstNumberArray.map((number) => {
    return number * 2;
});
console.log(firstNumberArray);
console.log(multiply); // .map si usa per creare copie separate

const users = [
    {
        userName: 'Stefano',
        age: 25,
    },
    {
        userName: 'Anna',
        age: 22,
    },
    {
        userName: 'Paolo',
        age: 28
    }
];

console.log(users.includes('Mario'));
const finded = users.find((user) => user.userName === 'Mario');
console.log(finded);

const genericNumbers = [
    2, 5, 17, 23, 45, 12
]
const total = genericNumbers.reduce((acc, number) => acc + number, 0);
console.log(total);

console.log(genericNumbers[3]);
console.log(genericNumbers.sort());
console.log(genericNumbers);
console.log(genericNumbers[3]);

console.log(genericNumbers.reverse());
const correctedSort = genericNumbers.sort((a, b) => a - b);
console.log(correctedSort);

const majorAge = [
    {
        userName: 'Mario',
        age: 21,
    },
    {
        userName: 'Toni',
        age: 25,
    },
    {
        userName: 'Paolo',
        age: 22,
    },
    {
        userName: 'Luca',
        age: 2,
    },
    {
        userName: 'Maria',
        age: 27,
    },
    {
        userName: 'Marina',
        age: 16,
    },
];

const maggiorenni = majorAge
.filter(user => user.age>=18)
.map ((user) => user.userName)
.sort();
console.log(maggiorenni);
