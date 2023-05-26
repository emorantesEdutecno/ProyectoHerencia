let frutas = ['pera', 'manzana', 'limon', 'banana', 'coco'];

function* genRecorrerArreglo(){
    let i=0;
    yield frutas[i];
    i++;
    yield frutas[i];
    i++;
    yield frutas[i];
    i++;
    yield frutas[i];
    i++;
    yield frutas[i];
    return 'terminado ...';
}

function instanciacion(){
    let gen1 = genRecorrerArreglo();
    console.log(gen1.next());
    console.log(gen1.next().value);
    console.log(gen1.next());
    console.log(gen1.next().value);
    console.log(gen1.next());
    console.log(gen1.next());

}


export{
    genRecorrerArreglo,
    instanciacion
};