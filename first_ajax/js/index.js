console.log("Hello from the JavaScript console!");

// Your AJAX request here

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b',
  type: 'GET',
  success: function(message) {
    console.log(message);
  },
  error: function(errorMessage) {
    console.log(errorMessage)
  }
});

// Add another console log here, outside your AJAX request

console.log("This code came after the AJAX!");