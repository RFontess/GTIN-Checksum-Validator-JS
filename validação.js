//1. Somar os valores das posições ímpares.
//2. Somar os valores das posições pares e multiplicar o resultado por 3.
//3. Somar os dois resulados.
//4. Pegar ultimo dígito.
//5. Se o resultado for 0, o digito é 0. Se não for 0, subtraia esse último digito do número 10

class validEAN {
    constructor(cod) {
        this.cod = cod;
        
    }

    calcular(){

    }

    validar(){
        const codArray = Array.from(this.cod).map(Number);

        function posicoesImpares(){
            const numerosPosicaoImpar = codArray.filter(function callback(valor,index) {
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
        
        function posicoesPares(){
            const numerosPosicaoPar = codArray.filter(function callback(valor,index) {
                if((index+1) % 2 === 0){
                    return valor;
                }
            });
            let somaPar = 0;
        
            numerosPosicaoPar.forEach(function somar (valor){
                somaPar += valor;
            });

            return somaPar*=3
        }
        const somaResultados = posicoesImpares() + posicoesPares();
        console.log(somaResultados)
        const arrayString = codArray.toString();
        console.log(arrayString)
    }
}

const cod1 = new validEAN('12345678912');
cod1.validar()
console.log(cod1)