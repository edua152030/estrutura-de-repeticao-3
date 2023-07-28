/**1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo; 

const quantidadePessoas = 3;
let menorIdade = 0;
let maiorIdade = 0;


for (let i = 1; i <= quantidadePessoas; i++) {
  let idade = parseFloat(prompt(`Digite a idade da pessoa ${i}:`));

  if (i === 1) {
    menorIdade = idade;
    maiorIdade = idade;
  } else {
   
    if (idade < menorIdade) {
      menorIdade = idade;
    }
    if (idade > maiorIdade) {
      maiorIdade = idade;
    }
  }
}

document.write(`A menor idade do grupo é: ${menorIdade}`);
document.write(`A maior idade do grupo é: ${maiorIdade}`);
*/

/**2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
 * 
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro. 

let pedro = 1.5
let crescimentoPedro = 0.02
let lucas = 1.10
let crescimentoLucas = 0.03

for (i = 0; lucas < pedro; i++){
    lucas = lucas + crescimentoLucas
    pedro = pedro + crescimentoPedro
}

document.write(`<p>vai demorar ${i} anos para que lucas e pedro tenham a mesma altura</p>`)
document.write(`vai demorar ${i + 1} anos para que lucas seja maior que pedro`)
*/

/** 3 Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também .

let numero = Number(prompt('Digite o número para a operação:'));
let operador = prompt('Digite o operador (+, -, *, /):')
let numero2 = Number(prompt('Digite o valor a '));
let totalOperacao = 0

for (let i = 1; i <= numero2; i++) {
  switch (operador) {
    case '+':
      total = numero + i;
      totalOperacao = numero + i
      break;
    case '-':
      total = numero - i;
      totalOperacao = numero - i
      break;
    case '*':
      total = numero * i;
      totalOperacao = numero * i
      break;
    case '/':
      total = numero / i;
      totalOperacao = numero / i
      break;
    default:
      document.write('<p>Operador inválido!</p>');
      // Caso o operador seja inválido, encerramos o loop
      
      break;
  }

  document.write(`<p>${numero} ${operador} ${i} = ${totalOperacao}</p>`);
}
*/

/**4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5. 

let numeroInicial = 0
let numeroFinal = 10

for (numeroInicial = 1; numeroInicial < numeroFinal +1 ; numeroInicial++) {

  if(numeroInicial % 3 === 0 ){
    document.write(`numero multiplo de 3 ${numeroInicial} - `)
  }

  if(numeroInicial % 5 === 0 ){
    document.write(`numero multiplo de 5 ${numeroInicial} -`)
  }
}
*/

/**5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM! 

const numeroFim = Number(prompt('Digite um número'));
let contagem = '';

for (i = 0; i <= numeroFim; i++) {
  if (i === numeroFim) {
    contagem += i + ', FIM!';
  } else {
    contagem += i + ', ';
  }
}

document.write(`Contagem: ${contagem}`);
*/

/**6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16... 

let saida = "";

function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  for (let j = 2; j <= Math.sqrt(numero); j++) {
    if (numero % j === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 30; i >= 1; i--) {
  if (ehPrimo(i)) {
    saida += "[" + i + "] ";
  } else {
    saida += i + " ";
  }
}

document.write(saida);
*/

/**7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos. 

let mediaNumeros = 0;
let numerosPositivos = 0;
let numerosNegativos = 0;
let quantidadeNumeros = 3; 

for (let i = 1; i <= quantidadeNumeros; i++) {
  let numeros = Number(prompt('digite um numero '));
  mediaNumeros += numeros;

  if (numeros > 0) {
    numerosPositivos++;
  } else if (numeros < 0) {
    numerosNegativos++;
  }
}

document.write(`A média aritmética é de ${mediaNumeros / quantidadeNumeros}`);
document.write(`<br>Números positivos: ${numerosPositivos}`);
document.write(`<br>Números negativos: ${numerosNegativos}`);

*/
