/**
 * Dataset customizado: ds-viagens-paises-aluno15
 *
 * Expoe uma lista de paises para o modulo de viagens.
 * Colunas (nesta ordem): codigo (ISO-3), nome (pt-BR), sigla (ISO-2).
 *
 * Executado no servidor (motor Rhino / ES5). Usa somente a API publica
 * de Dataset (DatasetBuilder / DatasetFactory).
 */

/**
 * Funcao publica invocada pela plataforma para construir e retornar o dataset.
 *
 * @param {Array}  fields      Campos solicitados pelo consumidor.
 * @param {Array}  constraints Filtros aplicados pelo consumidor.
 * @param {Array}  sortFields  Campos de ordenacao solicitados.
 * @returns {Object} Dataset construido via DatasetBuilder.
 */
function createDataset(fields, constraints, sortFields) {
    try {
        var dataset = DatasetBuilder.newDataset();

        // 3 colunas, nesta ordem: codigo, nome, sigla.
        dataset.addColumn("codigo");
        dataset.addColumn("nome");
        dataset.addColumn("sigla");

        // 20 paises: [codigo ISO-3, nome em portugues, sigla ISO-2].
        var paises = [
            ["BRA", "Brasil", "BR"],
            ["ARG", "Argentina", "AR"],
            ["URY", "Uruguai", "UY"],
            ["PRY", "Paraguai", "PY"],
            ["CHL", "Chile", "CL"],
            ["BOL", "Bolivia", "BO"],
            ["PER", "Peru", "PE"],
            ["COL", "Colombia", "CO"],
            ["USA", "Estados Unidos", "US"],
            ["CAN", "Canada", "CA"],
            ["MEX", "Mexico", "MX"],
            ["PRT", "Portugal", "PT"],
            ["ESP", "Espanha", "ES"],
            ["FRA", "Franca", "FR"],
            ["ITA", "Italia", "IT"],
            ["DEU", "Alemanha", "DE"],
            ["GBR", "Reino Unido", "GB"],
            ["JPN", "Japao", "JP"],
            ["CHN", "China", "CN"],
           // ["AUS", "Australia", "AU"]
        ];

        for (var i = 0; i < paises.length; i++) {
            dataset.addRow(paises[i]);
        }

        return dataset;
    } catch (erro) {
        // Trata erro retornando dado previsivel, nao excecao solta.
        var datasetErro = DatasetBuilder.newDataset();
        datasetErro.addColumn("ERROR");
        datasetErro.addRow(["" + erro]);
        return datasetErro;
    }
}
