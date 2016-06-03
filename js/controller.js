
var Controller = function (view, model) {

  // setting fucntion arguments to local variables
  var view = view;
  var model = model;

  // here we are binding these functions to the body so that we can access
  // them from the model and view
  $('body').bind('addItem', function(e) {
    // referencing the method in the model
    model.addTodo( e.todo );
  });

  $('body').bind('deleteItem', function(e) {
    // referencing the method in the model
    model.deleteTodo( e.index );
  });

  $('body').bind('updateView', function(e) {
    // this is the tie between the view and model to refresh the data
    view.updateView( model.getData() );
  });

};
