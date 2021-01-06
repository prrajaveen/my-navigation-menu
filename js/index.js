
    $(".open").click(function(){
        console.log('raja')
        $('.mobile-nav').addClass('show')
        $('.mobile-nav').removeClass('hide')
    })
    $('.close').click(function(){
        console.log('hide')
        $('.mobile-nav').removeClass('show')
        $('.mobile-nav').addClass('hide')
    })
    $('.mid,.right,.search').click(function(){
        console.log('fire')
        $('.mobile-nav').removeClass('show')
        $('.mobile-nav').addClass('hide')
    })

 
