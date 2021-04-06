function cadastro(){
    var nome1 = document.getElementById("nomes").value
    var numero1 = document.getElementById("numeros").value
    var cpf1 = document.getElementById("cpfs").value
    if (nome1 == ""){
        alert ("NOME OBRIGATÓRIO SABE LER NÃO?")
        return false
    } if (numero1 == ""){
        alert("NUMERO OBRIGATÓRIO NÃO LEU A PRIMEIRA LINHA NÃO ?")
        return false
    }if (cpf1 == ""){
        alert ("CPF OBRIGATÓRIO QUANTAS VEZES VAMO FICAR NISSO?")
        return false
    }

}