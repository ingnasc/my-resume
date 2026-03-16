//funcao idade
function currentAge() {
  const birthDate = new Date('1995-12-23');
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
}

document.getElementById('info').innerHTML = `BRASILEIRA, SOLTEIRA, ${currentAge()} ANOS`;

//funcao troca de modos da página
const toggleBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Modo claro' : '🌙 Modo escuro';
});

//funcao botao cursos
const botoes = document.querySelectorAll(".toggle-cursos");
botoes.forEach(botao => {

  botao.addEventListener("click", () => {

    const lista = botao.nextElementSibling;

    if (lista.style.display === "block") {
      lista.style.display = "none";
      botao.textContent = "📚 VER CURSOS ▸";
    } else {
      lista.style.display = "block";
      botao.textContent = "📚 OCULTAR CURSOS ▾";
    }

  });

});

//funcao botao descrição
const botoesDescricao = document.querySelectorAll(".toggle-curso");
botoesDescricao.forEach(botao => {

  botao.addEventListener("click", () => {

    const lista = botao.nextElementSibling;

    if (lista.style.display === "block") {
      lista.style.display = "none";
      botao.textContent = "📚 VER DESCRIÇÃO ▸";
    } else {
      lista.style.display = "block";
      botao.textContent = "📚 OCULTAR DESCRIÇÃO ▾";
    }

  });

});
