function verificarIdade(){
    const datanascimento = document.getElementById('datanascimento').value;
    const nascimento = new Date(datanascimento);

    const hoje = new Date(); 
    const idade = hoje.getFullYear - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if(mes < 0 || (me ===0 && hoje.getDate() < nascimento.getDate)){
        idade--;
    }
    const resultado = document.getElementById('resultado');
    if(idade < 18){
        resultado.textContent = "Você é menor de idade";
    } else if (idade ===18) {
        resultado.textContent = "Você tem 18 anos! e só";
    }
    else if (idade > 18 && idade < 60){
        resultado.textContent = "Você é maior de idade e não tem 60 anos ainda";
    }
    else {
        resultado.textContent = "voce ainda tem 60 anos ou mais"
    }
}