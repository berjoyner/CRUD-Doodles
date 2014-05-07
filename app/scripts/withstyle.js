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
                              
                                html += '<div class="delete btn glyphicon glyphicon-remove" name="item" id="test" data-id=\"' + id + '\"> '+item+'</div>\n';
                                
                                // html += '<div> "'+id+'"</div>\n';

                            }; // end for{} loop

                            $(".putItHere").html(html);
                            console.log();
                    }
                }); 

  },

  removeTodoodles: function() {

        $.ajax({
              url: 'http://tiy-fee-rest.herokuapp.com/collections/amber/536a887575fbec02000002e4',
                   type: 'DELETE',
                   data: 'data',
                   dataType:'JSON',
                   error: function(data){
                    alert('U FAIL');
                   },
                   success: function(data) {
                    alert('YA SUCCESS!')
                   } 
               }) //end ajax

  }
};

