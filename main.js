let http = require('http'); //require è uguale a import
http.createServer(function(request, response) { // ho creato un server webb con una funzione
    response.writeHead(200, {'Content-Type': 'text/plane'} // scrivo l'header della risposta, con codice 200
    );
    response.end('Hello World\n');
}).listen(8081);  // creato il server alla pagina in 8081
console.log("Server running on port 8081");