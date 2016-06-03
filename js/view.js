'use strict'

var View = function () {

	var updateView = function ( todos ) {

		// clear everything out from the DOM
		$('#todoList li').remove();

		// todo: use clone here and only write to the dom once
		for( var i = 0, len = todos.length; i < len; i++ ){
			$('#todoList').append( "<li>" + todos[i] + " <a data-index='" + i + "' href='#'>remove</a></li>" );
    }


	};

  //setup the handlers for the view
  var initView = function() {

		// add todo function
    $("#addTodoButton").on("click", function() {

			// this is referencing the addItem function from the controller
      var event = jQuery.Event("addItem");

			// this gets the value from the input
      event.todo = $('#addTodo').val();

			// check to make sure we have a value in the input
			if(event.todo) {
				// this calls the addItem function from the controller
				$('body').trigger(event);
			}

			// reset the input value to empty string
      $('#addTodo').val('');
    });

    // delete todo function
		$( "#todoList" ).on( "click", "a", function(e) {

			// get the item that was clicked
			var $todo = e.currentTarget;

			// referencing the method written in the controller
      var event = jQuery.Event("deleteItem");

			// establish the index of the todo item
			event.index = $($todo).attr('data-index');

			// trigger the delete method from the controller
      $('body').trigger(event);
    });

  };

  initView();

	// references a method in the controller to update the view when called
	return  {
		updateView: function (todos) {
      updateView(todos);
		}
	};
};
