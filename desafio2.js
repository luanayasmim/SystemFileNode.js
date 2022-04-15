import { promises as fs } from 'fs';

//promise all

//Desafio 2
/*Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do 
arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.*/

async function exercicio2(uf){
    try{
        let todasCidades= JSON.parse(await fs.readFile(`./Estados/${uf}.json`));
        // console.log(todosEstados);
        console.log(todasCidades.length);
        /*for(cadaEstado of todosEstados) {
            console.log(cadaEstado);
            // let uf_arquivos= JSON.parse(readFileSync(`./Estados/${cadaEstado.Sigla}.json`));
            // console.log(uf_arquivos);
        };*/
        
    }catch{
        console.log('Houve um erro!');
    }
}

exercicio2("AL");