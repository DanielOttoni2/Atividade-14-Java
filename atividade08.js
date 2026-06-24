const matriz = [[], [], [], []];
let resultado = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i === j) {
      matriz[i][j] = 1;
    } else {
      matriz[i][j] = 0;
    }
    resultado += matriz[i][j] + "   ";
  }
  resultado += "\n";
}

alert(resultado);