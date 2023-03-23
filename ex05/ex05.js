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

function validaDDD(){
  var dddInput = document.getElementById("ddd").value
  const dddsBrasil = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24','27', '28','31', '32', '33', '34', '35', '37', '38','41', '42', '43', '44', '45', '46','47', '48', '49','51', '53', '54', '55','61','62', '64','63','65', '66','67','68','69','71', '73', '74', '75', '77','79','81', '87','82','83','84','85', '88','86', '89','91', '93', '94','92','95', '96', '97', '98', '99'
  ];

  for (var i = 0; i < dddsBrasil.length; i++){
    if (dddInput == dddsBrasil[i]){
      return true
    }
  }
  resultado.style.display = "block"
  resultado.innerHTML = "DDD inválido" 
  return false
}

function validaTelefone(){
  var telefone = document.getElementById("telefone").value
  if (telefone.length > 9 || telefone.length < 8) {
    resultado.style.display = 'block'
    resultado.innerHTML = "Telefone inválido"
    return false
  }
  return true

}

function validaEmail() {
  var email = document.getElementById("email").value.split("@")[1]
  for (var i = 0; i < email.length; i++){
    if (email[i] == "."){
      return true
    }
  }
  resultado.style.display = "block"
  resultado.innerHTML = "E-mail precisa de um domínio" 
  return false
}

function validaCheckbox(){
  var checkExtras = document.getElementsByName("checkExtras")
  var contador = 0;
  for (var i = 0; i < checkExtras.length; i++){
    if (checkExtras[i].checked == true){
      contador++
    }
  }
  if (contador > 3){
    resultado.style.display = "block"
    resultado.innerHTML = "Você só pode escolher três atividades extracurriculares" 
    return false
  }
}

function enviaFormulario(e) {
  e.preventDefault()
  resultado.style.display = 'none'

  if (validaData() == false) {
    return
  }

  if (validaDDD() == false) {
    return
  }

  if (validaTelefone() == false) {
    return
  }

  if (validaEmail() == false) {
    return
  }

  if (validaCheckbox() == false){
    return
  }

  alert("Formulário enviado com sucesso!")
}
