const url = 'https://viacep.com.br/ws/$cep/json/';

function findCEP(){
    var cep = document.getElementById("cep").value;
    var urlWithCEP = url.replaceAll("$cep", cep).replaceAll("-","");
    loadDoc(urlWithCEP);
}

function loadDoc(urlWithCEP){
    this.getJSON(urlWithCEP, function(err, data){

        /*console.log("logradouro: " + data.logradouro);
        console.log("complemento: " + data.complemento);
        console.log("bairro: " + data.bairro);
        console.log("localidade: " + data.localidade);
        console.log("uf: " + data.uf);
        console.log("ibge: " + data.ibge);
        console.log("gia: " + data.gia);
        console.log("ddd: " + data.ddd);
        console.log("siafi: " + data.siafi);*/

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
    });
}

var getJSON = function(url, callback){

    var  xhr  = new XMLHttpRequest(); 

    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var status = xhr.status;
        if (status === 200){
            callback(null,  xhr.response);
        }else{
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

function verificacao() {
    var salario = document.getElementById("salario");
    var idade = document.getElementById("idade");
    var estadocivil = document.getElementById("estadocivil");

    if (idade.value < 18 ) {
        document.getElementById("idade").innerHTML = "Não é pemitido o cadastro";
        alert("Nao eh permitido o cadastro! ");
    } 
    if (salario.value > 10000) {
        alert("Declaração de Imposto de Renda Obrigatório! ");
    }
    if (estadocivil.value === "casado" || estadocivil.value === "casada") {
        alert("Necessário enviar documentação de esposo(a)! ");
    }
}