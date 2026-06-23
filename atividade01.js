const caixa=[];
let soma=0
for (let i=0;i<8;i++){
    caixa[i]= Number(prompt(alert(`Quantidade da gaveta ${i + 1}:`)))
    soma+=caixa[i]}
alert(`Gavetas: ${caixa}\nSoma total: ${soma}`)