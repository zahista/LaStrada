console.log('Ahoj světe z JavaScriptu');

let name = "Tomáš";

let pravda = true;

let lez = false;

let seznamJmen = ["Martin", "Tomáš", "Nikol"];

let seznamCisel = [1, 2, 3, 4, 5, 6];

let seznamBooleanu = [true, false, false, true, true, false];


let spatnySeznam = ["Martin", false, 34, true, "Nikol", true];


[
    [
        "tomáš",
        "Martin"
    ],
    [
        1,
        2,
        3
    ],
    [
        "Honza",
        false
    ]
];


let Person = {
    name: "Tomáš",
    surname: "Novák",
    age: 30,
    collegues: [{}, {}],

    company: {
        CEO: "Jindra Fremuth"

    }
}

console.log(Person.company.CEO);

let cisloJedna = 10;
let cisloDve = 10;

// Výpočet se nikam neuložil
cisloJedna + cisloDve;

// nyní ano
let noveCislo = cisloJedna * cisloDve;

console.log(noveCislo);


let ahoj = "Ahoj";
let svete = "světe!";

// dokonce můžeme přidávat i věci, které nemáme v proměnných
// pokud jsou stejného datového typu
let zprava = ahoj + " " + svete;


console.log(zprava);

// vytvoření funkce bez argumentů - prázdné kulaté závorky
function vypisCislo() {
    console.log(10);  // zde používáme předpřipravené funkce z prohlížeče
}


// a použití vytvoření funkce - tzv. volání
vypisCislo();


function sectiCisla(number1, number2) {
    let vysledek = number1 + number2;
    console.log(vysledek);
}


sectiCisla(3, 5);
sectiCisla(30, 10);
sectiCisla(43, 43);

function pozdrav(name) {
    console.log('Ahoj ' + name);
}

pozdrav('Martine');
pozdrav('Eliško');




function poradi(p) {
    // do swithce dáme hodnotu, kterou jde snadno porovnat
    switch (p) {
        case 1: // toto vlastně znamená: p === 1 ?
            console.log('První místo!');
            break;
        case 2:
            console.log('Druhé místo!');
            break;
        case 3:
            console.log('Třetí místo!');
            break;
        case 4: // case si můžete představit jako elseif
            console.log('Bramborová medaile!');
            break;
        default: // default jako else
            console.log('Děkujeme za účast :)');
    }
}


function jeCisloVIntervalu(a) {
    // obě podmínky musí platit současně - logické A
    if (a > 5 && a < 50) {
        console.log("Ano, číslo náleží do intervalu (5, 50)");
    }
}

function jeCisloMensiNezPetNeboSude(a) {
    // zde používáme matematickou operaci modulo (%)
    // neboli zbytek po dělení

    // musí platit alespoň jedna podmínka - logické NEBO
    if (a < 5 || a % 2 === 0) {
        console.log("Ano!");
    }
}


function provedPetkratFor() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Iterace číslo ${i}!`);
    }
}

provedPetkratFor();

function provedPetkratWhile() {
    let i = 0;

    while (i < 5) {
        console.log("Iterace číslo " + i + "!")
        i++;
    }
}

provedPetkratWhile();


function projdiPole() {
    // proměnné i konstanty můžeme definovat uvnitř funkcí
    const pole = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // všiměte si, že pole si pamatuje, kolik má v sobě prvků
    for (let i = 0; i < pole.length; i++) {
        if (pole[i] < 6) {
            // k prvkům pole přistupujeme takto: pole[pozice-v-poli]
            console.log(pole[i]);
        } else {
            // cyklus ukončíme dříve než bude porušeno i < pole.length
            break;
        }
    }
}


projdiPole();


let pole = [1, 2, 3, 4, 5];

let poleJmen = ["Tomáš", "Eliška", "Martin"];

console.log(poleJmen.length);

console.log(poleJmen[2]);

// procházení pole pomocí forEach metody
pole.forEach((prvek) => {
    console.log(prvek); // postupně vypíše 1, 2, ..., 9
});





poleJmen.forEach((jmeno) => {
    console.log("Ahoj " + jmeno);
})


// nalezený elementy/elementy můžeme uložit do proměnné/konstanty pro snadnější práci
const poznamkaPodCarou = document.getElementById('poznamka-pod-carou');

console.log(poznamkaPodCarou);

// skryjeme poznámku přepsáním CSS
poznamkaPodCarou.style.display = 'none';


const hlavniObsah = document.getElementsByTagName('main')[0];

// vytvářet nové elementy můžeme pomocí této metody - jako argument
// předáme jméno tagu, který chceme vyrobit
const element = document.createElement('p');

// následně pomocí předpřipravených vlastností můžeme nastavit, co je
// potřeba - zde přidáváme třídu
element.classList.add('poznamka');
// a zde textový obsah
element.textContent = "Poznámka pod čarou.";

// a nakonec nový element připojíme k hlavnímu obsahu
hlavniObsah.append(element);


// u formulářů budeme používat hranaté závorky, do kterých vepíšeme
// jméno formuláře a následně prvku
const formular = document.forms['prihlaseni'];

const email = document.forms['prihlaseni']['email'];
const heslo = document.forms['prihlaseni']['heslo'];


const otevrit = document.getElementById('otevrit');
const zavrit = document.getElementById('zavrit');
const dialog = document.getElementById('dialog');

// přidáme posluchače na kliknutí - v callbacku otevřeme dialog
otevrit.addEventListener('click', () => {
   dialog.showModal();
});

// zde v callbacku zavřeme dialog
zavrit.addEventListener('click', () => {
    dialog.close();
});