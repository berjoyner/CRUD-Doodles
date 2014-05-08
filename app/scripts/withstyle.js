$(document).ready(function() {

  myTodoodles.init();

});

var myTodoodles = {

  init: function() {
    this.initStyling();
    this.initEvents();
  },

  initStyling: function() {
    
    this.renderPostTodooles();

  },

  initEvents: function() {
    $("form").on("submit", this.inputTodoodles);
    $(".putItHere").on("click",".removeDoodle", this.removeTodoodles);
  },

/////POST request to URL from DOM

  inputTodoodles: function(e) {
    e.preventDefault();

      var newTodoodle = {
        item: $("#listdo").val(),
      };

      console.log(newTodoodle);

     $.ajax({
              url:'http://tiy-fee-rest.herokuapp.com/collections/amber/',
              type:'POST',
              data: newTodoodle,
              dataType: 'JSON',
              error: function(data){
                alert('U FAIL');
              },
              success: function(data) {
                alert('YA SUCCESS!');

                    myTodoodles.renderPostTodooles(data);
                    
                   }
               }); //end ajax

  },

  /////GET to DOM Array Replace from URL 

  renderPostTodooles: function() {

    $.ajax({
               url: 'http://tiy-fee-rest.herokuapp.com/collections/amber/',
               type: 'GET',
               data: 'data',
               dataType:'JSON',
               error: function(data){
                    alert(FAIL);
                    },
                success:function(data){
                    // alert(data);

                              var listing = data;
                              var html = '';
                              
                              for(var i=0, l=listing.length; i<l; i++) {
                                var obj = listing[i];

                                var item = obj.item;
                                var id    = obj._id;
                                
                                html += '<li data-postId=' + listing[i]._id + '>' + listing[i].item + '<button class ="glyphicon glyphicon-cog addDoodle" id="addDoodle"></button><button class="glyphicon glyphicon-trash removeDoodle" id="removeDoodle"></button></li>';
                                 
                                // html += '<div> "'+id+'"</div>\n';

                            }; // end for{} loop

                            $(".putItHere").html(html);
                            console.log();
                    }
                }); 

  },

  /////DELETE on click from DOM & URL 

removeTodoodles: function(e) {
  e.preventDefault();

    var $thisDoodle = $(this).closest("li");
    var postId = $thisDoodle.data("postid");
    
    $.ajax({
    type: "DELETE",
    url: "http://tiy-fee-rest.herokuapp.com/collections/amber/" + postId,
    error: function(jqXHR, status, error) {
        alert("YOU FAIL!");
    }, 
    success: function(data) {
        alert("YAYYYYY");
        myTodoodles.renderPostTodooles(data);  

      }
    });
}

  // removeTodoodles: function() {

  //   var $thisPost = $(this).closest("li")
  //   var postId = $thisPost.data("postid");
  //   $.ajax({
  //     url: "http://tiy-fee-rest.herokuapp.com/collections/amber" + postId,
  //     type: "DELETE",
  //     error: function(jqXHR, status, error) {
  //       alert("couldnt delete");
  //     }, 
  //     success: function(data) {
  //        myTodoodles.renderPostTodooles();  
  //     }
  //   });
  // },


  //       $.ajax({
  //             url: "http://tiy-fee-rest.herokuapp.com/collections/amber/536a897c75fbec02000002eb",
  //                  type: 'DELETE',
  //                  error: function(jqXHR, status, error){
  //                   alert('U FAIL');
  //                  },
  //                  success: function(data) {
  //                   alert('YA SUCCESS!');
  //                  } 
  //              }) //end ajax

  // }
};

