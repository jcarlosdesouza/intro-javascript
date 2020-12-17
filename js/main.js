// var nome = "José Carlos de Souza";
// var idade = 35;
// alert("Eu sou " + nome + " e tenho " + idade + " de idade.");

// console.log(nome);
// alert(nome.replace("José", "Zé"));
// alert("Eu sou " + nome.replace("José", "Zé") + " e tenho " + idade + " de idade.");

// var n1 = 14;
// var n2 = 3;
// alert(n1 / n2);

// // Arrays e dicionários

// var lista = ["maçã", "pera", "abacaxi", "melancia"];
// console.log(lista);
// alert(lista[0]);
// lista.push("abacate"); // inclui um elemento
// lista.pop() // exclui o ultimo elemento

// console.log(lista.reverse())
// var strList = lista.toString()
// console.log(strList)
// console.log(lista.join("/"))

// var fruta= {nome: "maçã", cor: "vermelha", tamanho: "média", valor: "0.50"}
// console.log(fruta)
// console.log(fruta.valor)

//Consições, loops e Date

// var age = prompt("Qual sua idade ?");
// if (age < 18) {
//     alert("Não pode entrar");
// }else{
//     alert("Permitida a entrada");
// }

// var count = 0;
// while (count <=18){
//     console.log(count);
//     count += 1;
// }

// var count
// for(count=0; count <=10; count ++){
//     alert(count);
// }

// var hoje = new Date();
// alert(hoje.getMonth() + 1)
// alert(hoje.getFullYear())

//funções

// function soma(n1, n2){
//     return n1 + n2;
// }

// alert(soma(5, 36));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome) 
// }

// alert(setReplace("Vai Brasil!!!", "Brasil", "Corinthians"));

// var valida; // variavél global
// function validaIdade(idade){
//     valida; // variavél local
//     if(idade >= 18){
//         valida=true
//     }else{
//         valida=false
//     }
//     return valida
// }

// var idade = prompt("Qual sua idade ?");
// validaIdade(idade)
// console.log(valida)

function botao(){
    document.getElementById("agradece").innerHTML = "<b>Obrigado por clicar</b>";

}

function redireciona(){
    window.open("https://linkedin.com/in/jose-carlos-de-souza-31051985/"); // abre em outra aba
    //window.location.href = "https://linkedin.com/in/jose-carlos-de-souza-31051985/"; // abra na mesma aba
}

function troca(elemento){
    // document.getElementById("mouseMovement").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}


function volta(elemento){
    // document.getElementById("mouseMovement").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Pagina carregada!");;
}

function funcChange(elemento){
    console.log(elemento.value);
}


