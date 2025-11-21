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

    posicoesImpares(){
        const numerosPosicaoImpar = this.codArray.filter(function callback(valor,index) {
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

    posicoesPares(){
        const numerosPosicaoPar = this.codArray.filter(function callback(valor,index) {
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

    }

    validar(){
        
        
        let somaResultados = this.posicoesImpares() + this.posicoesPares();
        somaResultados = Array.from(somaResultados.toString().split(''));
        const ultimoDigitoCriado = somaResultados[(somaResultados.length-1)];
        const ultimoDigitoOriginal = codArray[(codArray.length-1)];
        return ultimoDigitoCriado === ultimoDigitoOriginal ? 'Seu código de barras está correto' : 'Seu código de barras está incorreto';
        
        
        //const arrayString = codArray.toString();
        //console.log(arrayString)
    }
}

const cod1 = new validEAN('1234567891432');
console.log(cod1.validar())
console.log(cod1)