const express = require('express');

const app = express();


app.use(express.static(__dirname + '/public'));

const hostname = process.env.IP;
const port = process.env.PORT;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
