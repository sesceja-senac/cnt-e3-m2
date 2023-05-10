function escalaProporcao(largura, altura) {

    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
        larguraAltura = "height";
        larguraAlturaAuto = "width";
        proporcao = proporcaoAltura / 100;
    } else {
        larguraAltura = "width";
        larguraAlturaAuto = "height";
        proporcao = proporcaoLargura / 100;
    }

    console.log(proporcao, proporcaoAltura, proporcaoLargura)
    return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyConteudo() {

    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".conteudo").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}


$(document).ready(function () {
    $("#intro").modal("show")
    resizeBodyConteudo()
    $(window).resize(function () {
        resizeBodyConteudo()
    })

    Pace.on('done', function(){
        $(".pace-wall").hide();
    })

    $('[data-bs-toggle="popover"]').click(function (){
        let id_popover;
        let src;
        let intervalo = setInterval(() => {
            if($(".popover-header").length != 0){
                id_popover = $(".popover-header").text()
                
                if( id_popover == "Floculação."){
                    
                    src = '<br><br><img src="assets/img/floculacao.png" class="img-fluid" alt="">';

                }else if( id_popover == "Decantação."){

                    src = '<br><br><img src="assets/img/decantacao.png" class="img-fluid" alt="">';

                } else if( id_popover == "Filtração."){

                    src = '<br><br><img src="assets/img/filtracao.png" class="img-fluid" alt="">';

                }

                $(".popover-body").append(src)
                    clearInterval(intervalo)
                
            }
        }, 500);
    });

});


function abreFechaPopover() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => {
        const popover = new bootstrap.Popover(popoverTriggerEl);
        popoverTriggerEl.addEventListener('click', () => {
            if (popover._activeTrigger.click) {
                popover.hide();
            } else {
                popover.show();
            }
            const otherPopovers = popoverList.filter(p => p !== popover);
            otherPopovers.forEach(p => p.hide());
        });
        return popover;
    });
}

function movimentoRio() {
    $(document).ready(function () {
        var images = ["assets/img/rio_01.png", "assets/img/rio_02.png", "assets/img/rio_03.png", "assets/img/rio_04.png", "assets/img/rio_05.png", "assets/img/rio_06.png", "assets/img/rio_07.png", "assets/img/rio_08.png", "assets/img/rio_09.png", "assets/img/rio_10.png"];
        var index = 0;
        setInterval(function () {
            $('.rio img').attr('src', images[index]);
            index = (index + 1) % images.length;
        }, 600);
    });
}

function movimentoTanque() {
    $(document).ready(function () {
        var images = ["assets/img/tanques_01.png", "assets/img/tanques_02.png", "assets/img/tanques_03.png", "assets/img/tanques_04.png", "assets/img/tanques_05.png", "assets/img/tanques_06.png", "assets/img/tanques_07.png", "assets/img/tanques_08.png", "assets/img/tanques_09.png", "assets/img/tanques_10.png"];
        var index = 0;
        setInterval(function () {
            $('.tanques img').attr('src', images[index]);
            index = (index + 1) % images.length;
        }, 600);
    });
}

abreFechaPopover();
movimentoRio();
movimentoTanque();

