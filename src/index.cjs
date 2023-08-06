const fs = require('fs')

// MANUALLY UPDATER PER SEMESTER

const age = 19;

const pregraduate_current =  [
  "Algoritmos y Estructuras de Datos",
  "Cloud Computing", 
  "Perú Temas de la Sociedad Contemporánea",
  "Proy. Interdisciplinario 2",
  "Base de Datos I", 
  "Métodos Numéricos",
  "Teoría de la Computación"
];

const on_semester = {
  start: [15, 8],  end: [12, 12]
};



// EXECUCION

const dayStrings = {"Mon": "Lunes", "Tue": "Martes", "Wed": "Miércoles", "Thu": "Jueves", "Fri": "Viernes", "Sat": "Sábado", "Sun": "Domingo"}
const monthsStrings = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]

const currentDay = new Date().getDay();
const name_currentDay = new Date().toDateString().slice(0,3);
const currentMonth = new Date().getMonth();

const stringSemester = ((on_semester.start[0] <= currentDay && on_semester.end[0] >= currentDay) && 
                        (on_semester.start[1] <= currentMonth && on_semester.end[1] >= currentMonth))?
                        "En pleno ciclo":"En descanso";


(async () => {

  const template = await Promise.all([
    fs.readFile('./src/README.md.tpl')
  ])

  const list_courses = `<ul>\n${pregraduate_current.map(elem => `    <li>${elem}</li>`).join('\n')}\n</ul>`;
  const currentDate = `<h3 align="center">${dayStrings[name_currentDay]} ${currentDay} de ${monthsStrings[currentMonth-1]}</h3>`;
  const in_semester = `<h3 align="center"><em>${stringSemester}</em></h3>`;

  const newMarkdown = template
    .replace('%{{courses}}%', list_courses)
    .replace('%{{age}}%', age)
    .replace("%{{date}}%", currentDate)
    .replace("%{{semester}}%", in_semester)

  await fs.writeFile('./README.md', newMarkdown);
})()