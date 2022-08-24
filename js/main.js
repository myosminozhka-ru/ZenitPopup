$(function(){
    $('.feedback').click(function() {
        $('.form-wrapper').addClass('opened');
        return false;
    });
    $('.form-wrapper .icon-close').click(function() {
        $('.form-wrapper').removeClass('opened');
        return false;
    });
    $('.form-wrapper__no').click(function() {
        $('.form-wrapper').removeClass('opened');
    });
    $(document).click( function(event){
        if( $(event.target).closest('.form-wrapper-inner').length ) 
          return;
        $('.form-wrapper').removeClass('opened');
        event.stopPropagation();
    })
    $(document).keydown(function(event){
        if (event.which == 27) {
            $('.form-wrapper').removeClass('opened');
        }
    });
});
