let igrama = document.querySelector('#igrama')
let iquilo = document.querySelector('#iquilo')
let icaixa = document.querySelector('#icaixa')
let ipacote = document.querySelector('#ipacote')
let ipeso = document.querySelector('#ipeso')
let itotal = document.querySelector('#itotal')
let resposta1 = document.querySelector('#resposta1')
let resposta2 = document.querySelector('#resposta2')
let resposta3 = document.querySelector('#resposta3')
let resposta4 = document.querySelector('#resposta4')
let monitor = document.querySelector("#monitor")
let detalhes = document.querySelector('#detalhes')
let formulario = document.querySelector('form')


limpar_formulario()


function grama() {
    iquilo.value = igrama.value / 1000
    itotal.value = (ipacote.value * icaixa.value) * iquilo.value
    resposta1.textContent = `1 PRODUTO: ${Math.round(igrama.value)} GRAMA(S) =  ${iquilo.value}  QUILO(S)`
    peso()
}


function quilo() {
    igrama.value = iquilo.value * 1000
    itotal.value = (ipacote.value * icaixa.value) * iquilo.value
    resposta1.textContent = `1 PRODUTO: ${Math.round(igrama.value)} GRAMA(S) =  ${iquilo.value}  QUILO(S)`
    peso()
}


function alterar_quantidade() {
    if (ipacote.value && igrama.value) {
        peso_caixa = ipacote.value * iquilo.value
        quantidade = itotal.value / peso_caixa
        icaixa.value = Math.round(Math.ceil(quantidade))
        soma_produto_fardos = icaixa.value * ipacote.value
        peso_caixas = (ipacote.value * icaixa.value) * iquilo.value
        resposta2.textContent = `${icaixa.value} CAIXA/FARDO = ${soma_produto_fardos} PRODUTOS | ${Math.round(peso_caixas)} KG`
        resposta4.textContent = `${icaixa.value} CAIXA/FARDO ( ${ipacote.value} x ${Math.round(igrama.value)} G) = ${soma_produto_fardos} PRODUTOS | ${peso_caixas.toFixed(2)} KG`
    }
}


function peso() {
    volume_caixa = ipacote.value * icaixa.value
    peso_caixa = ipacote.value * iquilo.value
    peso_caixas = (ipacote.value * icaixa.value) * iquilo.value
    soma_produto_fardos = icaixa.value * ipacote.value
    itotal.value = Math.round(peso_caixas)

    if (icaixa.value * ipacote.value > 0) {
        resposta2.textContent = `${icaixa.value} CAIXA/FARDO = ${soma_produto_fardos} PRODUTOS | ${Math.round(peso_caixas)} KG`
        resposta3.textContent = `1 CAIXA/FARDO ( ${ipacote.value} x ${Math.round(igrama.value)} G) = ${ipacote.value} PRODUTOS | ${peso_caixa.toFixed(2)} KG`
        resposta4.textContent = `${icaixa.value} CAIXA/FARDO ( ${ipacote.value} x ${Math.round(igrama.value)} G) = ${soma_produto_fardos} PRODUTOS | ${peso_caixas.toFixed(2)} KG`
    } else {
        resposta2.textContent = ''
        resposta3.textContent = ''

    }

}


function limpar_formulario() {
    form.reset()
    icaixa.value = 1
    resposta1.textContent = ''
    resposta2.textContent = ''
    resposta3.textContent = ''
    resposta4.textContent = ''
}

function verifica_digito(entrada) {
    if (isNaN(entrada.value)) {
        alert('INFORME APENAS NÚMEROS!')
        entrada.value = ''
    }
}