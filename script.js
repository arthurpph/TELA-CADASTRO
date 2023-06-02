function cadastrar() {
    const nomecompleto = document.getElementById("nomecompleto").value
    const telefone = document.getElementById("telefone").value
    const cpf = document.getElementById("cpf").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    var res = document.getElementById("res")
    res.innerHTML = `Seu nome: ${nomecompleto} Seu telefone: ${telefone} \nSeu CPF: ${cpf} \nSeu e-mail: ${email} \nSua senha: ${senha}`
}