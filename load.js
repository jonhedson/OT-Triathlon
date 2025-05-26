document.addEventListener("DOMContentLoaded", function () {
  // Lê os dados do localStorage
  const data = JSON.parse(localStorage.getItem("triData"));
  const relatorioDiv = document.getElementById("relatorio");

  if (!data) {
    relatorioDiv.innerHTML = "<p>Nenhum dado encontrado no localStorage.</p>";
  } else {
    // Exemplo de exibição organizada
    relatorioDiv.innerHTML = `
        <div class="section">
          <h2>Pré-Prova</h2>
          <strong>Atletas Checados:</strong> <pre>${JSON.stringify(
            data.preProva.atletasChecados,
            null,
            2
          )}</pre>
          <strong>Transição:</strong> <pre>${JSON.stringify(
            data.preProva.transicao,
            null,
            2
          )}</pre>
          <strong>Racks:</strong> ${data.preProva.numRacks || "-"}<br>
          <strong>Caixas:</strong> ${data.preProva.numCaixas || "-"}<br>
          <strong>Bike Racks Obs:</strong> ${
            data.preProva.bikeRacksObs || "-"
          }<br>
          <strong>Bike Rack Triatletas:</strong> <pre>${JSON.stringify(
            data.preProva.bikeRackTriatletas,
            null,
            2
          )}</pre>
          <strong>Área Monte/Desmonte:</strong> <pre>${JSON.stringify(
            data.preProva.areaMonteDesmonte,
            null,
            2
          )}</pre>
          <strong>Check-in Horário:</strong> ${
            data.preProva.checkinHorario || "-"
          }<br>
          <strong>Total Atletas Check-in:</strong> ${
            data.preProva.totalAtletasCheckin || "-"
          }<br>
          <strong>Obs Check-in:</strong> ${
            data.preProva.checkinHorarioObs || "-"
          }<br>
          <strong>Info Adicional:</strong> ${
            data.preProva.infoAdicional || "-"
          }<br>
        </div>
        <div class="section">
          <h2>Natação</h2>
          <pre>${JSON.stringify(data.natacao, null, 2)}</pre>
        </div>
        <div class="section">
          <h2>Transição I</h2>
          <pre>${JSON.stringify(data.transicaoI, null, 2)}</pre>
        </div>
        <div class="section">
          <h2>Ciclismo</h2>
          <pre>${JSON.stringify(data.ciclismo, null, 2)}</pre>
        </div>
        <div class="section">
          <h2>Transição II</h2>
          <pre>${JSON.stringify(data.transicaoII, null, 2)}</pre>
        </div>
        <div class="section">
          <h2>Corrida</h2>
          <pre>${JSON.stringify(data.corrida, null, 2)}</pre>
        </div>
        <div class="section">
          <h2>Chegada</h2>
          <pre>${JSON.stringify(data.chegada, null, 2)}</pre>
        </div>
      `;
  }
});
