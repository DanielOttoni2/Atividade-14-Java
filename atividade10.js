const matrizA = [
  [5, 12, 8],
  [10, 3, 21]
];

const matrizB = [
  [7, 3, 14],
  [9, 15, 4]
];

const matrizC = [[], []];
let resultado = "";

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
    resultado += matrizC[i][j] + "   ";
  }
  resultado += "\n";
}

alert(resultado);