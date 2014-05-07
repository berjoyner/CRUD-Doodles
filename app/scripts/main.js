// $(document).ready(function() {

// var newItem =_.template($('#toodleTemplate').html(), formArr);

// $('.putItHere').append(newItem);

//     ///// formArr = []; Appending List Items to List on DOM 

//     $('input[type="button"]').click(function () {
//         var listdo = $('#listdo').val();
//         console.log(listdo);
        
// var listdonewobject = {
//  stuff:listdo
// };

// formArr.push(listdonewobject);
//         console.log(formArr);

//         /////POST to URL from Allo Allo'

// var URL = "http://tiy-fee-rest.herokuapp.com/collections/amber";
//          $.post(URL,listdonewobject);


// var newItem =_.template($('#toodleTemplate').html(), formArr);   
// $('.putItHere').html(newItem);

// });
//         /////GET to Allo Allo' Array Replace from URL 

//        $.ajax({
//                url: 'http://tiy-fee-rest.herokuapp.com/collections/amber/',
//                type: 'GET',
//                data: 'data',
//                error: function(data){
//                     alert(FAIL);
//                     },
//                 success:function(data){
//                     // alert(data);

//                               var listing = data;
//                               var html = '';
                              
//                               for(var i=0, l=listing.length; i<l; i++) {
//                                 var obj = listing[i];

//                                 var stuff = obj.stuff;
//                                 var id    = obj._id;
                              
//                                 html += '<div class="delete btn glyphicon glyphicon-remove" name="item" id="test" data-id=\"' + id + '\"> '+stuff+'</div>\n';
                                
//                                 // html += '<div> "'+id+'"</div>\n';

//                             } // end for{} loop

//                             $(".putItHere").html(html);
//                             console.log();
//                     }
//                 });                

//         //////Updating Data on Allo Allo' and/or URL 

//             // Database.prototype.update = function ( stuff, id ) {
//             //         if (this.data.indexOf(stuff) !== -1) {
//             //           this.destroyIndex(stuff); // First destroy existing index for object
//             //           obj[this.conf.uniqueKey] = stuff;
//             //           this.conf.driver.setItem(stuff, id); // Override object
//             //           this.buildIndex(id); // Rebuild index
//             //           return id;
//             //         }
//             //       };


//         ///// Deleting Data on Allo' Allo and URL


//         // $(".btn").click(function(e) {
//         //   e.preventDefault();

//                $.ajax({
//                    url: 'http://tiy-fee-rest.herokuapp.com/collections/amber/' + "data-id",
//                    type: 'DELETE',
//                    data: 'data',
//                    error: function(data){
//                     alert('U FAIL');
//                    },
//                    success: function(data) {
//                     alert('YA SUCCESS!')

//                     // $(".deletedHere")html(html);
//                    } 
//                }) //end ajax

//                // $(".putItHere")on("click", ".deletedHere", this.deletedHere)

         

//     // });
// });

//     // $('li').click(function() {
//     // $(this).toggleClass('stroked');
//     // $(this).find('span').toggleClass('glyphicon glyphicon-pushpin')

//     // });

              

// // additem, removeitem, updateitem, getitem 

