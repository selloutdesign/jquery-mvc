'use strict'

var Controller = function (view, model) {

  // setting function arguments to local variables
  var view = view;
  var model = model;

  // here we are binding these functions to the body so that we can access
  // them from the model and view
  $('body').on('addItem', function(event) {

    // referencing the addTodo method in the model
    model.addTodo( event.todo );
  });

  $('body').on('deleteItem', function(event) {

    // referencing the method in the model
    model.deleteTodo( event.index );
  });

  $('body').on('updateView', function() {

    // this is the tie between the view and model to refresh the data
    view.updateView( model.getData() );
  });

};
