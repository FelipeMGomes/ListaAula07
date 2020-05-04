var opc;

opc = prompt("Informe a opção desejada\n\n[1] Quadrado\n[2] Retângulo\n[3] Triângulo retângulo\n[4] Círculo");



if(opc == 1){
    var lado = 0, resultado = 0 ;
    
    lado =prompt("Informe o tamanho do lado: ");

    resultado = Math.pow(lado,2);

    alert("A área do Quadrado é: "+ resultado);

}
else if(opc == 2){
    var lado = 0, altura = 0, resultado = 0;

    lado =prompt("Informe o tamanho do lado: ");
    altura =prompt("Informe a altura: ");

    resultado = lado * altura;

    alert("A área do retangulo é: " + resultado);

}
else if(opc == 3){
    var base = 0, altura = 0, resultado = 0;

    base =prompt("Informe o tamanho da base: ");
    altura =prompt("Informe a altura: ");

    resultado = (base / altura) * 2;

    alert("A área do triangulo retangulo é: " + resultado);    
}
else if(opc == 4){
    var PI = 3.14, raio = 0, resultado = 0;

    raio =prompt("informe o tamanho do raio: ");

    resultado = PI * Math.pow(raio,2);
    
    alert("A área do circulo é: " + resultado);
    
}
else{
    alert("opção inválida");
}