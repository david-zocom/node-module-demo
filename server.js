const http = require('http');
const fs = require('fs');

let server = http.createServer((request, response) => {
	console.log('Servern har tagit emot ett request med url = ' + request.url);
	if( request.url == '/bye' ) {
		response.write('Thank you for visiting. Please come again!');
		response.end();
	} else {
		const readStream = fs.createReadStream('./index.html');
		readStream.pipe(response);
	}
})
// server.on(...)
const port = 2000;
server.listen(port);
console.log('Servern lyssnar på port 2000...');
