$(document).ready(function(){
    $('.clickable-row').click(function(){
        window.location = $(this).attr('href');
        return false;
    });
    $('.clickable-row td:last-child').click(function(e){
        e.stopPropagation()
    });
    $(".clickable-row td:last-child").on({
        mouseenter: function () {
            document.getElementById('index-table').classList.remove("table-hover");
        },
        mouseleave: function () {
            document.getElementById('index-table').classList.add("table-hover");
        }
    });
});