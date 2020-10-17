$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass();
        $(this).addClass('active');
        $('.secciones article').hide()

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});

//tab1
$(document).ready(function(){
    $('ul.tabs1 li a :first').addClass('active');
    $('.secciones1 article').hide();
    $('.secciones1 article:first').show();

    $('ul.tabs1 li a').click(function(){
        $('ul.tabs1 li a').removeClass();
        $(this).addClass('active');
        $('.secciones1 article').hide()

        var activeTab1 = $(this).attr('href');
        $(activeTab1).show();
        return false;
    });
});

//tab2
$(document).ready(function(){
    $('ul.tabs2 li a:first').addClass('active');
    $('.secciones2 article').hide();
    $('.secciones2 article:first').show();

    $('ul.tabs2 li a').click(function(){
        $('ul.tabs2 li a').removeClass();
        $(this).addClass('active');
        $('.secciones2 article').hide()

        var activeTab2 = $(this).attr('href');
        $(activeTab2).show();
        return false;
    });
});

