//1. Somar os valores das posições ímpares. 
//2. Somar os valores das posições pares e multiplicar o resultado por 3.
//3. Somar os dois resulados.
//4. Pegar ultimo dígito.
//5. Se o resultado for 0, o digito é 0. Se não for 0, subtraia esse último digito do número 10

class validEAN {
    constructor(cod) {
        this.cod = cod;
        this.codArray = Array.from(this.cod).map(Number);
    }

    posicoesImpares(cod){
        const numerosPosicaoImpar = cod.filter((valor,index) => (index + 1) % 2 !== 0);
        console.log(`Impar: ${numerosPosicaoImpar}`)
        let somaImpar = 0;
        numerosPosicaoImpar.forEach(valor => somaImpar += valor);
        return somaImpar;
    }    

    posicoesPares(cod){
        const numerosPosicaoPar = cod.filter((valor,index) => (index + 1) % 2 === 0);
        console.log(`Pares: ${numerosPosicaoPar}`)
        let somaPar = 0;
        numerosPosicaoPar.forEach(valor => somaPar += valor);
        return somaPar;
    }

    calcularSomaTotal(cod){
        let somaImpar = this.posicoesImpares(cod);
        let somaPar = this.posicoesPares(cod);
        
        if (cod.length % 2 === 0) {
            somaPar *= 3;
        }
        else{
            somaImpar *= 3;
        }

        return somaImpar + somaPar;
    }
    calcular(){
        let ultimoDigitoCriado = this.calcularSomaTotal(this.codArray) % 10; //pegar o ultimo digito do valor da soma
        
        ultimoDigitoCriado === 0 ? 0 : ultimoDigitoCriado = Math.abs(ultimoDigitoCriado -10);
        
        this.codArray.push(ultimoDigitoCriado); //Adiciona o ultimo digito criado no final do array original
        return this.codArray;
    }

    validar(){
        const ultimoDigitoOriginal = this.codArray[(this.codArray.length-1)];
        
        let ultimoDigitoCriado = this.calcularSomaTotal(this.codArray.slice(0,-1)) % 10;

        ultimoDigitoCriado === 0 ? 0 : ultimoDigitoCriado = Math.abs(ultimoDigitoCriado -10);
        
        return ultimoDigitoCriado === ultimoDigitoOriginal ? 'Seu código de barras está correto' : 'Seu código de barras está incorreto';
    }
}

const cod1 = new validEAN('11111111111');
//console.log(`validar: ${cod1.validar()}`);
console.log(`calcular: ${cod1.calcular()}`);
