const Tarea = require("./tarea");

class Tareas {
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));
        
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => this._listado[tarea.id] = tarea);
    }

    creartarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, index) => {
            const idx = `${index + 1}. `.green;
            const { desc, completadoEn } = tarea;
            const estado = completadoEn
                ? 'Completado'.green
                : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${ estado }`);
        });
        console.log();
    }
}

module.exports = Tareas;