let codigos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let qual = Number(prompt("Qual código você deseja rastrear?"));
let indice = -1; 
for(let i = 0; i < codigos.length; i++){
    if(qual === codigos[i]){
        indice = i;
        break;      
    }
}
if(indice !== -1){
    alert(`O código digitado está no índice: ${indice}`);
} else {
    alert("Código não cadastrado");
}