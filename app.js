const Pageres = require('pageres');

const urls = ['https://www.youtube.com/', 'https://www.npmjs.com/package/pageres', 'https://wordpress.org/'];

(async () => {
	const pageres = await new Pageres({delay: 2});
	for (const url of urls) {
		await pageres.src( url, ['1920x1080'], {filename: '<%= url %>-<%= date %>-<%= size %><%= crop %>'});
	}
	await pageres.dest(__dirname + '/images');
	await pageres.run();
    console.log('Finished generating screenshots!');
})();