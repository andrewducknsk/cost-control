const express = require('express');
const fs = require('fs');

const app = express();

app.get('/data', (req, res) => {
	fs.readFile('./data-base.json', 'utf8', (err, dataJson) => {
		if (err) {
			console.error('Can`t read file:', err);
			res.sendStatus(200);
			res.send({ status: 'ERROR', message: 'CANNOT_READ_FILE' });
			return;
		}

		try {
			const data = JSON.parse(dataJson);
			res.send({ status: 'OK', data });
		} catch (e) {
			console.error('Can`t parse JSON:', e);
		}
	});
});

app.post('/set-data', express.json(), (req, res) => {
	if (!req.body) {
		return res.send({ status: 'ERROR', message: 'NO_SEND_DATA' });
	}

	const jsonString = JSON.stringify(req.body);

	fs.writeFile('./data-base.json', jsonString, err => {
		if (err) {
			console.error('Can`t write json:', err);
			return res.send({ status: 'ERROR', message: 'CANNOT_WRITE_FILE', err });
		}

		res.send({ status: 'OK' });
	});
});

app.use((req, res, next) => {
	res.setHeader(`Access-Control-Allow-Origin`, `*`);
	res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`);
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', false);

	next();
});

app.listen(3001);
