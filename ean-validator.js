class validEAN {
    constructor(cod) {
        this.cod = cod;
        this.codArray = Array.from(this.cod).map(Number);
    }

    posicoesImpares(cod){
        const numerosPosicaoImpar = cod.filter((valor,index) => (index + 1) % 2 !== 0);
        let somaImpar = 0;
        numerosPosicaoImpar.forEach(valor => somaImpar += valor);
        return somaImpar;
    }    

    posicoesPares(cod){
        const numerosPosicaoPar = cod.filter((valor,index) => (index + 1) % 2 === 0);
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
        
        return [...this.codArray, ultimoDigitoCriado];
    }

    validar(){
        const ultimoDigitoOriginal = this.codArray[(this.codArray.length-1)];
        let ultimoDigitoCriado = this.calcularSomaTotal(this.codArray.slice(0,-1)) % 10;

        ultimoDigitoCriado === 0 ? 0 : ultimoDigitoCriado = Math.abs(ultimoDigitoCriado -10);
        
        return ultimoDigitoCriado === ultimoDigitoOriginal;
    }
}