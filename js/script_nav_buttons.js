$('.top nav a:nth-child(1)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(1)>div>div:nth-child(3)').addClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(1)>div>div+div>a').addClass('rotate_a');
    });

    $('.top nav a:nth-child(2)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(2)>div>div:nth-child(3)').addClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(2)>div>div+div>a').addClass('rotate_a');
    });

    $('.top nav a:nth-child(3)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(3)>div>div:nth-child(3)').addClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(3)>div>div+div>a').addClass('rotate_a');
    });

    $('.top nav a:nth-child(4)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(4)>div>div:nth-child(3)').addClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(4)>div>div+div>a').addClass('rotate_a');
});