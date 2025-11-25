(function(){

//Seleção de elementos.
const input = document.getElementById('inputCodigo')
const divResultado = document.getElementById('resultado');
const botaoCalcular = document.getElementById('calcular');
const botaoValidar = document.getElementById('validar');

//Eventos para executar as funções.
botaoCalcular.addEventListener('click', event => executarCalculo());
botaoValidar.addEventListener('click', event => executarValidacao());
divResultado.addEventListener('click', async function() {
    const codigoGerado = document.getElementById('codigoGerado');
    if (codigoGerado) {
        try {
            await navigator.clipboard.writeText(codigoGerado.innerText);
            alert(`Código copiado: ${codigoGerado.innerText}`);
        } catch (err) {
            console.error('Erro ao copiar', err);
        }
    }
});
input.addEventListener('input', event => {
    if(!input.value) limparResultado();
})

function executarValidacao(){
    const valorInput = input.value;
    const tamanhosValidos = [8, 12, 13, 14];
    if(!valorInput) return mostrarResultado('❌ Por favor, digite um código.', 'danger');
    if(!tamanhosValidos.includes(valorInput.length)) return mostrarResultado('❌ O código deve ter pelo menos 8, 12, 13 ou 14 dígitos para ser validado.', 'danger');
    const validacao = new validEAN(valorInput);
    const codigoValidado = validacao.validar();
    
    if(codigoValidado){
        return mostrarResultado(`✅ O código <strong>${valorInput}</strong> é VÁLIDO!`, 'success');
    }
    else{
        return mostrarResultado(`❌ O código <strong>${valorInput}</strong> é INVÁLIDO.`, 'danger');
    }
}

function executarCalculo(){
    const valorInput = input.value;
    const tamanhosValidos = [7, 11, 12, 13];
    if(!valorInput) return mostrarResultado('❌ Digite os números para calcular o próximo dígito.', 'danger');
    if(!tamanhosValidos.includes(valorInput.length)) return mostrarResultado('❌ O código deve ter 7, 11, 12 ou 13 dígitos para ser calculado.', 'danger');
    const calculo = new validEAN(valorInput);
    const codigoCalculado = calculo.calcular().join('');

    let tipoCodigo; 
    switch (true) {
        case codigoCalculado.length === 8:
            tipoCodigo = 'EAN-8';
            break;
        case codigoCalculado.length === 12:
            tipoCodigo = 'UPC-A';
            break;
        case codigoCalculado.length === 13:
            tipoCodigo = 'EAN-13';
            break;
        case codigoCalculado.length === 14:
            tipoCodigo = 'GTIN-14';
            break;
        default:
            tipoCodigo = '';
            break;
    }

    return mostrarResultado(`Novo código <strong>${tipoCodigo}</strong> calculado: <br><strong id="codigoGerado">${codigoCalculado}</strong>`, 'info');
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

})();