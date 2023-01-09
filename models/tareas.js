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

    borrarTarea( id = '' ) {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach( tarea => this._listado[tarea.id] = tarea);
    }

    creartarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
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

    listarPendientesCompletadas( completadas = true ) {
        let contador = 0;
        this.listadoArr.forEach( tarea => {
            const { desc, completadoEn } = tarea;
            const estado = completadoEn
                ? 'Completado'.green
                : 'Pendiente'.red;

            // Mostrar completados
            if ( completadas ) {
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${ desc } :: ${ estado } [${ completadoEn.toString().green }]`);
                }
            // Mostrar pendientes
            } else {
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${(contador + '.').green} ${ desc } :: ${ estado }`);
                } 
            }
        });
    }

    toggleCompletadas( ids = []) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;