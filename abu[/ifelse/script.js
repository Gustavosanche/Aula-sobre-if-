function verificarIdade(){
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');

    if(idade > 18){
        resultado.textContent = "Você é maior de idade. Uhu, poderei tirar carteira de  motorista!";
    }

    else{
        resultado.textContent = 'Você é menor de idade! Volte no proximo ano';
    }
}