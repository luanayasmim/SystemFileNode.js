//Exercício 3
/* Criar um método que imprima no console um array com o UF dos cinco estados que 
mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode 
usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, 
“UF - 72”, “UF - 65”] */

import funcaoCidades from './desafio2';

import { promises as fs } from 'fs';

async function Maior(uf){
    try{
       console.log(funcaoCidades.exercicio2('AC'));

    }catch(err){
        console.log('Houve um erro jão!')
    }
}

Maior();