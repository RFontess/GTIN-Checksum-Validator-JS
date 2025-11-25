class validEAN {
    constructor(cod) {
        this.cod = cod;
        this.codArray = Array.from(this.cod).map(Number);
    }

    posicoesImpares(cod){
        return cod.reduce((total, valor, index) => {
            return (index + 1) % 2 !== 0 ? total + valor : total;
        }, 0);
    }    

    posicoesPares(cod){
        return cod.reduce((total, valor, index) => {
            return (index + 1) % 2 === 0 ? total + valor : total;
        }, 0);
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
        let ultimoDigitoCriado = this.calcularSomaTotal(this.codArray) % 10; 
        
        ultimoDigitoCriado = (10 - ultimoDigitoCriado) % 10;
        
        return [...this.codArray, ultimoDigitoCriado];
    }

    validar(){
        const ultimoDigitoOriginal = this.codArray[(this.codArray.length-1)];
        let ultimoDigitoCriado = this.calcularSomaTotal(this.codArray.slice(0,-1)) % 10;

        ultimoDigitoCriado = (10 - ultimoDigitoCriado) % 10;
        
        return ultimoDigitoCriado === ultimoDigitoOriginal;
    }
}