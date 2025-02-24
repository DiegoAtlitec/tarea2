// Introducción a JavaScript
// Tarea 2 : 

let nota = 85; 


if (nota >= 90) {
    console.log(`Tu nota es ${nota}. ¡Excelente!`);
} else if (nota >= 75) {
    console.log(`Tu nota es ${nota}. ¡Bien!`);
} else if (nota >= 60) {
    console.log(`Tu nota es ${nota}. Suficiente.`);
} else {
    console.log(`Tu nota es ${nota}. No aprobaste.`);
}


let notasDePrueba = [45, 60, 75, 90, 100, 0];
console.log("\nResultados con diferentes notas:");

notasDePrueba.forEach(nota => {
    if (nota >= 90) {
        console.log(`Nota: ${nota} - ¡Excelente!`);
    } else if (nota >= 75) {
        console.log(`Nota: ${nota} - ¡Bien!`);
    } else if (nota >= 60) {
        console.log(`Nota: ${nota} - Suficiente.`);
    } else {
        console.log(`Nota: ${nota} - No aprobaste.`);
    }
});