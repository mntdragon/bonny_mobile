var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');
//if sth happen, code get email
connection.onError = function (error) {
  connection.log("Error in socket: " + error);
};
// Log messages from the server
connection.onmessage = function (message) {
  console.log('New message, Server: ' + message.data);
  document.getElementById("chat").innerHTML = message.data; //show message in html
};
// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Ping, connection now open - Bonny'); // Send the message 'Ping' to the server
};