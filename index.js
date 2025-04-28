
 function enviar(){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    if(nome === '' || email === ''){
        document.getElementById('erro').innerText = 'Preencha todos os campos!'

        setTimeout(function() {
            erro.innerText = "";
        }, 1500);
    }
    else{
        document.location.href = "mailto:cie9brasil@gmail.com"
       document.getElementById('resultado').innerText = 'Enviado com Sucesso!'
       setTimeout(function(){
        resultado.innerText = ""
       }, 1500);
    }
 }