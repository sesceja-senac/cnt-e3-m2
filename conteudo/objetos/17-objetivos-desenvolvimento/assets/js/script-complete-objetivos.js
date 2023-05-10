function criaModalObjetivos() {
  const perguntas = [{
      pergunta: '__________ Até 2030, reduzir a exposição e vulnerabilidade dos povos marginalizados a eventos extremos relacionados com o clima, desastres econômicos, sociais e ambientais.​',
      respostaCorreta: 'Erradicação da pobreza​',
      respostasIncorretas: ['Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, dos povos indígenas e dos pescadores, inclusive por meio de acesso igual a terra.​',
      respostaCorreta: 'Fome zero',
      respostasIncorretas: ['Erradicação da pobreza​', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Apoiar a pesquisa e o desenvolvimento de vacinas e medicamentos para as doenças transmissíveis e não transmissíveis, que afetam principalmente os países em desenvolvimento.​​',
      respostaCorreta: 'Boa saúde e bem-estar​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Até 2020, ampliar globalmente o número de bolsas de estudo para o ensino superior aos países menos desenvolvidos.​​',
      respostaCorreta: 'Educação de qualidade​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Adotar e fortalecer políticas sólidas para a promoção da igualdade de gênero e o empoderamento de todas as mulheres e meninas.​​',
      respostaCorreta: 'Igualdade de gênero​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Apoiar e fortalecer a participação das comunidades locais, a fim de melhorar a gestão da água e do saneamento.​​',
      respostaCorreta: 'Água limpa e saneamento​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Até 2030, aumentar a participação de energias renováveis na matriz energética global.​​',
      respostaCorreta: 'Energia acessível e limpa​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Tomar medidas imediatas para erradicar o trabalho forçado, acabar com a escravidão moderna e o tráfico de pessoas e assegurar a proibição e eliminação do trabalho infantil.​​',
      respostaCorreta: 'Emprego digno​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Fortalecer a pesquisa científica e melhorar as capacidades tecnológicas de setores industriais, particularmente dos países em desenvolvimento.​​',
      respostaCorreta: 'Indústria, inovação e infraestrutura​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Adotar políticas, especialmente fiscal, salarial e de proteção social, e alcançar progressivamente uma maior igualdade.​​',
      respostaCorreta: 'Redução das desigualdades​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Até 2030, garantir o acesso de todos à habitação segura, adequada e a preço acessível, e aos serviços básicos, além de urbanizar as favelas.​​',
      respostaCorreta: 'Comunidades sustentáveis',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Incentivar as empresas grandes e transnacionais a adotarem práticas sustentáveis e a integrarem informações de sustentabilidade em seus relatórios.​​',
      respostaCorreta: 'Consumo e produção responsáveis​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Mobilizar conjuntamente US$ 100 bilhões por ano, a partir de 2020, de todas as fontes para atender às necessidades dos países em desenvolvimento, no contexto das ações de mitigação sobre mudanças do clima.​​',
      respostaCorreta: 'Combate às alterações climáticas​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Vida na água', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Até 2025, prevenir e reduzir significativamente a poluição marinha de todos os tipos, especialmente a advinda de atividades terrestres.​​',
      respostaCorreta: 'Vida na água​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na terra', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Promover a gestão sustentável de todos os tipos de florestas, deter o desmatamento e restaurar florestas.​​',
      respostaCorreta: 'Vida na terra​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Paz e justiça', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Até 2030, reduzir significativamente os fluxos financeiros e de armas ilegais, reforçar a devolução de recursos roubados e combater todas as formas de crime organizado.​​',
      respostaCorreta: 'Paz e justiça​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Parcerias em prol das metas​']
    },
    {
      pergunta: '__________ Fazer países desenvolvidos implementarem os seus compromissos em matéria de assistência oficial ao desenvolvimento, inclusive fornecendo aos países em desenvolvimento 0,7% de sua renda nacional bruta.​​',
      respostaCorreta: 'Parcerias em prol das metas​',
      respostasIncorretas: ['Erradicação da pobreza​', 'Fome zero', 'Boa saúde e bem-estar', 'Educação de qualidade​', 'Igualdade de gênero', 'Água limpa e saneamento', 'Energia acessível e limpa', 'Emprego digno', 'Indústria, inovação e infraestrutura', 'Redução das desigualdades', 'Comunidades sustentáveis', 'Consumo e produção responsáveis', 'Combate às alterações climáticas', 'Vida na água', 'Vida na terra', 'Paz e justiça']
    }
  ];



  perguntas.forEach(function (pergunta, indice) {
    const modalId = `modal-${indice + 1}`;
    let respostas = new Array();
    let htmlModal = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header header-menu">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${pergunta.pergunta}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body color-menu random-location">`;
    respostas.push(`<button type="button" class="random btn btn-success corzinha mb-2 form-control alternativa-correta-${indice + 1}">${pergunta.respostaCorreta}</button>`);
    $.each(pergunta.respostasIncorretas, function (a, perguntaincorreta_label) {
      respostas.push(`<button type="button" class="random btn btn-success corzinha mb-2 form-control alternativa-incorreta-${indice + 1}">${perguntaincorreta_label}</button>`)
    })




    /* https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array */
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }

    shuffle(respostas);
    console.log(respostas)
    respostas.forEach(function (a, b) {
      htmlModal += a;
    })


    htmlModal += `</div>
          <div class="modal-footer color-menu">
          </div>
        </div>
      </div>
    </div>
  `;
    $('body').append(htmlModal);


  });
}

function feedbackRespostas() {
  var audioAcertou = new Audio('objetos/17-objetivos-desenvolvimento/assets/audio/acertoou.wav');
  var audioErrou = new Audio('objetos/17-objetivos-desenvolvimento/assets/audio/erroou.wav');

  $(".alternativa-correta-1").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#modal-1").modal("hide");
    $("#alternativa-1").addClass("disabled");
    $("#alternativa-1").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj1.png');
    $("#modal-feedback-1").modal("show");
  });

  $(".alternativa-incorreta-1").click(function () {
    audioErrou.play();
    $("#modal-1").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-1").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-2").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-2").addClass("disabled");
    $("#alternativa-2").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj2.png');
    $("#modal-2").modal("hide");
  });

  $(".alternativa-incorreta-2").click(function () {
    audioErrou.play();
    $("#modal-2").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-2").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-3").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-3").addClass("disabled");
    $("#alternativa-3").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj3.png');
    $("#modal-3").modal("hide");
  });

  $(".alternativa-incorreta-3").click(function () {
    audioErrou.play();
    $("#modal-3").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-3").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-4").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-4").addClass("disabled");
    $("#alternativa-4").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj4.png');
    $("#modal-4").modal("hide");
  });

  $(".alternativa-incorreta-4").click(function () {
    audioErrou.play();
    $("#modal-4").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-4").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-5").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-5").addClass("disabled");
    $("#alternativa-5").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj5.png');
    $("#modal-5").modal("hide");
  });

  $(".alternativa-incorreta-5").click(function () {
    audioErrou.play();
    $("#modal-5").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-5").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-6").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-6").addClass("disabled");
    $("#modal-6").modal("hide");
    $("#alternativa-6").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj6.png');
  });

  $(".alternativa-incorreta-6").click(function () {
    audioErrou.play();
    $("#modal-6").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-6").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-7").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-7").addClass("disabled");
    $("#modal-7").modal("hide");
    $("#alternativa-7").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj7.png');
  });

  $(".alternativa-incorreta-7").click(function () {
    audioErrou.play();
    $("#modal-7").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-7").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-8").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-8").addClass("disabled");
    $("#modal-8").modal("hide");
    $("#alternativa-8").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj8.png');
  });

  $(".alternativa-incorreta-8").click(function () {
    audioErrou.play();
    $("#modal-8").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-8").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-9").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-9").addClass("disabled");
    $("#modal-9").modal("hide");
    $("#alternativa-9").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj9.png');
  });

  $(".alternativa-incorreta-9").click(function () {
    audioErrou.play();
    $("#modal-9").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-9").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-10").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-10").addClass("disabled");
    $("#modal-10").modal("hide");
    $("#alternativa-10").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj10.png');
  });

  $(".alternativa-incorreta-10").click(function () {
    audioErrou.play();
    $("#modal-10").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-10").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-11").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-11").addClass("disabled");
    $("#modal-11").modal("hide");
    $("#alternativa-11").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj11.png');
  });

  $(".alternativa-incorreta-11").click(function () {
    audioErrou.play();
    $("#modal-11").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-11").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-12").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-12").addClass("disabled");
    $("#modal-12").modal("hide");
    $("#alternativa-12").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj12.png');
  });

  $(".alternativa-incorreta-12").click(function () {
    audioErrou.play();
    $("#modal-12").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-12").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-13").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-13").addClass("disabled");
    $("#modal-13").modal("hide");
    $("#alternativa-13").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj13.png');
  });

  $(".alternativa-incorreta-13").click(function () {
    audioErrou.play();
    $("#modal-13").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-13").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-14").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-14").addClass("disabled");
    $("#modal-14").modal("hide");
    $("#alternativa-14").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj14.png');
  });

  $(".alternativa-incorreta-14").click(function () {
    audioErrou.play();
    $("#modal-14").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-14").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-15").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-15").addClass("disabled");
    $("#modal-15").modal("hide");
    $("#alternativa-15").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj15.png');
  });

  $(".alternativa-incorreta-15").click(function () {
    audioErrou.play();
    $("#modal-15").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-15").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-16").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-16").addClass("disabled");
    $("#modal-16").modal("hide");
    $("#alternativa-16").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj16.png');
  });

  $(".alternativa-incorreta-16").click(function () {
    audioErrou.play();
    $("#modal-16").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-16").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });

  $(".alternativa-correta-17").click(function () {
    audioAcertou.play();
    $("#modal-acertou").modal("show");
    $("#alternativa-17").addClass("disabled");
    $("#modal-17").modal("hide");
    $("#alternativa-17").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/obj17.png');
  });

  $(".alternativa-incorreta-17").click(function () {
    audioErrou.play();
    $("#modal-17").modal("hide");
    $("#modal-errou").modal("show");
    $("#alternativa-17").find('img').attr('src', './objetos/17-objetivos-desenvolvimento/assets/img/erro.png');
  });
}

criaModalObjetivos();
feedbackRespostas();