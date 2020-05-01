$('.main>div>div>div+div+div>div>div:nth-child(1)>div>div:nth-child(1), .main>div>div>div+div+div>div>div:nth-child(1)>div>div:nth-child(2)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(1)>div>div:nth-child(3)').toggleClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(1)>div>div+div>a').toggleClass('rotate_a');
    });

    $('.main>div>div>div+div+div>div>div:nth-child(2)>div>div:nth-child(1), .main>div>div>div+div+div>div>div:nth-child(2)>div>div:nth-child(2)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(2)>div>div:nth-child(3)').toggleClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(2)>div>div+div>a').toggleClass('rotate_a');
    });

    $('.main>div>div>div+div+div>div>div:nth-child(3)>div>div:nth-child(1), .main>div>div>div+div+div>div>div:nth-child(3)>div>div:nth-child(2)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(3)>div>div:nth-child(3)').toggleClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(3)>div>div+div>a').toggleClass('rotate_a');
    });

    $('.main>div>div>div+div+div>div>div:nth-child(4)>div>div:nth-child(1), .main>div>div>div+div+div>div>div:nth-child(4)>div>div:nth-child(2)').click(function(){
    $('.main>div>div>div+div+div>div>div:nth-child(4)>div>div:nth-child(3)').toggleClass('d-block');
    $('.main>div>div>div+div+div>div>div:nth-child(4)>div>div+div>a').toggleClass('rotate_a');
});