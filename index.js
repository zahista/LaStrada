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
let zprava = ahoj+" "+svete;


console.log(zprava);

// vytvoření funkce bez argumentů - prázdné kulaté závorky
function vypisCislo() {
    console.log(10);  // zde používáme předpřipravené funkce z prohlížeče
}


// a použití vytvoření funkce - tzv. volání
vypisCislo();


function sectiCisla(number1, number2)
{
    let vysledek = number1 + number2;
    console.log(vysledek);
}


sectiCisla(3, 5);
sectiCisla(30, 10);
sectiCisla(43, 43);




