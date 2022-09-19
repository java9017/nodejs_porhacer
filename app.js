require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        // inquirerMenu: Impresion del menu en consola.
        opt = await inquirerMenu();

        switch (opt) {
            case '1': 
                // Crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.creartarea(desc);
                break;
            case '2':
               tareas.listadoCompleto();
                break;
        }        

        guardarDB( tareas.listadoArr );
        await pausa();
    } while (opt !== '0');
};

main();