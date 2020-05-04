var Peso, Altura, Imc;


Peso = prompt("Informe seu peso: ");
Altura = prompt("Informe sua altura: ");


Peso = parseFloat(Peso);
Altura = parseFloat(Altura);
Imc = parseFloat(Imc);

Imc = Peso / (Altura*Altura);

console.log(Peso);
console.log(Altura);
console.log(Imc);

if(Imc < 18.5){
    alert("Peso abaixo do normal");
}
else if(Imc >= 18.5 && Imc <= 24.9){
    alert("Peso ideal");
}
else if(Imc >= 25 && Imc <= 29.9){
    alert("Acima do peso");
}
else if(Imc >= 30 && Imc <= 34.9){
    alert("Obesidade Grau I");
}
else if(Imc >= 35 && Imc <= 40){
    alert("Obesidade Grau II");
}
else{
    alert("Obesidade Grau III");
}
