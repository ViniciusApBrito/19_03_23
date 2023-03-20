function IMC() {
    var Homem, Mulher, Peso, Altura, Classificacao, Resposta;

    Peso = parseFloat(document.getElementById("Peso").value);
    Altura = parseFloat(document.getElementById("Altura").value);
    gen = document.getElementById("Sexo").value;
    Resposta = (Peso / (Altura * Altura)).toFixed(1);
    document.getElementById("RespostaIndice").value = Resposta;

    switch (gen) {

        case 'Homem':
            if (Resposta < 20) {

                Classificacao = 'Abaixo do Peso';
            }
            else if (Resposta >= 20 & Resposta < 25) {

                Classificacao = 'Normal';
            }
            else if (Resposta >= 25 & Resposta < 30) {

                Classificacao = 'Obesidade Leve';
            }
            else if (Resposta >= 30 & Resposta < 40) {

                Classificacao = 'Obesidade Moderada';
            }
            else if (Resposta >= 40) {

                Classificacao = 'Obesidade Mórbida';
            }
            else {

                Classificacao = 'Erro';
            }

            document.getElementById("RespostaClassificacao").value = Classificacao;

            break;

        case 'Mulher':

            if (Resposta < 19) { Classificacao = 'Abaixo do Peso'; }

            else if (Resposta >= 19 & Resposta < 24) {

                Classificacao = 'Normal';
            }

            else if (Resposta >= 24 & Resposta < 29) {

                Classificacao = 'Obesidade Leve';
            }

            else if (Resposta >= 29 & Resposta < 39) {

                Classificacao = 'Obesidade Moderada';
            }
            else if (Resposta >= 39) {

                Classificacao = 'Obesidade Mórbida';
            }

            else {

                Classificacao = 'Erro';
            }
            document.getElementById("RespostaClassificacao").value = Classificacao;

            break;
    }
}