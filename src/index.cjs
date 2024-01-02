const fs = require("fs");

// EXECUCION

const dayStrings = {
  Mon: "Lunes",
  Tue: "Martes",
  Wed: "Miércoles",
  Thu: "Jueves",
  Fri: "Viernes",
  Sat: "Sábado",
  Sun: "Domingo",
};

const monthsStrings = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const currentDay = new Date().getDate();
const name_currentDay = new Date().toDateString().slice(0, 3);
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const currentDate = `<h3 align="center">Hoy es ${
  dayStrings[name_currentDay]
} ${currentDay} de ${monthsStrings[currentMonth + 1]} del ${currentYear}</h3>`;

(async () => {
  fs.readFile("./src/README.md.tpl", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo README.md:", err);
    } else {
      const newMarkdown = data.replace("%{{date}}%", currentDate);

      fs.writeFile("./README.md", newMarkdown, "utf8", (err) => {
        if (err) {
          console.error("Error al actualizar el archivo README.md:", err);
        } else {
          console.log("Sección actualizada en el archivo README.md.");
        }
      });
    }
  });
})();
