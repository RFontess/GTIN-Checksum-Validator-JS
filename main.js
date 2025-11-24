const input = document.getElementById('inputCodigo')
const divResultado = document.getElementById('resultado');

function mostrarResultado(texto, tipo){
    divResultado.style.display = 'block';
    divResultado.innerHTML = texto;
    divResultado.className = `mt-3 alert alert-${tipo}`;
}

function executarValidacao(){
    const valorInput = input.value
    if(!valorInput) return mostrarResultado('Por favor, digite um código.', 'danger');
    const validacao = new validEAN(valorInput);
    const resultado = validacao.validar();

    if(resultado){
        return mostrarResultado(`Seu código de barras está correto.`, 'success');
    }
    else{
        return mostrarResultado(`Seu código de barras está incorreto.`, 'danger');
    }
}

function executarCalculo(){
    const valorInput = input.value
    if(!valorInput) return mostrarResultado('Por favor, digite um código.', 'danger');
    const calculo = new validEAN(valorInput);
    const resultado = calculo.calcular();

    return mostrarResultado(`Seu novo código de barras: ${resultado.join('')}`, 'success');
}