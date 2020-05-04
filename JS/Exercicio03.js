var num1, num2, num3, num4, Numeros,total = 0;

num1 = prompt("informe o primeiro valor:   ");
num2 = prompt("informe o segundo valor:    ");
num3 = prompt("informe o terceiro valor:   ");
num4 = prompt("informe o quarto valor:     ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);

Numeros = [num1, num2, num3, num4];

console.log(Numeros);

var ordena = Numeros.sort();

console.log(ordena)

alert("O maior valor é o: " + ordena[3]);
alert("O menor valor é o: " + ordena[0]);

for(let i=0;i<=3;i++){
    total += parseInt(Numeros[i]);
}

total = parseFloat(total);  

alert("a média dos valores é: " + total/4);