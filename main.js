const input = document.getElementById('inputCodigo')
const divResultado = document.getElementById('resultado');
const botaoCalcular = document.getElementById('calcular')
const botaoValidar = document.getElementById('validar')

botaoCalcular.addEventListener('click', event => executarCalculo());
botaoValidar.addEventListener('click', event => executarValidacao());

input.addEventListener('input', event => {
    if(!input.value){
        limparResultado();
    }
})
function executarValidacao(){
    const valorInput = input.value
    if(!valorInput) return mostrarResultado('❌ Por favor, digite um código.', 'danger');
    const validacao = new validEAN(valorInput);
    const resultado = validacao.validar();

    if(resultado){
        return mostrarResultado(`✅ O código <strong>${valorInput}</strong> é VÁLIDO!`, 'success');
    }
    else{
        return mostrarResultado(`❌ O código <strong>${valorInput}</strong> é INVÁLIDO.`, 'danger');
    }
}

function executarCalculo(){
    const valorInput = input.value
    if(!valorInput) return mostrarResultado('❌ Digite os números para calcular o próximo dígito.', 'danger');
    const calculo = new validEAN(valorInput);
    const resultado = calculo.calcular().join('');

    return mostrarResultado(`Novo código gerado: <br><strong>${resultado}</strong>`, 'info');
}

function mostrarResultado(texto, tipo){
    divResultado.style.display = 'block';
    divResultado.innerHTML = texto;
    divResultado.className = `mt-3 alert alert-${tipo}`;
}

function limparResultado(){
    divResultado.innerHTML = '';
    divResultado.className = '';
}