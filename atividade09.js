const matriz = [
  [45, 67, 89, 32],
  [78, 92, 54, 61],
  [39, 41, 88, 95]
];

for (let i = 0; i < 3; i++) {
  let maiorPontuacao = matriz[i][0];
  
  for (let j = 1; j < 4; j++) {
    if (matriz[i][j] > maiorPontuacao) {
      maiorPontuacao = matriz[i][j];
    }
  }
  
  alert(`Equipe ${i + 1} - Maior pontuação: ${maiorPontuacao}`);
}