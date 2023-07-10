const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

const final_carrer = '2023-07-15';
const days_miss = final_carrer - new Date();

const pregraduate_courses =  [
  [ "ICC", ],
  [],
  [],
  ["Algoritmos y Estructuras de Datos", "Cloud Computing", "Perú Temas de la Sociedad Contemporánea",
   "Proy. Interdisciplinario 2", "Base de Datos I", "Métodos Numéricos", "Teoría de la Computación"]
];

let DATA = {
  age: 18,
  pregraduate_current: pregraduate_courses[3],
  miss_days:  Math.floor(days_miss / (1000 * 60 * 60 * 24))
};

/**
  * A - We open 'main.mustache'
  * B - We ask Mustache to render our file with the data
  * C - We create a README.md file with the generated output
  */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('../README.md', output);
  });
}

generateReadMe();