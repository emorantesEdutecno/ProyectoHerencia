import { doblar, nombre } from './utils.js';
import { Persona, Programador, FrontEnd, pruebaOrientadaAObjetos } from './scripts.js';
import { genRecorrerArreglo, instanciacion} from './lib.js';

console.log(doblar(5));
console.log(`El nombre importado es ${nombre}`);
console.log('____________________________________');
pruebaOrientadaAObjetos();
console.log('____________________________________');
const macarena = new Programador('Macarena Quijada', 2000, 'Inglés', 'Python');
console.log(macarena);
console.log(macarena.presumir());
console.log('____________________________________');
instanciacion();
console.log('____________________________________');