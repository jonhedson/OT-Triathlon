document.addEventListener("DOMContentLoaded", () => {
  // Carrega os dados do localStorage
  const appData = JSON.parse(localStorage.getItem('triathlonAppData')) || {};

  // Função para exibir dados de lista
  const displayList = (listId, dataArray) => {
    const ul = document.getElementById(listId);
    if (ul && dataArray) {
      ul.innerHTML = ""; // Limpa a lista existente
      dataArray.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `Atleta #${item}`;
        ul.appendChild(li);
      });
    }
  };

  // Função para exibir dados de checkbox/texto
  const displayTextAndCheckbox = (textElementId, checkboxElementId, data) => {
    const textSpan = document.getElementById(textElementId);
    const checkboxText = document.getElementById(checkboxElementId); // No dashboard, transformamos o span em texto

    if (textSpan) {
      textSpan.textContent = data.checked ? "Conforme ✅" : "Não Conforme ❌";
    }
    if (checkboxText) {
      checkboxText.value = data.obs || "N/A"; // Exibe a observação ou 'N/A'
    }
  };

// --- PRÉ-PROVA / REGISTRO ---
if (appData.preProva) {
    // Exemplo: Exibe lista de atletas inscritos
    displayList("report-atletas-inscritos", appData.preProva.atletasInscritos);

    // Exemplo: Exibe status de briefing técnico
    if (appData.preProva.briefingTecnico) {
        displayTextAndCheckbox(
            "report-briefing-tecnico-status",
            "report-briefing-tecnico-obs",
            appData.preProva.briefingTecnico
        );
    }

    // Exemplo: Exibe status de equipamentos checados
    if (appData.preProva.equipamentosChecados) {
        displayTextAndCheckbox(
            "report-equipamentos-checados-status",
            "report-equipamentos-checados-obs",
            appData.preProva.equipamentosChecados
        );
    }
}

  // --- NATAÇÃO --- //
  if (appData.natacao) {
    document.getElementById("report-primeiro-atleta-natacao").textContent =
      appData.natacao.primeiroAtleta || "N/A";
    document.getElementById("report-ultimo-atleta-natacao").textContent =
      appData.natacao.ultimoAtleta || "N/A";
    displayList("report-desistentes-natacao", appData.natacao.desistentes);
    displayList("report-corte-boia", appData.natacao.punicoes.corteBoia);
    displayList("report-largada-falsa", appData.natacao.punicoes.largadaFalsa);
    displayList("report-contato", appData.natacao.punicoes.contato);
    displayList("report-ajuda-externa", appData.natacao.punicoes.ajudaExterna);
    displayList("report-descarte", appData.natacao.punicoes.descarte);
  }

  // --- TRANSIÇÃO I ---
  // (Adicionar lógica para Transição I quando houver dados)

  // --- CICLISMO ---
  // (Adicionar lógica para Ciclismo quando houver dados)

  // --- TRANSIÇÃO II ---
  // (Adicionar lógica para Transição II quando houver dados)

  // --- CORRIDA ---
  // (Adicionar lógica para Corrida quando houver dados)
});
