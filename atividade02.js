let temperatura=[];
let soma=0;
for(let i=0;i<10;i++){
temperatura[i]=Number(prompt(`Digite um numero pra medir media ${i + 1}:`))
 soma += temperatura[i];
}
let media=Number(soma/10);
alert(` a media e de ${media}`);
