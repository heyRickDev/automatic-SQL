let registros = []

const criarNovoRegistro = (registro) => {
  return `
  <p>
  update sesi.nsucartao set nsu='${registro.NSU}', autorizacao='${registro.autorizacao}' where operacao_id='${registro.operacaoId}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${registro.autorizacao}', credenciadora_rede='${registro.credenciadoraRede}' where comprovante_id='${registro.comprovanteId}' and detalhe_id= '1'
  </p>
  `
}
const atualizarLista = (registros) => {
  let output = ""
  //pegar informação do HTML
  for (let registro of registros) {
    output = output + criarNovoRegistro(registro)
  }
  //Substituir informação do HTML
  document.querySelector("main").innerHTML = output
}
atualizarLista(registros)

const adicionarRegistro = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const registro = {
    NSU: dadosDoFormulario.get("nsu"),
    autorizacao: dadosDoFormulario.get("aut"),
    credenciadoraRede: dadosDoFormulario.get("crd"),
    comprovanteId: dadosDoFormulario.get("cid"),
    operacaoId: dadosDoFormulario.get("oid"),
  }
  registros = [registro, ...registros]

  event.target.querySelector('[name="nsu"]').value = ""
  event.target.querySelector('[name="aut"]').value = ""
  event.target.querySelector('[name="crd"]').value = ""
  event.target.querySelector('[name="cid"]').value = ""
  event.target.querySelector('[name="oid"]').value = ""

  atualizarLista(registros)
}
