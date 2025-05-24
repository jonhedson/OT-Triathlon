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

  // Adiciona eventos de toque para dispositivos móveis
  tabsContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  // Detecta o fim do toque
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
  // ...existing code...

  //#region Pre-Prova

  // Funções para a aba de Pré-Prova

  const adicionarAtletaChecado = () => {
    const input = document.getElementById("atletaChecagemInput");
    const lista = document.getElementById("listaAtletasChecados");
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = ""; // Limpa o campo
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  // Função para registrar número de racks e caixas
  const registrarRacks = () => {
    const numRacksInput = document.getElementById("numBikeRacksInput");

    const info = document.getElementById("racksInfo");

    const numRacks = numRacksInput.value.trim();

    if (numRacks) {
      info.textContent = `Racks: ${numRacks}`;
      numRacksInput.value = "";
    } else {
      alert("Por favor, preencha o número de racks e caixas.");
    }
  };

  // Função para registrar número de racks e caixas
  const registrarCaixas = () => {
    const numCaixasInput = document.getElementById("numCaixasInput");
    const info = document.getElementById("caixasInfo");

    const numCaixas = numCaixasInput.value.trim();

    if (numCaixas) {
      info.textContent = `Caixas: ${numCaixas}`;
      numCaixasInput.value = "";
    } else {
      alert("Por favor, preencha o número de racks e caixas.");
    }
  };

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

  // Torna as funções globais para uso no HTML
  window.adicionarAtletaChecado = adicionarAtletaChecado;
  window.registrarRacks = registrarRacks;
  window.registrarCaixas = registrarCaixas;
  window.registrarCheckinHorario = registrarCheckinHorario;

  // #endregion Pre-Prova

  // #region Natação
  // Funções para a aba de Natação //
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

  // #endregion Natação

  // #region Transição I.

  // Funções para a aba Transição I

  const registrarPrimeiroAtletaEntradaTI = () => {
    const input = document.getElementById("primeiroAtletaEntradaTI");
    const info = document.getElementById("primeiroAtletaEntradaTIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro a entrar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarPrimeiroAtletaSaidaTI = () => {
    const input = document.getElementById("primeiroAtletaSaidaTI");
    const info = document.getElementById("primeiroAtletaSaidaTIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro a sair: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaEntradaTI = () => {
    const input = document.getElementById("ultimoAtletaEntradaTI");
    const info = document.getElementById("ultimoAtletaEntradaTIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último a entrar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaSaidaTI = () => {
    const input = document.getElementById("ultimoAtletaSaidaTI");
    const info = document.getElementById("ultimoAtletaSaidaTIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último a sair: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const adicionarDesistenteTransicaoI = () => {
    const input = document.getElementById("desistenteTransicaoIInput");
    const lista = document.getElementById("listaDesistentesTransicaoI");
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta desistente.");
    }
  };

  // Função para adicionar punições específicas da Transição I
  const adicionarPunicaoTransicaoI = (tipoPunicao) => {
    const input = document.querySelector(
      `.punishment-input[data-punishment="${tipoPunicao}"]`
    );
    const lista = document.getElementById(
      `lista${tipoPunicao.charAt(0).toUpperCase() + tipoPunicao.slice(1)}`
    );
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta para a punição.");
    }
  };

  // Torna as funções globais para uso no HTML
  window.registrarPrimeiroAtletaEntradaTI = registrarPrimeiroAtletaEntradaTI;
  window.registrarPrimeiroAtletaSaidaTI = registrarPrimeiroAtletaSaidaTI;
  window.registrarUltimoAtletaEntradaTI = registrarUltimoAtletaEntradaTI;
  window.registrarUltimoAtletaSaidaTI = registrarUltimoAtletaSaidaTI;
  window.adicionarDesistenteTransicaoI = adicionarDesistenteTransicaoI;
  window.adicionarPunicaoTransicaoI = adicionarPunicaoTransicaoI;

  // #endregion Transição I.

  // #region Ciclismo
  // Funções para a aba Ciclismo

  const registrarPrimeiroAtletaCiclismo = () => {
    const input = document.getElementById("primeiroAtletaCiclismo");
    const info = document.getElementById("primeiroAtletaCiclismoInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro a iniciar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaCiclismo = () => {
    const input = document.getElementById("ultimoAtletaCiclismo");
    const info = document.getElementById("ultimoAtletaCiclismoInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último a finalizar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const adicionarDesistenteCiclismo = () => {
    const input = document.getElementById("desistenteCiclismoInput");
    const lista = document.getElementById("listaDesistentesCiclismo");
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta desistente.");
    }
  };

  // Punição genérica com observação
  const adicionarPunicaoGenericaCiclismo = () => {
    const input = document.getElementById("punicaoCiclismoAtletaInput");
    const obsInput = document.getElementById("punicaoCiclismoObsInput");
    const lista = document.getElementById("listaPunicoesCiclismo");
    const atleta = input.value.trim();
    const obs = obsInput.value.trim();

    if (atleta) {
      const listItem = document.createElement("li");
      listItem.textContent = `Atleta #${atleta}${obs ? " - " + obs : ""}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remover";
      removeBtn.classList.add("remove-btn");
      removeBtn.onclick = () => {
        lista.removeChild(listItem);
      };

      listItem.appendChild(removeBtn);
      lista.appendChild(listItem);

      input.value = "";
      obsInput.value = "";
    } else {
      alert("Por favor, digite o número do atleta e a observação.");
    }
  };

  // Punições específicas (vacuo, andarClipado, descarteCiclismo, ajudaExternaCiclismo)
  const adicionarPunicaoCiclismo = (tipoPunicao) => {
    const input = document.querySelector(
      `.punishment-input[data-punishment="${tipoPunicao}"]`
    );
    const lista = document.getElementById(
      `lista${tipoPunicao.charAt(0).toUpperCase() + tipoPunicao.slice(1)}`
    );
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta para a punição.");
    }
  };

  // Torna as funções globais para uso no HTML
  window.registrarPrimeiroAtletaCiclismo = registrarPrimeiroAtletaCiclismo;
  window.registrarUltimoAtletaCiclismo = registrarUltimoAtletaCiclismo;
  window.adicionarDesistenteCiclismo = adicionarDesistenteCiclismo;
  window.adicionarPunicaoGenericaCiclismo = adicionarPunicaoGenericaCiclismo;
  window.adicionarPunicaoCiclismo = adicionarPunicaoCiclismo;

  // #endregion Ciclismo

  // #region Transição II
  // Funções para a aba Transição II

  const registrarPrimeiroAtletaEntradaTII = () => {
    const input = document.getElementById("primeiroAtletaEntradaTII");
    const info = document.getElementById("primeiroAtletaEntradaTIIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro a entrar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarPrimeiroAtletaSaidaTII = () => {
    const input = document.getElementById("primeiroAtletaSaidaTII");
    const info = document.getElementById("primeiroAtletaSaidaTIIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro a sair: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaEntradaTII = () => {
    const input = document.getElementById("ultimoAtletaEntradaTII");
    const info = document.getElementById("ultimoAtletaEntradaTIIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último a entrar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaSaidaTII = () => {
    const input = document.getElementById("ultimoAtletaSaidaTII");
    const info = document.getElementById("ultimoAtletaSaidaTIIInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último a sair: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const adicionarDesistenteTransicaoII = () => {
    const input = document.getElementById("desistenteTransicaoIIInput");
    const lista = document.getElementById("listaDesistentesTransicaoII");
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta desistente.");
    }
  };

  // Função para adicionar punições específicas da Transição II
  const adicionarPunicaoTransicaoII = (tipoPunicao) => {
    const input = document.querySelector(
      `.punishment-input[data-punishment="${tipoPunicao}"]`
    );
    const lista = document.getElementById(
      `lista${tipoPunicao.charAt(0).toUpperCase() + tipoPunicao.slice(1)}`
    );
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta para a punição.");
    }
  };

  // Torna as funções globais para uso no HTML
  window.registrarPrimeiroAtletaEntradaTII = registrarPrimeiroAtletaEntradaTII;
  window.registrarPrimeiroAtletaSaidaTII = registrarPrimeiroAtletaSaidaTII;
  window.registrarUltimoAtletaEntradaTII = registrarUltimoAtletaEntradaTII;
  window.registrarUltimoAtletaSaidaTII = registrarUltimoAtletaSaidaTII;
  window.adicionarDesistenteTransicaoII = adicionarDesistenteTransicaoII;
  window.adicionarPunicaoTransicaoII = adicionarPunicaoTransicaoII;

  // #endregion Transição II

  // #region Corrida
  // Funções para a aba Corrida

  const registrarPrimeiroAtletaCorrida = () => {
    const input = document.getElementById("primeiroAtletaCorrida");
    const info = document.getElementById("primeiroAtletaCorridaInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Primeiro a iniciar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const registrarUltimoAtletaCorrida = () => {
    const input = document.getElementById("ultimoAtletaCorrida");
    const info = document.getElementById("ultimoAtletaCorridaInfo");
    const atleta = input.value.trim();
    if (atleta) {
      info.textContent = `Último a finalizar: ${atleta}`;
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta.");
    }
  };

  const adicionarDesistenteCorrida = () => {
    const input = document.getElementById("desistenteCorridaInput");
    const lista = document.getElementById("listaDesistentesCorrida");
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta desistente.");
    }
  };

  // Punição genérica com observação
  const adicionarPunicaoGenericaCorrida = () => {
    const input = document.getElementById("punicaoCorridaAtletaInput");
    const obsInput = document.getElementById("punicaoCorridaObsInput");
    const lista = document.getElementById("listaPunicoesCorrida");
    const atleta = input.value.trim();
    const obs = obsInput.value.trim();

    if (atleta) {
      const listItem = document.createElement("li");
      listItem.textContent = `Atleta #${atleta}${obs ? " - " + obs : ""}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remover";
      removeBtn.classList.add("remove-btn");
      removeBtn.onclick = () => {
        lista.removeChild(listItem);
      };

      listItem.appendChild(removeBtn);
      lista.appendChild(listItem);

      input.value = "";
      obsInput.value = "";
    } else {
      alert("Por favor, digite o número do atleta e a observação.");
    }
  };

  // Punições específicas (vacuoCorrida, descarteCorrida, ajudaExternaCorrida, antidesportiva)
  const adicionarPunicaoCorrida = (tipoPunicao) => {
    const input = document.querySelector(
      `.punishment-input[data-punishment="${tipoPunicao}"]`
    );
    const lista = document.getElementById(
      `lista${tipoPunicao.charAt(0).toUpperCase() + tipoPunicao.slice(1)}`
    );
    const atleta = input.value.trim();

    if (atleta) {
      adicionarAtletaALista(lista, atleta);
      input.value = "";
    } else {
      alert("Por favor, digite o número do atleta para a punição.");
    }
  };

  // Torna as funções globais para uso no HTML
  window.registrarPrimeiroAtletaCorrida = registrarPrimeiroAtletaCorrida;
  window.registrarUltimoAtletaCorrida = registrarUltimoAtletaCorrida;
  window.adicionarDesistenteCorrida = adicionarDesistenteCorrida;
  window.adicionarPunicaoGenericaCorrida = adicionarPunicaoGenericaCorrida;
  window.adicionarPunicaoCorrida = adicionarPunicaoCorrida;

  // #endregion Corrida

  // Exibe a aba inicial ao carregar a página
  showTab(currentTabIndex);
});
