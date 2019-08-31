const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: { 
            demand: true, 
            alias: 'd', 
            desc: 'Descripcion de la tarea por hacer' 
        }
    })
    .command('actualizar', 'Actualizar el estado completamente de una tarea', {
        descripcion: { 
            demand: true, 
            alias: 'd', 
            desc: 'Descripcion de la tarea por hacer' 
        },
        completado: { 
            demand: true,
            alias: 'c',  
            desc: 'Marca como completado o pendiente la tarea' 
        }
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion: { 
            demand: true, 
            alias: 'd', 
            desc: 'Descripcion de la tarea por hacer' 
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
