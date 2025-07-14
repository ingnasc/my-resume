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

  const { jsPDF } = window.jspdf;

  document.getElementById('savePdfBtn').addEventListener('click', () => {
    // Seleciona o elemento que quer salvar, ex: o corpo da página ou uma div específica
    const element = document.body; // ou document.getElementById('minhaDiv')

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4'); // retrato, milímetros, formato A4

      // Calcula a largura e altura da imagem para caber no pdf (A4 = 210x297mm)
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 210;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('meu-arquivo.pdf');
    });
  });