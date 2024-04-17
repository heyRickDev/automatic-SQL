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

  document.querySelector("main").innerHTML = `
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[0]}', autorizacao='${arrayAuthorization[0]}' where operacao_id='${arrayOperID[0]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[0]}', credenciadora_rede='${arrayCredRed[0]}' where comprovante_id='${arrayCompID[0]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[1]}', autorizacao='${arrayAuthorization[1]}' where operacao_id='${arrayOperID[1]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[1]}', credenciadora_rede='${arrayCredRed[1]}' where comprovante_id='${arrayCompID[1]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[2]}', autorizacao='${arrayAuthorization[2]}' where operacao_id='${arrayOperID[2]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[2]}', credenciadora_rede='${arrayCredRed[2]}' where comprovante_id='${arrayCompID[2]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[3]}', autorizacao='${arrayAuthorization[3]}' where operacao_id='${arrayOperID[3]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[3]}', credenciadora_rede='${arrayCredRed[3]}' where comprovante_id='${arrayCompID[3]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[4]}', autorizacao='${arrayAuthorization[4]}' where operacao_id='${arrayOperID[4]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[4]}', credenciadora_rede='${arrayCredRed[4]}' where comprovante_id='${arrayCompID[4]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[5]}', autorizacao='${arrayAuthorization[5]}' where operacao_id='${arrayOperID[5]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[5]}', credenciadora_rede='${arrayCredRed[5]}' where comprovante_id='${arrayCompID[5]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[6]}', autorizacao='${arrayAuthorization[6]}' where operacao_id='${arrayOperID[6]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[6]}', credenciadora_rede='${arrayCredRed[6]}' where comprovante_id='${arrayCompID[6]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[7]}', autorizacao='${arrayAuthorization[7]}' where operacao_id='${arrayOperID[7]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[7]}', credenciadora_rede='${arrayCredRed[7]}' where comprovante_id='${arrayCompID[7]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[8]}', autorizacao='${arrayAuthorization[8]}' where operacao_id='${arrayOperID[8]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[8]}', credenciadora_rede='${arrayCredRed[8]}' where comprovante_id='${arrayCompID[8]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[9]}', autorizacao='${arrayAuthorization[9]}' where operacao_id='${arrayOperID[9]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[9]}', credenciadora_rede='${arrayCredRed[9]}' where comprovante_id='${arrayCompID[9]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[10]}', autorizacao='${arrayAuthorization[10]}' where operacao_id='${arrayOperID[10]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[10]}', credenciadora_rede='${arrayCredRed[10]}' where comprovante_id='${arrayCompID[10]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[11]}', autorizacao='${arrayAuthorization[11]}' where operacao_id='${arrayOperID[11]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[11]}', credenciadora_rede='${arrayCredRed[11]}' where comprovante_id='${arrayCompID[11]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[12]}', autorizacao='${arrayAuthorization[12]}' where operacao_id='${arrayOperID[12]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[12]}', credenciadora_rede='${arrayCredRed[12]}' where comprovante_id='${arrayCompID[12]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[13]}', autorizacao='${arrayAuthorization[13]}' where operacao_id='${arrayOperID[13]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[13]}', credenciadora_rede='${arrayCredRed[13]}' where comprovante_id='${arrayCompID[13]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[14]}', autorizacao='${arrayAuthorization[14]}' where operacao_id='${arrayOperID[14]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[14]}', credenciadora_rede='${arrayCredRed[14]}' where comprovante_id='${arrayCompID[14]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[15]}', autorizacao='${arrayAuthorization[15]}' where operacao_id='${arrayOperID[15]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[15]}', credenciadora_rede='${arrayCredRed[15]}' where comprovante_id='${arrayCompID[15]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[16]}', autorizacao='${arrayAuthorization[16]}' where operacao_id='${arrayOperID[16]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[16]}', credenciadora_rede='${arrayCredRed[16]}' where comprovante_id='${arrayCompID[16]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[17]}', autorizacao='${arrayAuthorization[17]}' where operacao_id='${arrayOperID[17]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[17]}', credenciadora_rede='${arrayCredRed[17]}' where comprovante_id='${arrayCompID[17]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[18]}', autorizacao='${arrayAuthorization[18]}' where operacao_id='${arrayOperID[18]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[18]}', credenciadora_rede='${arrayCredRed[18]}' where comprovante_id='${arrayCompID[18]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[19]}', autorizacao='${arrayAuthorization[19]}' where operacao_id='${arrayOperID[19]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[19]}', credenciadora_rede='${arrayCredRed[19]}' where comprovante_id='${arrayCompID[19]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[20]}', autorizacao='${arrayAuthorization[20]}' where operacao_id='${arrayOperID[20]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[20]}', credenciadora_rede='${arrayCredRed[20]}' where comprovante_id='${arrayCompID[20]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[21]}', autorizacao='${arrayAuthorization[21]}' where operacao_id='${arrayOperID[21]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[21]}', credenciadora_rede='${arrayCredRed[21]}' where comprovante_id='${arrayCompID[21]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[22]}', autorizacao='${arrayAuthorization[22]}' where operacao_id='${arrayOperID[22]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[22]}', credenciadora_rede='${arrayCredRed[22]}' where comprovante_id='${arrayCompID[22]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[23]}', autorizacao='${arrayAuthorization[23]}' where operacao_id='${arrayOperID[23]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[23]}', credenciadora_rede='${arrayCredRed[23]}' where comprovante_id='${arrayCompID[23]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[24]}', autorizacao='${arrayAuthorization[24]}' where operacao_id='${arrayOperID[24]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[24]}', credenciadora_rede='${arrayCredRed[24]}' where comprovante_id='${arrayCompID[24]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[25]}', autorizacao='${arrayAuthorization[25]}' where operacao_id='${arrayOperID[25]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[25]}', credenciadora_rede='${arrayCredRed[25]}' where comprovante_id='${arrayCompID[25]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[26]}', autorizacao='${arrayAuthorization[26]}' where operacao_id='${arrayOperID[26]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[26]}', credenciadora_rede='${arrayCredRed[26]}' where comprovante_id='${arrayCompID[26]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[27]}', autorizacao='${arrayAuthorization[27]}' where operacao_id='${arrayOperID[27]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[27]}', credenciadora_rede='${arrayCredRed[27]}' where comprovante_id='${arrayCompID[27]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[28]}', autorizacao='${arrayAuthorization[28]}' where operacao_id='${arrayOperID[28]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[28]}', credenciadora_rede='${arrayCredRed[28]}' where comprovante_id='${arrayCompID[28]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[29]}', autorizacao='${arrayAuthorization[29]}' where operacao_id='${arrayOperID[29]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[29]}', credenciadora_rede='${arrayCredRed[29]}' where comprovante_id='${arrayCompID[29]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[30]}', autorizacao='${arrayAuthorization[30]}' where operacao_id='${arrayOperID[30]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[30]}', credenciadora_rede='${arrayCredRed[30]}' where comprovante_id='${arrayCompID[30]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[31]}', autorizacao='${arrayAuthorization[31]}' where operacao_id='${arrayOperID[31]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[31]}', credenciadora_rede='${arrayCredRed[31]}' where comprovante_id='${arrayCompID[31]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[32]}', autorizacao='${arrayAuthorization[32]}' where operacao_id='${arrayOperID[32]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[32]}', credenciadora_rede='${arrayCredRed[32]}' where comprovante_id='${arrayCompID[32]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[33]}', autorizacao='${arrayAuthorization[33]}' where operacao_id='${arrayOperID[33]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[33]}', credenciadora_rede='${arrayCredRed[33]}' where comprovante_id='${arrayCompID[33]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[34]}', autorizacao='${arrayAuthorization[34]}' where operacao_id='${arrayOperID[34]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[34]}', credenciadora_rede='${arrayCredRed[34]}' where comprovante_id='${arrayCompID[34]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[35]}', autorizacao='${arrayAuthorization[35]}' where operacao_id='${arrayOperID[35]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[35]}', credenciadora_rede='${arrayCredRed[35]}' where comprovante_id='${arrayCompID[35]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[36]}', autorizacao='${arrayAuthorization[36]}' where operacao_id='${arrayOperID[36]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[36]}', credenciadora_rede='${arrayCredRed[36]}' where comprovante_id='${arrayCompID[36]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[37]}', autorizacao='${arrayAuthorization[37]}' where operacao_id='${arrayOperID[37]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[37]}', credenciadora_rede='${arrayCredRed[37]}' where comprovante_id='${arrayCompID[37]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[38]}', autorizacao='${arrayAuthorization[38]}' where operacao_id='${arrayOperID[38]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[38]}', credenciadora_rede='${arrayCredRed[38]}' where comprovante_id='${arrayCompID[38]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[39]}', autorizacao='${arrayAuthorization[39]}' where operacao_id='${arrayOperID[39]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[39]}', credenciadora_rede='${arrayCredRed[39]}' where comprovante_id='${arrayCompID[39]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[40]}', autorizacao='${arrayAuthorization[40]}' where operacao_id='${arrayOperID[40]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[40]}', credenciadora_rede='${arrayCredRed[40]}' where comprovante_id='${arrayCompID[40]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[41]}', autorizacao='${arrayAuthorization[41]}' where operacao_id='${arrayOperID[41]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[41]}', credenciadora_rede='${arrayCredRed[41]}' where comprovante_id='${arrayCompID[41]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[42]}', autorizacao='${arrayAuthorization[42]}' where operacao_id='${arrayOperID[42]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[42]}', credenciadora_rede='${arrayCredRed[42]}' where comprovante_id='${arrayCompID[42]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[43]}', autorizacao='${arrayAuthorization[43]}' where operacao_id='${arrayOperID[43]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[43]}', credenciadora_rede='${arrayCredRed[43]}' where comprovante_id='${arrayCompID[43]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[44]}', autorizacao='${arrayAuthorization[44]}' where operacao_id='${arrayOperID[44]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[44]}', credenciadora_rede='${arrayCredRed[44]}' where comprovante_id='${arrayCompID[44]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[45]}', autorizacao='${arrayAuthorization[45]}' where operacao_id='${arrayOperID[45]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[45]}', credenciadora_rede='${arrayCredRed[45]}' where comprovante_id='${arrayCompID[45]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[46]}', autorizacao='${arrayAuthorization[46]}' where operacao_id='${arrayOperID[46]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[46]}', credenciadora_rede='${arrayCredRed[46]}' where comprovante_id='${arrayCompID[46]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[47]}', autorizacao='${arrayAuthorization[47]}' where operacao_id='${arrayOperID[47]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[47]}', credenciadora_rede='${arrayCredRed[47]}' where comprovante_id='${arrayCompID[47]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[48]}', autorizacao='${arrayAuthorization[48]}' where operacao_id='${arrayOperID[48]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[48]}', credenciadora_rede='${arrayCredRed[48]}' where comprovante_id='${arrayCompID[48]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[49]}', autorizacao='${arrayAuthorization[49]}' where operacao_id='${arrayOperID[49]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[49]}', credenciadora_rede='${arrayCredRed[49]}' where comprovante_id='${arrayCompID[49]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[50]}', autorizacao='${arrayAuthorization[50]}' where operacao_id='${arrayOperID[50]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[50]}', credenciadora_rede='${arrayCredRed[50]}' where comprovante_id='${arrayCompID[50]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[51]}', autorizacao='${arrayAuthorization[51]}' where operacao_id='${arrayOperID[51]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[51]}', credenciadora_rede='${arrayCredRed[51]}' where comprovante_id='${arrayCompID[51]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[52]}', autorizacao='${arrayAuthorization[52]}' where operacao_id='${arrayOperID[52]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[52]}', credenciadora_rede='${arrayCredRed[52]}' where comprovante_id='${arrayCompID[52]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[53]}', autorizacao='${arrayAuthorization[53]}' where operacao_id='${arrayOperID[53]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[53]}', credenciadora_rede='${arrayCredRed[53]}' where comprovante_id='${arrayCompID[53]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[54]}', autorizacao='${arrayAuthorization[54]}' where operacao_id='${arrayOperID[54]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[54]}', credenciadora_rede='${arrayCredRed[54]}' where comprovante_id='${arrayCompID[54]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[55]}', autorizacao='${arrayAuthorization[55]}' where operacao_id='${arrayOperID[55]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[55]}', credenciadora_rede='${arrayCredRed[55]}' where comprovante_id='${arrayCompID[55]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[56]}', autorizacao='${arrayAuthorization[56]}' where operacao_id='${arrayOperID[56]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[56]}', credenciadora_rede='${arrayCredRed[56]}' where comprovante_id='${arrayCompID[56]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[57]}', autorizacao='${arrayAuthorization[57]}' where operacao_id='${arrayOperID[57]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[57]}', credenciadora_rede='${arrayCredRed[57]}' where comprovante_id='${arrayCompID[57]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[58]}', autorizacao='${arrayAuthorization[58]}' where operacao_id='${arrayOperID[58]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[58]}', credenciadora_rede='${arrayCredRed[58]}' where comprovante_id='${arrayCompID[58]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[59]}', autorizacao='${arrayAuthorization[59]}' where operacao_id='${arrayOperID[59]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[59]}', credenciadora_rede='${arrayCredRed[59]}' where comprovante_id='${arrayCompID[59]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[60]}', autorizacao='${arrayAuthorization[60]}' where operacao_id='${arrayOperID[60]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[60]}', credenciadora_rede='${arrayCredRed[60]}' where comprovante_id='${arrayCompID[60]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[61]}', autorizacao='${arrayAuthorization[61]}' where operacao_id='${arrayOperID[61]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[61]}', credenciadora_rede='${arrayCredRed[61]}' where comprovante_id='${arrayCompID[61]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[62]}', autorizacao='${arrayAuthorization[62]}' where operacao_id='${arrayOperID[62]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[62]}', credenciadora_rede='${arrayCredRed[62]}' where comprovante_id='${arrayCompID[62]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[63]}', autorizacao='${arrayAuthorization[63]}' where operacao_id='${arrayOperID[63]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[63]}', credenciadora_rede='${arrayCredRed[63]}' where comprovante_id='${arrayCompID[63]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[64]}', autorizacao='${arrayAuthorization[64]}' where operacao_id='${arrayOperID[64]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[64]}', credenciadora_rede='${arrayCredRed[64]}' where comprovante_id='${arrayCompID[64]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[65]}', autorizacao='${arrayAuthorization[65]}' where operacao_id='${arrayOperID[65]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[65]}', credenciadora_rede='${arrayCredRed[65]}' where comprovante_id='${arrayCompID[65]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[66]}', autorizacao='${arrayAuthorization[66]}' where operacao_id='${arrayOperID[66]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[66]}', credenciadora_rede='${arrayCredRed[66]}' where comprovante_id='${arrayCompID[66]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[67]}', autorizacao='${arrayAuthorization[67]}' where operacao_id='${arrayOperID[67]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[67]}', credenciadora_rede='${arrayCredRed[67]}' where comprovante_id='${arrayCompID[67]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[68]}', autorizacao='${arrayAuthorization[68]}' where operacao_id='${arrayOperID[68]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[68]}', credenciadora_rede='${arrayCredRed[68]}' where comprovante_id='${arrayCompID[68]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[69]}', autorizacao='${arrayAuthorization[69]}' where operacao_id='${arrayOperID[69]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[69]}', credenciadora_rede='${arrayCredRed[69]}' where comprovante_id='${arrayCompID[69]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[70]}', autorizacao='${arrayAuthorization[70]}' where operacao_id='${arrayOperID[70]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[70]}', credenciadora_rede='${arrayCredRed[70]}' where comprovante_id='${arrayCompID[70]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[71]}', autorizacao='${arrayAuthorization[71]}' where operacao_id='${arrayOperID[71]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[71]}', credenciadora_rede='${arrayCredRed[71]}' where comprovante_id='${arrayCompID[71]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[72]}', autorizacao='${arrayAuthorization[72]}' where operacao_id='${arrayOperID[72]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[72]}', credenciadora_rede='${arrayCredRed[72]}' where comprovante_id='${arrayCompID[72]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[73]}', autorizacao='${arrayAuthorization[73]}' where operacao_id='${arrayOperID[73]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[73]}', credenciadora_rede='${arrayCredRed[73]}' where comprovante_id='${arrayCompID[73]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[74]}', autorizacao='${arrayAuthorization[74]}' where operacao_id='${arrayOperID[74]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[74]}', credenciadora_rede='${arrayCredRed[74]}' where comprovante_id='${arrayCompID[74]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[75]}', autorizacao='${arrayAuthorization[75]}' where operacao_id='${arrayOperID[75]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[75]}', credenciadora_rede='${arrayCredRed[75]}' where comprovante_id='${arrayCompID[75]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[76]}', autorizacao='${arrayAuthorization[76]}' where operacao_id='${arrayOperID[76]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[76]}', credenciadora_rede='${arrayCredRed[76]}' where comprovante_id='${arrayCompID[76]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[77]}', autorizacao='${arrayAuthorization[77]}' where operacao_id='${arrayOperID[77]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[77]}', credenciadora_rede='${arrayCredRed[77]}' where comprovante_id='${arrayCompID[77]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[78]}', autorizacao='${arrayAuthorization[78]}' where operacao_id='${arrayOperID[78]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[78]}', credenciadora_rede='${arrayCredRed[78]}' where comprovante_id='${arrayCompID[78]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[79]}', autorizacao='${arrayAuthorization[79]}' where operacao_id='${arrayOperID[79]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[79]}', credenciadora_rede='${arrayCredRed[79]}' where comprovante_id='${arrayCompID[79]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[80]}', autorizacao='${arrayAuthorization[80]}' where operacao_id='${arrayOperID[80]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[80]}', credenciadora_rede='${arrayCredRed[80]}' where comprovante_id='${arrayCompID[80]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[81]}', autorizacao='${arrayAuthorization[81]}' where operacao_id='${arrayOperID[81]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[81]}', credenciadora_rede='${arrayCredRed[81]}' where comprovante_id='${arrayCompID[81]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[82]}', autorizacao='${arrayAuthorization[82]}' where operacao_id='${arrayOperID[82]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[82]}', credenciadora_rede='${arrayCredRed[82]}' where comprovante_id='${arrayCompID[82]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[83]}', autorizacao='${arrayAuthorization[83]}' where operacao_id='${arrayOperID[83]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[83]}', credenciadora_rede='${arrayCredRed[83]}' where comprovante_id='${arrayCompID[83]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[84]}', autorizacao='${arrayAuthorization[84]}' where operacao_id='${arrayOperID[84]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[84]}', credenciadora_rede='${arrayCredRed[84]}' where comprovante_id='${arrayCompID[84]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[85]}', autorizacao='${arrayAuthorization[85]}' where operacao_id='${arrayOperID[85]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[85]}', credenciadora_rede='${arrayCredRed[85]}' where comprovante_id='${arrayCompID[85]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[86]}', autorizacao='${arrayAuthorization[86]}' where operacao_id='${arrayOperID[86]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[86]}', credenciadora_rede='${arrayCredRed[86]}' where comprovante_id='${arrayCompID[86]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[87]}', autorizacao='${arrayAuthorization[87]}' where operacao_id='${arrayOperID[87]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[87]}', credenciadora_rede='${arrayCredRed[87]}' where comprovante_id='${arrayCompID[87]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[88]}', autorizacao='${arrayAuthorization[88]}' where operacao_id='${arrayOperID[88]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[88]}', credenciadora_rede='${arrayCredRed[88]}' where comprovante_id='${arrayCompID[88]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[89]}', autorizacao='${arrayAuthorization[89]}' where operacao_id='${arrayOperID[89]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[89]}', credenciadora_rede='${arrayCredRed[89]}' where comprovante_id='${arrayCompID[89]}' and detalhe_id= '1'
  </p>
  <p>
  update sesi.nsucartao set nsu='${arrayNsu[90]}', autorizacao='${arrayAuthorization[90]}' where operacao_id='${arrayOperID[90]}'
  <br>
  <br>
  update comprovantemeiosgeral set credenciadora='CIELO', num_autorizacao='${arrayAuthorization[90]}', credenciadora_rede='${arrayCredRed[90]}' where comprovante_id='${arrayCompID[90]}' and detalhe_id= '1'
  </p>
  `
}
