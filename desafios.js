import { promises as fs } from 'fs';
import { readFileSync } from 'fs';

//Desafio 1
/*Criar uma função que irá criar um arquivo JSON para cada estado representado no 
arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a 
aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o 
UF do estado, por exemplo: MG.json.*/

async function exercicio1(){
    try{
        let todosEstados= JSON.parse(await fs.readFile('./arquivos/Estados.json'));
        let todasCidades= JSON.parse(await fs.readFile('./arquivos/Cidades.json'));

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

//exercicio1();

//promise all

//Desafio 2
/*Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do 
arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.*/
function exercicio2(uf){
    try{
        let todasCidades= JSON.parse(readFileSync(`./Estados/${uf}.json`));
        return todasCidades.length;  
    }catch{
        console.log('Houve um erro!');
    }
}

console.log(exercicio2("PB"));

//Exercício 3
/* Criar um método que imprima no console um array com o UF dos cinco estados que 
mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode 
usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, 
“UF - 72”, “UF - 65”] */

async function exercicio3(){
    try{
        let array=[];
        let todosEstados= JSON.parse(readFileSync('./arquivos/Estados.json'));
        let qtdeCidades = todosEstados.map(estado =>{
            return array.push({ Quantidade_de_cidades:exercicio2(estado.Sigla) ,Sigla:estado.Sigla});  
        });


        array.sort((a, b) =>{
          return a.Quantidade_de_cidades-b.Quantidade_de_cidades
        });

        console.log(array.slice(0, 5));

    }catch(err){
        console.log('Houve um erro jão!');
    }
}

exercicio3();

//Exercício 4

function exercicio4(){
    try{
        let array=[];
        let todosEstados= JSON.parse(readFileSync('./arquivos/Estados.json'));
        let qtdeCidades = todosEstados.map(estado =>{
            return array.push({ Quantidade_de_cidades:exercicio2(estado.Sigla) ,Sigla:estado.Sigla});  
        });


        array.sort((a, b) =>{
          return b.Quantidade_de_cidades-a.Quantidade_de_cidades
        });

        console.log(array.slice(-5));

    }catch(err){
        console.log('Houve um erro jão!');
    }
}

exercicio4();
