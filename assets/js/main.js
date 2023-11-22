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