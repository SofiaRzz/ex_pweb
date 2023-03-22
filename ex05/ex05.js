function validaData(){
  var dataResposta = document.getElementById("data")
  var dataSplit = dataResposta.value.split("-")
  var diaInput = parseInt(dataSplit[2])
  var mesInput = parseInt(dataSplit[1])
  var anoInput = parseInt(dataSplit[0])

  var dataAtual = new Date()
  var diaAtual = dataAtual.getDate()
  var mesAtual = dataAtual.getMonth()
  var anoAtual = dataAtual.getFullYear()
}



function enviaFormulario(){

}
