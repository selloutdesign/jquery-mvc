'use strict'
    // <div class="col s6 push-s3">
    //   <h3>Todo MVC</h3>
    //     <label for="addTodo">Add todo</label>
    //     <input type="text" id="addTodo" />
    //     <input type="button" value="add" id="addTodoButton" class="waves-effect waves-light btn"/>
    //   <ul id="todoList"></ul>
    // </div>


var mvcE = {};

mvcE.Model = function(){
	var items = [];

	var notifyController = function(){
		$('body').trigger('updateView');
	};

	// Public Methods
	return{
		
			addItem: function (item){
				items.push(item); // if I wanted to use 'this' here what would it be referencing?
				notifyController();
				console.log(items);	
			},
			getData: function (){
				return items;
			}

	};
};


mvcE.View = function(){

	var updateView = function( items ){
		$('#todoList li').remove();
		for( var i = 0, len = items.length; i < len; i++ ){
			$('#todoList').append( "<li>" + items[i] + " <a data-index='" + i + "' href='#'>remove</a></li>" );
    	}
	};

	// Get information from the User
	var initView = function(){


		$('#addTodoButton').on('click', function(event) {
			var e = jQuery.Event("addItem");
			var value = $('#addTodo').val();

			if(value) {
				e.todo = value;
				$('body').trigger(e)
				console.log(value);
			}

		});


	};

	initView();

	return {
		updateView: function(items){
			updateView(items);
		}
	};
};


mvcE.Controller = function(view, model){
	  var view = view;
  	  var model = model;

	// Pass information from the view to the model
	$('body').on('addItem', function(e){

		model.addItem(e.todo);
	});

	$('body').on('updateView', function(e){

		view.updateView( model.getData() );
	});



};

var model = mvcE.Model();
var view = mvcE.View();
var controller = mvcE.Controller(view, model);

