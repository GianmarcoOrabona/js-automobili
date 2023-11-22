/* 
Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel,
nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

// Creo l'array di 10 automobili
const cars = [
    { marca: 'Toyota', modello: 'Yaris', alimentazione: 'ibrida' },
    { marca: 'Tesla', modello: 'Model S', alimentazione: 'elettrica' },
    { marca: 'BMW', modello: 'X5', alimentazione: 'ibrida' },
    { marca: 'Ford', modello: 'Focus', alimentazione: 'benzina' },
    { marca: 'Audi', modello: 'A3', alimentazione: 'diesel' },
    { marca: 'Nissan', modello: 'Leaf', alimentazione: 'elettrica' },
    { marca: 'Hyundai', modello: 'Kona', alimentazione: 'elettrica' },
    { marca: 'Fiat', modello: '500', alimentazione: 'GPL' },
    { marca: 'Mercedes-Benz', modello: 'C-Class', alimentazione: 'diesel' },
    { marca: 'Chevrolet', modello: 'Camaro', alimentazione: 'benzina' },
];

// Creo degli array vuoti dove pushare le auto
let gasolineCars = [];
let dieselCars = [];
let otherCars = [];

// Con un ciclo forEach() scansiono tutte le auto e le loro relative alimentazioni
cars.forEach(function (car) {
    if (car.alimentazione == 'benzina') {
        gasolineCars.push(car);
    } else if (car.alimentazione == 'diesel') {
        dieselCars.push(car);
    } else {
        otherCars.push(car);
    }

});

// Stampo in console gli array creati

/* Macchine a benzina */
console.log('Macchine a benzina');
console.log(gasolineCars);

/* Macchine a diesel */
console.log('Macchine a diesel');
console.log(dieselCars);

/* Macchine con altra alimentazione */
console.log('Macchine con altra alimentazione');
console.log(otherCars);


// Stampo a schermo la lista delle automobili

// Invoco la funzione per generare la tabella principale
carTableGenerator(cars);

// Invoco la funzione per generare le tabelle
carTableFiltered(gasolineCars, 'benzina');
carTableFiltered(dieselCars, 'diesel');
carTableFiltered(otherCars, 'altro');

/* ------------- FUNCTIONS ------------- */

function carTableGenerator(array) {
    // Mi creo un elemento <tr> da inserire dinamicamente nel DOM
    let tr = "";

    // Con un ciclo forEach() creo i <tr> che mi servono
    array.forEach(function (car, index) {
        tr += `
    <tr>
      <th scope="row">${index + 1}</th>
        <td>${car.marca}</td>
        <td>${car.modello}</td>
        <td>${car.alimentazione}</td>
    </tr>
    `;


    });

    // Creo una table dove inserire dinamicamente le auto
    let table = `
<table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Marca</th>
            <th scope="col">Modello</th>
            <th scope="col">Alimentazione</th>
        </tr>
    </thead>
    <tbody>
        ${tr}
    </tbody>
</table>
`;

    document.querySelector('.cars-container').innerHTML += table;
};

// Funzione che mi permette di generare una tabella in base al tipo di alimentazione
function carTableFiltered(array, type) {
    let tr = "";
    let h1 = "";
    array.forEach(function (car, index) {
        tr += `
        <div class="col-4">
        <tr>
          <th scope="row">${index + 1}</th>
            <td>${car.marca}</td>
            <td>${car.modello}</td>
            <td>${car.alimentazione}</td>
        </tr>
        </div>
        `;
    });
    if (type == 'altro') {
        h1 += `<h1 class="text-white mt-5 mb-3">Altre Auto</h1>`
    } else {
        h1 += `<h1 class="text-white mt-5 mb-3">Auto a ${type}</h1>`
    }
    let table = `
    <div class="col-4">
        ${h1}
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modello</th>
                    <th scope="col">Alimentazione</th>
                </tr>
            </thead>
            <tbody>
                ${tr}
            </tbody>
        </table>
    </div>
    `;

    document.querySelector('.cars-filter').innerHTML += table;
};