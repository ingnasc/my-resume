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

document.getElementById('info').innerHTML = `Brasileira, Solteira, ${currentAge()} anos`;

const toggleBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️ Modo claro' : '🌙 Modo escuro';
});

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('savePdfBtn').addEventListener('click', () => {
    const content = document.getElementById('content');
    document.body.classList.add('printing');

    html2canvas(content, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;
      const pageHeight = 297;
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('curriculo--ingrid-nascimento.pdf');

      document.body.classList.remove('printing');
    });
  });
});