// A funcao require() importa módulos(funcoes ou abributos) que podem ser utilizadas no código
var os = require('os') //https://nodejs.org/api/os.html
var fs = require('fs'); //https://nodejs.org/api/fs.html
var path = require('path');

console.log('------ modulo: OS ------\n');

console.log('SO:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Hostname:', os.hostname() + '\n');

console.log('------ modulo: OS ------\n');

console.log('------ modulo: FS ------\n');

//renomear um arquivo
/* fs.rename('teste.js', 'teste_novo.js', (err) => {
    if(err) {
        console.log(err);
    }
}) */

/* fs.readFile('teste_novo.js', (err, data)=> {
    if(err) throw err;
    console.log(`Conteúdo do arquivo:\n ${data}`);
}) */

// Método síncrono, ou seja, espera terminar para depois para 
const data = fs.readFileSync('teste_novo.js').toString()
console.log(data);

console.log('------ modulo: FS ------\n');

console.log('------ modulo: PATH ------\n');

//console.log('Path', path.relative('modulo.js'));

console.log(fs.mkdirSync('inicio'));

console.log('------ modulo: PATH ------\n');



