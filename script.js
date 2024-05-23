const adicionarRegistro = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const rawNsu = dadosDoFormulario.get("nsu")
  const rawAuthorization = dadosDoFormulario.get("aut")
  const rawCredRed = dadosDoFormulario.get("crd")
  const rawCompID = dadosDoFormulario.get("cid")
  const rawOperID = dadosDoFormulario.get("oid")

  const arrayNsu = rawNsu.split(" ")
  const arrayAuthorization = rawAuthorization.split(" ")
  const arrayCredRed = rawCredRed.split(" ")
  const arrayCompID = rawCompID.split(" ")
  const arrayOperID = rawOperID.split(" ")
  let lineQueries = document.querySelector("main")

  for (let index = 0; index < arrayCompID.length; index++) {
    lineQueries.innerHTML += `
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[index]}', autorizacao='${arrayAuthorization[index]}' where operacao_id='${arrayOperID[index]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[index]}', credenciadora_rede='${arrayCredRed[index]}' where comprovante_id='${arrayCompID[index]}' and detalhe_id= '1'
  </p>
  `
  }
}
