window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);
})

// caixas expansiveis
$('.caixa-container button').click(function(){
  let caixa = $(this).prev()
  if(caixa.hasClass('aberta')){
      caixa.removeClass('aberta')
      $(this).css('background-image', 'url("img/ico_saibamais_abre.png")')
  } else {
      caixa.addClass('aberta')
      $(this).css('background-image', 'url("img/ico_saibamais_fecha.png")')
  }
})
