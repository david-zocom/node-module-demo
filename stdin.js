let stdin = process.openStdin();

stdin.on('data', data => {
	let input = data.toString().trim();
	console.log(`Data från standard input: "${input}"`);
	if( input === '1' ) {
		console.log('Du valde alternativ 1');
	}
})

console.log('Välkommen!');
console.log('1. Alternativ 1');
console.log('2. Alternativ 2');
