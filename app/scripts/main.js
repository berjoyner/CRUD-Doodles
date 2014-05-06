$(document).ready(function() {

    var URL = "http://tiy-fee-rest.herokuapp.com/collections/amber";

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

         $.post(URL,listdonewobject);


var newItem =_.template($('#toodleTemplate').html(), formArr);   
$('.putItHere').html(newItem);

});

       $.ajax({
               url: 'http://tiy-fee-rest.herokuapp.com/collections/amber/',
               type: 'GET',
               data: 'data',
               error: function(data){
                    alert(FAIL);
                    },
                success:function(data){
                    alert(data);

                              var listing = data;
                              var html = '';
                              
                              for(var i=0, l=listing.length; i<l; i++) {
                                var obj = listing[i];

                                var stuff = obj.stuff;
                                var id    = obj._id;
                              
                                html += '<div data-id=\"' + id + '\"> '+stuff+'</div>\n';
                                // html += '<div> "'+id+'"</div>\n';

                            } // end for{} loop

                            $(".putItHere").html(html);
                            console.log();
                    }
                })
});

    $('li').click(function() {
    $(this).toggleClass('stroked');
    $(this).find('span').toggleClass('glyphicon glyphicon-pushpin')

    });

              

// additem, removeitem, updateitem, getitem 

