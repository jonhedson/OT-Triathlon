document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.querySelector(".tabs-container");
  const tabs = document.querySelectorAll(".tab");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentTabIndex = 0; // Começa na primeira aba (Home)

  // Função para mostrar a aba correta
  const showTab = (index) => {
    // Primeiro, ocultamos todas as abas e removemos a classe 'active'
    tabs.forEach((tab, i) => {
      tab.classList.remove("active");
      tab.style.display = "none"; // Garante que a aba esteja oculta
    });

    // Adiciona a classe 'active' e exibe a aba selecionada
    if (tabs[index]) {
      tabs[index].classList.add("active");
      tabs[index].style.display = "block"; // Exibe a aba correta

      // Atualiza os botões de navegação
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === tabs.length - 1;
    }
  };

  // Navegação por botões
  prevBtn.addEventListener("click", () => {
    if (currentTabIndex > 0) {
      currentTabIndex--;
      showTab(currentTabIndex);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentTabIndex < tabs.length - 1) {
      currentTabIndex++;
      showTab(currentTabIndex);
    }
  });

  // Lógica para deslize (swipe)
  let startX = 0;
  let endX = 0;

  tabsContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  tabsContainer.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    // Calcula a diferença para saber a direção do deslize
    const diffX = startX - endX;

    // Limiar para considerar um deslize (ajuste se necessário)
    const swipeThreshold = 50;

    if (diffX > swipeThreshold) {
      // Deslize para a esquerda (próxima aba)
      if (currentTabIndex < tabs.length - 1) {
        currentTabIndex++;
        showTab(currentTabIndex);
      }
    } else if (diffX < -swipeThreshold) {
      // Deslize para a direita (aba anterior)
      if (currentTabIndex > 0) {
        currentTabIndex--;
        showTab(currentTabIndex);
      }
    }
  });

  // Funções para a aba de Natação
  const registrarPrimeiroAtletaNatacao = () => {
    const input = document.getElementById("primeiroAtletaNatacao");
    const info = document.getElementById("primeiroAtletaNatacaoInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro Atleta: ${atleta}`;
      input.value = ""; // Limpa o campo
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaNatacao = () => {
    const input = document.getElementById("ultimoAtletaNatacao");
    const info = document.getElementById("ultimoAtletaNatacaoInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último Atleta: ${atleta}`;
      input.value = ""; // Limpa o campo
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const adicionarDesistenteNatacao = () => {
    const input = document.getElementById("desistenteNatacaoInput");
    const lista = document.getElementById("listaDesistentesNatacao");
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = ""; // Limpa o campo
    } else {
      alert("Por favor, digite o número do atleta desistente.");
    }
  };

  // Função genérica para adicionar atletas a uma lista (para punições e desistentes)
  const adicionarAtletaALista = (listaElement, atletaNumero) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Atleta #${atletaNumero}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => {
      listaElement.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    listaElement.appendChild(listItem);
  };

  // Função para adicionar punições (mais genérica)
  const adicionarPunicao = (tipoPunicao) => {
    // Encontra o input específico para o tipo de punição
    const input = document.querySelector(
      `.punishment-input[data-punishment="${tipoPunicao}"]`
    );
    const lista = document.getElementById(
      `lista${tipoPunicao.charAt(0).toUpperCase() + tipoPunicao.slice(1)}`
    ); // Ex: listaCorteBoia
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = ""; // Limpa o campo
    } else {
      alert("Por favor, digite o número do atleta para a punição.");
    }
  };

  // Torna as funções globais para que o HTML possa chamá-las (Alternativa melhor seria adicionar event listeners)
  window.registrarPrimeiroAtletaNatacao = registrarPrimeiroAtletaNatacao;
  window.registrarUltimoAtletaNatacao = registrarUltimoAtletaNatacao;
  window.adicionarDesistenteNatacao = adicionarDesistenteNatacao;
  window.adicionarPunicao = adicionarPunicao;

  const registrarRacksCaixas = () => {
    const numRacksInput = document.getElementById("numBikeRacksInput");
    const numCaixasInput = document.getElementById("numCaixasInput");
    const info = document.getElementById("racksCaixasInfo");

    const numRacks = numRacksInput.value.trim();
    const numCaixas = numCaixasInput.value.trim();

    if (numRacks && numCaixas) {
      info.textContent = `Racks: ${numRacks}, Caixas: ${numCaixas}`;
      numRacksInput.value = "";
      numCaixasInput.value = "";
    } else {
      alert("Por favor, preencha o número de racks e caixas.");
    }
  };

  const registrarCheckinHorario = () => {
    const horarioInput = document.getElementById("checkinHorarioInput");
    const totalAtletasInput = document.getElementById(
      "totalAtletasCheckinInput"
    );
    const info = document.getElementById("checkinHorarioInfo");

    const horario = horarioInput.value.trim();
    const totalAtletas = totalAtletasInput.value.trim();

    if (horario && totalAtletas) {
      info.textContent = `Horário: ${horario}, Atletas: ${totalAtletas}`;
      horarioInput.value = "";
      totalAtletasInput.value = "";
    } else {
      alert("Por favor, preencha o horário e o total de atletas.");
    }
  };

  // Torna as novas funções globais (se você estiver usando onclick no HTML)
  window.registrarRacksCaixas = registrarRacksCaixas;
  window.registrarCheckinHorario = registrarCheckinHorario;

  // Exibe a aba inicial ao carregar a página
  showTab(currentTabIndex);
});
