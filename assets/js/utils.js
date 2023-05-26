function doblar(x){
    return 2*x;
}

const nombre= 'Elfar';

function saludar(){
    return `Hola, me llamo ${nombre}`;
}

function noExportada(){
    console.log('No voy a ser exportada');
}

export{
    doblar,
    nombre,
    saludar
};