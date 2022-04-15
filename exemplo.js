//Exemplo do professor

import { promises as fs, readFile } from 'fs';

async function start(){
    await fs.writeFile('./exemplo.txt', 'Usando async await');
    const data=await fs.readFile('./exemplo.txt', 'utf-8');
    console.log(data);
}

start();

/*Criar uma função que irá criar um arquivo JSON para cada estado representado no 
arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a 
aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o 
UF do estado, por exemplo: MG.json.*/
async function exercicio1(){
    try{
        let dadosEstados=JSON.parse(await fs.readFile('./arquivos/Estados.json'));
        console.log(dadosEstados);

        let dadosCidades=JSON.parse(await fs.readFile('./arquivos/Cidades.json'));
        console.log(dadosCidades);

        for(let cadaEstado of dadosEstados){
            fs.writeFile(`${cadaEstado.Nome}.json`, `${dadosCidades.Estado===dadosEstados.ID}`);
        }
    }catch(err){
        console.log('Houve um erro');
    }
}
exercicio1();