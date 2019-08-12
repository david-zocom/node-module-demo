// Här startar programmet
console.log('Välkommen!');

const data = require('./data.js');
console.log('Datan är: ', data);

const fs = require('fs');
const book = 'book.txt';
const readOptions = {
	encoding: 'utf8'
};
fs.readFile('./' + book, readOptions, (err, data) => {
	if( err ) {
		console.log(`Kunde inte hitta filen! Kontrollera att ${book} finns.`);
	} else {
		console.log('Läste från fil:', data);
	}
	// console.log('readFile: err=', err, ', data=', data);
});

const textToSave = `filhantering visar hur vi fs-modulen i Node
`;  // `\n` går lika bra
const writeOptions = {
	flag: 'a'
}
fs.writeFile('./blank.txt', textToSave, writeOptions, err => {
	if( err ) {
		console.log('Kunde inte spara text till blank.txt');
	} else {
		console.log('Texten är sparad i filen blank.txt.');
	}
})





console.log('Nu slutar programmet...');
