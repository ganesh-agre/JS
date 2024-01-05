function createChessBoard() {
  let table = `<table>`;

  for (let row = 0; row < 8; row++) {
    table += `<tr>`;
    for (let column = 0; column < 8; column++) {
      table += `<td></td>`;
    }
    table += `</tr>`;
  }
  table += `</table>`;

  document.querySelector(".container").innerHTML = table;
}

createChessBoard();
