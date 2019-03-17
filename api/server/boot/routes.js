'use strict';

module.exports = function(server) {
	server.get('/robots.txt', (req, res) => {
		res.type('text/plain');
		res.send('User-agent: *\nDisallow: /');
	});
};
