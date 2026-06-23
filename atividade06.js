let valores = [];


for (let i = 0; i < 9; i++) {
    valores[i] = prompt(`Escreva o valor ${i + 1} de 9:`);
}


let tabela = `
TELA ORGANIZADA:

 ${valores[0]} | ${valores[1]} | ${valores[2]} 
---|---|---
 ${valores[3]} | ${valores[4]} | ${valores[5]} 
---|---|---
 ${valores[6]} | ${valores[7]} | ${valores[8]} 
`;
alert(tabela);