import { promises as fs } from 'fs';

//Desafio 1
/*Criar uma função que irá criar um arquivo JSON para cada estado representado no 
arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a 
aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o 
UF do estado, por exemplo: MG.json.*/

async function exercicio1(){
    try{
        let todosEstados= JSON.parse(await fs.readFile('./arquivos/Estados.json'));
        let todasCidades= JSON.parse(await fs.readFile('./arquivos/Cidades.json'));

        console.log(todosEstados);

        fs.mkdir('./Estados');

        for(let cadaEstado of todosEstados){
            const cidadeEstado= todasCidades.filter(
                (cadaCidade)=>{
                    return cadaCidade.Estado===cadaEstado.ID;
                }
            );
            fs.writeFile(`./Estados/${cadaEstado.Sigla}.json`, JSON.stringify(cidadeEstado, null, 2));
        }
    }catch(err){
        console.log('Houve um erro!');
    }
}

exercicio1();