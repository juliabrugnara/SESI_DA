let atual = 'X';
let jogoAtivo = true;

function jogar(botao) {
  if (botao.innerText === '' && jogoAtivo) {
    botao.innerText = atual;

    if (verificarVitoria()) {
      jogoAtivo = false;
      // setTimeout garante que o X ou O apareça na tela antes do alert
      setTimeout(() => {
        alert(`Jogador ${atual} ganhou!`);
      }, 50);
      return;
    }

    atual = (atual === 'X') ? 'O' : 'X';
    document.getElementById('jogador').innerText = atual;
  }
}

function val(id) {
  return document.getElementById(id).innerText;
}

function verificarVitoria() {
  // Linhas
  if (val('1') !== '' && val('1') === val('2') && val('2') === val('3')) return true;
  if (val('4') !== '' && val('4') === val('5') && val('5') === val('6')) return true;
  if (val('7') !== '' && val('7') === val('8') && val('8') === val('9')) return true;
  // Colunas
  if (val('1') !== '' && val('1') === val('4') && val('4') === val('7')) return true;
  if (val('2') !== '' && val('2') === val('5') && val('5') === val('8')) return true;
  if (val('3') !== '' && val('3') === val('6') && val('6') === val('9')) return true;
  // Diagonais
  if (val('1') !== '' && val('1') === val('5') && val('5') === val('9')) return true;
  if (val('3') !== '' && val('3') === val('5') && val('5') === val('7')) return true;

  return false;
}

function reiniciar() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).innerText = '';
  }
  atual = document.getElementById('escolhaInicial').value;
  jogoAtivo = true;
  document.getElementById('jogador').innerText = atual;
}