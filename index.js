//import from file system
import { mkdir, writeFile, appendFile, readFile } from 'fs';
//importando arquivos

//Desafio 1
/*Criar uma função que irá criar um arquivo JSON para cada estado representado no 
arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a 
aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o 
UF do estado, por exemplo: MG.json.*/

export default function criaEstado(){
    mkdir('./Estados', (error)=>{
        if(error){
            console.log('Houve um erro na criação da pasta');
        }else{
            //Lendo arquivo do Estados
            readFile('./arquivos/Estados.json', (error, dataEstados)=>{
                if(error){
                    console.log(error);
                }else{
                    const Estados = JSON.parse(dataEstados);
                    // console.log(JSON.parse(data));
                    Estados.forEach(estado=>{
                        //console.log(estado.Nome);
                        writeFile(`./Estados/${estado.Nome}.json`, ``, (error)=>{
                            if(error){
                              console.log(`Houve um erro na criação do arquivo do Estado ${Estados.nome}!`);
                            }else{
                              console.log(`${estado.Nome}.json criado com sucesso!`);
                              readFile('./arquivos/Cidades.json', (error, dataCidades)=>{
                                if(error){
                                    console.log('Houve um erro na leitura das cidades');
                                }else{
                                    // console.log(JSON.parse(dataCidades));
                                    const Cidades = JSON.parse(dataCidades);
                                    const CidadesArray = Cidades.map((Cidade)=>{
                                        if(Cidade.Estado===estado.ID){
                                            // let arrayCidades=[];
                                            // arrayCidades.push(Cidade);
                                            // console.log(arrayCidades);
                                            appendFile(`./Estados/${estado.Nome}.json`, Cidade.Nome, 'utf-8', (error)=>{});
                                        }
                                    }); 
                                }
                              });
                            }
                          });  
                    });

                }
                
            });
            
        }
    });
}

criaEstado();

//Desafio 2
/*Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do 
arquivo JSON correspondente e retorne a quantidade de cidades daquele estado*/