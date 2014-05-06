$(document).ready(function() {

var newItem =_.template($('#toodleTemplate').html(), formArr);

$('.putItHere').append(newItem);

    // formArr = [];
    $('input[type="button"]').click(function () {
        var listdo = $('#listdo').val();
        console.log(listdo);
        
var listdonewobject = {
	stuff:listdo
};

formArr.push(listdonewobject);
        console.log(formArr);

var newItem =_.template($('#toodleTemplate').html(), formArr);   
$('.putItHere').html(newItem);

});


    $('li').click(function() {
    $(this).toggleClass('stroked');
    $(this).find('span').toggleClass('glyphicon glyphicon-pushpin');

    });
});

