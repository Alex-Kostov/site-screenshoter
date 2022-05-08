const Pageres = require('pageres');

const urls = ['https://www.aax.media/about/', 'https://www.aax.media/', 'https://techsmith.com/'];

(async () => {
	const pageres = await new Pageres({delay: 2});
	for (const url of urls) {
		await pageres.src( url, ['1920x1080']);
	}
	await pageres.dest(__dirname);
	await pageres.run();
    console.log('Finished generating screenshots!');
})();