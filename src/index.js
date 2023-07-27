import {promise as fs} from 'fs'

const pregraduate_current =  [
  "Algoritmos y Estructuras de Datos", "Cloud Computing", "Perú Temas de la Sociedad Contemporánea",
   "Proy. Interdisciplinario 2", "Base de Datos I", "Métodos Numéricos", "Teoría de la Computación"
];

const age = 19;

(async () => {

  const template = await Promise.all([
    fs.readFile('./src/README.md.tpl', { encoding: 'utf-8' }),
  ])

  const list_courses = `<ul>\n${pregraduate_current.map(elem => `    <li>${elem}</li>`).join('\n')}\n</ul>`;

  const newMarkdown = template
    .replace('%{{courses}}%', list_courses)
    .replace('%{{age}}%', age)

  await fs.writeFile('./README.md', newMarkdown)
})()