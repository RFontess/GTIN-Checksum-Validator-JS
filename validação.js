//1. Somar os valores das posições ímpares.
//2. Somar os valores das posições pares e multiplicar o resultado por 3.
//3. Somar os dois resulados.
//4. Pegar ultimo dígito.
//5. Se o resultado for 0, o digito é 0. Se não for 0, subtraia esse último digito do número 10

class validEAN {
    constructor(cod) {
        this.cod = cod;
        this.codArray = this.codArray = Array.from(this.cod).map(Number);
    }

    posicoesImpares(cod){
        const numerosPosicaoImpar = cod.filter(function callback(valor,index) {
            if(!((index+1) % 2 === 0)){
                return valor;
            }
        });
        let somaImpar = 0;
        
        numerosPosicaoImpar.forEach(function somar (valor){
            somaImpar += valor;
        });

        return somaImpar;
    }    

    posicoesPares(cod){
        const numerosPosicaoPar = cod.filter(function callback(valor,index) {
            if((index+1) % 2 === 0){
                return valor;
            }
        });
        let somaPar = 0;
        
        numerosPosicaoPar.forEach(function somar (valor){
            somaPar += valor;
        });

        return somaPar*=3;
    }

    calcular(){
        let somaResultados = this.posicoesImpares(this.codArray) + this.posicoesPares(this.codArray);
        let ultimoDigitoCriado = somaResultados % 10; //pegar o ultimo digito do valor da soma
        console.log(this.codArray)
        console.log(this.posicoesImpares(this.codArray))
        console.log(this.posicoesPares(this.codArray))
        console.log(somaResultados)
        ultimoDigitoCriado === 0 ? 0 : ultimoDigitoCriado = Math.abs(ultimoDigitoCriado -10);
        
        this.codArray.push(ultimoDigitoCriado); //Adiciona o ultimo digito criado no final do array original
        return this.codArray;
    }

    validar(){
        
        let somaResultados = this.posicoesImpares(this.codArray.slice(0,-1)) + this.posicoesPares(this.codArray.slice(0,-1)) 
        
        const ultimoDigitoOriginal = this.codArray[(this.codArray.length-1)];
        
        let ultimoDigitoCriado = somaResultados % 10;

        ultimoDigitoCriado === 0 ? 0 : ultimoDigitoCriado = Math.abs(ultimoDigitoCriado -10);
        
        return ultimoDigitoCriado === ultimoDigitoOriginal ? 'Seu código de barras está correto' : 'Seu código de barras está incorreto';
    }
}

const cod1 = new validEAN('9876545353670');
console.log(`validar: ${cod1.validar()}`);
console.log(`calcular: ${cod1.calcular()}`);
