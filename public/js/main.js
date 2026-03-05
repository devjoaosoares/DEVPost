function abrirJanela() {
  document.getElementById("overlay").style.display = "flex";
}

function fecharJanela() {
  document.getElementById("overlay").style.display = "none";
}

const input = document.querySelector('#fotoPerfil');
const preview = document.querySelector('#img-preview');

input.addEventListener('change', function() {
  const arquivo = this.files[0]; // Pega o primeiro arquivo selecionado

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function(e) {
      // e.target.result contém os dados da imagem
      preview.src = e.target.result;
      preview.style.display = 'block'; // Mostra a imagem
    }

    leitor.readAsDataURL(arquivo);
  } else {
    preview.src = "";
    preview.style.display = 'none';
  }
});