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

  for (let index = 0; index < arrayAuthorization.length; index++) {
  lineQueries.innerHTML += `
  <p>
    update comprovantemeiosgeral set num_autorizacao='${arrayAuthorization[index]}' where comprovante_id='${arrayCompID[index]}' and detalhe_id= '1'
    <br>
    <br>
  </p>
  `
  }
}
