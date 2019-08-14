const fs = require('fs');

const { Transform } = require('stream');
const capitalizeStream = new Transform({
	transform(chunk, encodingIfString, callback) {
		let transformedChunk = chunk.toString().toUpperCase();
		this.push(transformedChunk);
		callback();
	}
});
let readStream = fs.createReadStream('./book.txt');
let writeStream = fs.createWriteStream('./copy of book.txt');
// readStream.pipe(writeStream);
readStream.pipe(capitalizeStream).pipe(writeStream);
