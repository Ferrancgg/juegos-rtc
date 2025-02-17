export const comprobarGanador = (tablero) => {
  for (let i = 0; i < 3; i++) {
    if (tablero[i][0] && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
      return tablero[i][0]; // Ganador en fila
    }
    if (tablero[0][i] && tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
      return tablero[0][i]; // Ganador en columna
    }
  }
  if (tablero[0][0] && tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
    return tablero[0][0]; // Diagonal principal
  }
  if (tablero[0][2] && tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
    return tablero[0][2]; // Diagonal inversa
  }
  return null; // No hay ganador
};
