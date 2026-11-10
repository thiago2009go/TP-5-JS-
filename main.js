
// ACTIVIDAD 5 - PRE-ENTREGA 5: INSTANCIANDO OBJETOS


// 1. DEFINICION DE LA CLASE 


class Estudiante {
    constructor(id, nombre, nota1, nota2) {
        this.id = id;
        this.nombre = nombre;
        this.nota1 = Number(nota1);
        this.nota2 = Number(nota2);
        this.promedio = 0;
        this.aprobado = false;
    }

    // Metodo de instancia: realiza el calculo y modifica el estado del objeto.
    calcularPromedio() {
        this.promedio = (this.nota1 + this.nota2) / 2;
        this.aprobado = this.promedio >= 7;
        return this.promedio;
    }

    // Metodo de instancia: actualiza notas e informa el nuevo estado.
    actualizarNotas(nuevaNota1, nuevaNota2) {
        this.nota1 = Number(nuevaNota1);
        this.nota2 = Number(nuevaNota2);
        this.calcularPromedio();
        console.log(`Notas actualizadas para ${this.nombre}: Nota 1 = ${this.nota1}, Nota 2 = ${this.nota2}`);
    }
}


// 2. INSTANCIACION DE OBJETOS

// Creacion d 3 instancias usando 'new' en constantes.
const estudiante1 = new Estudiante(1, "Ana", 8, 9);
const estudiante2 = new Estudiante(2, "Juan", 6, 7);
const estudiante3 = new Estudiante(3, "Sofía", 4, 5);

// Calculamos sus promedios iniciales
estudiante1.calcularPromedio();
estudiante2.calcularPromedio();
estudiante3.calcularPromedio();

// Array de objetos para la continuidad de la logica del simulador.
const listaEstudiantes = [estudiante1, estudiante2, estudiante3];

// 3. FUNCIONES DEL SIMULADOR


function pedirNombre(mensaje) {
    return prompt(mensaje);
}

function aprobo(promedio) {
    return promedio >= 7;
}

// Muestra en consola la lista completa utilizando for...of[cite: 6].
function listarEstudiantes(lista) {
    console.log("===== LISTA FINAL DE ESTUDIANTES =====");
    for (const est of lista) {
        console.log(`ID: ${est.id} | Nombre: ${est.nombre} | Promedio: ${est.promedio} | Estado: ${est.aprobado ? "Aprobado" : "No Aprobado"}`);
    }
    console.log("Cantidad total de estudiantes: " + lista.length);
}



// 4. EJECUCIÓN Y INTERACCIÓN INTERACTIVA

console.log("===== SIMULADOR DE NOTAS INTERACTIVO =====");

// Verificación inicial de instancias en consola[cite: 3].
console.log("Instancias de estudiantes cargadas:");
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);

// Agregar estudiante de forma interactiva (creando una nueva instancia de Class)[cite: 1, 3]
const agregar = pedirNombre("Quiere agregar un estudiante al simulador? (Ingresa el nombre o cancela):");

if (agregar !== null && agregar.trim() !== "") {
    const nombreNuevo = agregar.trim();
    const n1Texto = prompt(`Ingresa la primera nota de ${nombreNuevo} (1-10):`);
    const n2Texto = prompt(`Ingresa la segunda nota de ${nombreNuevo} (1-10):`);
    
    const n1 = Number(n1Texto);
    const n2 = Number(n2Texto);

    if (!isNaN(n1) && !isNaN(n2) && n1 >= 1 && n1 <= 10 && n2 >= 1 && n2 <= 10) {
        // Instanciamos con new[cite: 1, 3]
        const nuevoEstudiante = new Estudiante(listaEstudiantes.length + 1, nombreNuevo, n1, n2);
        nuevoEstudiante.calcularPromedio();
        listaEstudiantes.push(nuevoEstudiante);
        
        alert(`${nuevoEstudiante.nombre} fue agregado correctamente con un promedio de ${nuevoEstudiante.promedio}.`);
        console.log("Nuevo estudiante creado e instanciado:", nuevoEstudiante);
    } else {
        alert("Notas invalidas. Se cancelo el registro.");
    }
} else {
    alert("No se agrego ningun estudiante adicional.");
}

// Buscar y modificar notas de un estudiante existente
let nombreBusqueda = pedirNombre("De que estudiante queres consultar o actualizar notas?");

if (nombreBusqueda !== null && nombreBusqueda.trim() !== "") {
    nombreBusqueda = nombreBusqueda.trim().toLowerCase();
    
    // Busqueda dentro del array de objetos
    const encontrado = listaEstudiantes.find(e => e.nombre.toLowerCase() === nombreBusqueda);

    if (encontrado) {
        alert(`Estudiante encontrado: ${encontrado.nombre}\nNota 1: ${encontrado.nota1} | Nota 2: ${encontrado.nota2}\nPromedio: ${encontrado.promedio}`);
        
        const deseaModificar = confirm(`Queres recalcular o modificar las notas de ${encontrado.nombre}?`);
        if (deseaModificar) {
            const nuevaN1 = prompt("Ingresa la nueva nota 1:");
            const nuevaN2 = prompt("Ingresa la nueva nota 2:");
            
            // Invocacion del metodo de instancia[cite: 1, 3]
            encontrado.actualizarNotas(nuevaN1, nuevaN2);
            alert(`Notas actualizadas. El nuevo promedio de ${encontrado.nombre} es ${encontrado.promedio}.`);
        }
    } else {
        alert(`El estudiante "${nombreBusqueda}" no se encuentra registrado.`);
    }
}

// Demostracion extra del metodo de instancia en consola[cite: 3]
console.log("===== DEMOSTRACION DE METODOS DE INSTANCIA =====");
estudiante3.actualizarNotas(8, 8); // Modifica notas y recalcula promedio de Sofia

// Listado final en consola
listarEstudiantes(listaEstudiantes);