// import { v4 as uuidv4 } from 'uuid'; Not found
const {v4: uuidv4} = require('uuid');

class Tarea {
    constructor( desc ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea;