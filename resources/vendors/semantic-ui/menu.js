$(document).ready(function(){
    $('.ui .item').on('mouseover', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });             
});