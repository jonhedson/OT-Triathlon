document.addEventListener('DOMContentLoaded', () => {
    // Carrega os dados do localStorage
    const appData = JSON.parse(localStorage.getItem('triathlonAppData')) || {};

    // Função para exibir dados de lista
    const displayList = (listId, dataArray) => {
        const ul = document.getElementById(listId);
        if (ul && dataArray) {
            ul.innerHTML = ''; // Limpa a lista existente
            dataArray.forEach(item => {
                const li = document.createElement('li');
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
            textSpan.textContent = data.checked ? 'Conforme ✅' : 'Não Conforme ❌';
        }
        if (checkboxText) {
             checkboxText.value = data.obs || 'N/A'; // Exibe a observação ou 'N/A'
        }
    };

    // --- PRÉ-PROVA / REGISTRO ---
    if (triathlonAppData.preProva) {
        // Lê os atletas checados do localStorage, se existir, senão usa do appData
        let atletasChecados = [];
        const atletasChecadosStorage = localStorage.getItem('atletasChecados');
        if (atletasChecadosStorage) {
            try {
                atletasChecados = JSON.parse(atletasChecadosStorage);
            } catch (e) {
                atletasChecados = appData.preProva.atletasChecados || [];
            }
        } else {
            atletasChecados = appData.preProva.atletasChecados || [];
        }
        displayList('report-atletas-checados', atletasChecados);

        displayTextAndCheckbox('report-transicao-justa', 'report-transicao-justa-obs', appData.preProva.transicaoJusta);

        const racksCaixasText = appData.preProva.numBikeRacks && appData.preProva.numCaixas
            ? `Racks: ${appData.preProva.numBikeRacks}, Caixas: ${appData.preProva.numCaixas}`
            : 'N/A';
        document.getElementById('report-racks-caixas').textContent = racksCaixasText;
        document.getElementById('report-bike-racks-obs').value = appData.preProva.bikeRacksObs || 'N/A';

        displayTextAndCheckbox('report-bike-rack-triatletas', 'report-bike-rack-triatletas-obs', appData.preProva.bikeRackTriatletas);
        displayTextAndCheckbox('report-area-monte-desmonte', 'report-area-monte-desmonte-obs', appData.preProva.areaMonteDesmonte);

        const checkinHorarioText = appData.preProva.checkinHorario && appData.preProva.totalAtletasCheckin
            ? `Horário: ${appData.preProva.checkinHorario}, Atletas: ${appData.preProva.totalAtletasCheckin}`
            : 'N/A';
        document.getElementById('report-checkin-horario').textContent = checkinHorarioText;
        document.getElementById('report-checkin-horario-obs').value = appData.preProva.checkinHorarioObs || 'N/A';

        document.getElementById('report-info-adicional-pre-prova').value = appData.preProva.infoAdicional || 'N/A';
    }


    // --- NATAÇÃO ---
    if (appData.natacao) {
        document.getElementById('report-primeiro-atleta-natacao').textContent = appData.natacao.primeiroAtleta || 'N/A';
        document.getElementById('report-ultimo-atleta-natacao').textContent = appData.natacao.ultimoAtleta || 'N/A';
        displayList('report-desistentes-natacao', appData.natacao.desistentes);
        displayList('report-corte-boia', appData.natacao.punicoes.corteBoia);
        displayList('report-largada-falsa', appData.natacao.punicoes.largadaFalsa);
        displayList('report-contato', appData.natacao.punicoes.contato);
        displayList('report-ajuda-externa', appData.natacao.punicoes.ajudaExterna);
        displayList('report-descarte', appData.natacao.punicoes.descarte);
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