// 1
window.alert("Seja bem Vindo a nossa página ;) ?");
 
// 2
function btnalert() {
alert("Você voltou! <3");
}
 
// 3
document.getElementById("div1").innerHTML = "Alterado por ElementById";
 
document.getElementsByTagName("span")[1].innerHTML = "Alterado por TagName";
 
const collection = document.getElementsByClassName("example1");
collection[0].style.backgroundColor = "blue";
 
document.querySelector("h3").style.backgroundColor = "#7FFF00";
 
const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "yellow";
}
 
//4 - 5 - 6
let btn_cont = 0;
let btn_conta = document.getElementById("btnconta");
btn_conta.addEventListener("click", botao_cont);
 
//função nomeada
function botao_cont(){
  btn_cont++
  document.getElementById("conta").innerHTML = btn_cont + " funcao nomeada";
}
//função de flecha
var funclecha = () => {
  btn_cont++
  document.getElementById("conta").innerHTML = btn_cont + " funcao de flecha";
}
let btn_conta_flecha = document.getElementById("btncontaf");
btn_conta_flecha.addEventListener("click", funclecha);
 
//função literal
var func_literal = function (){
  btn_cont++
  document.getElementById("conta").innerHTML = btn_cont + " funcao literal";
}
let btn_literal = document.getElementById("btnliteral");
btn_literal.addEventListener("click", func_literal);

//7
function CaixaAlta() {
	var digite = document.getElementById("Texto-min").value;
	var Maiusculo = document.getElementById("resultado");
	var stringUpper = digite.toUpperCase();
  
	Maiusculo.textContent = stringUpper;
}
	
//8
function somarValores(){
        var s1 = document.getElementById("txt1").value;
        var s2 = document.getElementById("txt2").value;
        var s3 = parseInt(s1)+parseInt(s2);
        alert("Resultado: " + s3);
    }

