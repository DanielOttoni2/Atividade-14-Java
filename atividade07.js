const matriz = [
  [5, 2, 9],
  [8, 1, 4],
  [7, 6, 3]
];

let somaDiagonal = 0;
let valoresDiagonal = "";

for (let i = 0; i < 3; i++) {
  const elemento = matriz[i][i];
  somaDiagonal += elemento;
  
  if (i === 0) {
    valoresDiagonal += elemento;
  } else {
    valoresDiagonal += ", " + elemento;
  }
}

alert(`Valores encontrados na Diagonal Principal: ${valoresDiagonal}`);
alert(`Somatório Final: ${somaDiagonal}`);