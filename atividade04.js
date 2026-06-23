let nota=[];
let soma=0
for(let i=0;i<5;i++){
    nota[i]=Number(prompt(`escreva a nota do aluno ${i+1}`))
soma+=nota[i]

}
let media=soma/5
 alert(`a media do aluno e de ${media}`)