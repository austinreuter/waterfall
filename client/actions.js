const { test } = require('./pureLogic.js');
const ajax = require('ajax');

$(document).ready(function() {
	$('#userInput').on('keyup', (e) => {
		console.log(e.target.value);

    console.log(test);
    test();
	});
  $('#userButton').on('click', (e) => {
  	console.log('sup')
  	e.preventDefault();
    console.log(e);
  }); 
});