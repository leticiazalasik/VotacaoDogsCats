var votosGato = 0;
var votosCachorro = 0;
var totalVotos = 0;
var porcentagemGato = 0;
var porcentagemCachorro = 0;
function votoGato() {
    alert('Registro alterado com sucesso');
    var votarGato = document.getElementById('cats');
    votosGato = votosGato + 1;
    totalVotos = totalVotos + 1;
}
function votoCachorro() {
    alert('Registro alterado com sucesso');
    var votarCachorro = document.getElementById('dogs');
    votosCachorro = votosCachorro + 1;
    totalVotos = totalVotos + 1;
}
function mostrarResultado() {
    porcentagemGato = (votosGato * 100) / totalVotos;
    porcentagemCachorro = (votosCachorro * 100) / totalVotos;
    var paragrafoDogs = document.getElementById("dogs");
    if (paragrafoDogs !== null) {
        paragrafoDogs.innerHTML = "<p> DOGS ".concat(porcentagemGato, " </p>");
    }
    else {
        console.error("O elemento com ID 'dogs' não foi encontrado.");
    }
    //document.getElementById("resultcat").innerHTML = `<p> CATS 
    //     ${porcentagemGato} </p>`; 
    var novaJanela = window.open('resultado.html');
}
function novaJanela() {
    window.location.href = ("voto.html");
}
