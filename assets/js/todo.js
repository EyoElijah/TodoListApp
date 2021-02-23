$('ul').on('click', 'li', function(e) {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

$('input:text').keyup(function(e) {
    if (e.which === 13) {
        let todoText = $(this).val();
        $(this).val('');
        $('ul').append("<li> <span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});
$('.fa-edit').click(function(e) {
    $('input:text').fadeToggle();
})