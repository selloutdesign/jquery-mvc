'use strict'

var Model = function () {

  // set up our data as an empty array
  var todos = [];

  // updateView is actually on the controller, here the model is just triggering
  //it everytime something changes on the model
	var notifyController = function () {
    $('body').trigger('updateView');
	}

  // These publci methods are returned as an object and can be accessed with the
  // Model.methodName syntax from the controller
	return  {

    addTodo: function ( todo ) {
      todos.push(todo);
      notifyController();
		},

    deleteTodo: function ( index ) {
      todos.splice(index,1);
      notifyController();
		},

    getData: function(){
      return todos;
    }

	};
};
