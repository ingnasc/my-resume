function currentAge(){
    const birthDate = new Date('1995-12-23');
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
} 

document.getElementById('info').innerHTML = `Brasileira, Solteira, ${currentAge()} anos`;


  const toggleBtn = document.getElementById('toggle-dark-mode');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Modo claro' : '🌙 Modo escuro';
  });