var resultado = document.getElementById('invalido')
function validaData() {
  var dataResposta = document.getElementById('data')
  var dataSplit = dataResposta.value.split('-')
  var diaInput = parseInt(dataSplit[2])
  var mesInput = parseInt(dataSplit[1])
  var anoInput = parseInt(dataSplit[0])

  var dataAtual = new Date()
  var diaAtual = dataAtual.getDate()
  var mesAtual = dataAtual.getMonth() + 1
  var anoAtual = dataAtual.getFullYear()

  if (anoInput > anoAtual) {
    resultado.innerHTML = 'Data de nascimento inválida'
    resultado.style.display = 'block'
    return false
  } else if (anoInput == anoAtual && mesInput > mesAtual) {
    resultado.innerHTML = 'Data de nascimento inválida'
    resultado.style.display = 'block'
    return false
  } else if (
    anoInput == anoAtual &&
    mesInput == mesAtual &&
    diaInput > diaAtual
  ) {
    resultado.innerHTML = 'Data de nascimento inválida'
    resultado.style.display = 'block'
    return false
  }
  return dataResposta
}

function enviaFormulario() {
  if (!validaData()) {
    return
  }
}
