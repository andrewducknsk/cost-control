const express = require('express');
const fs = require('fs');

const app = express();

const readFile = path => fs.readFileSync(path, 'utf8');

app.use((req, res, next) => {
  res.setHeader(`Access-Control-Allow-Origin`, `http://localhost:3000`);
  res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`);
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', false);

  next();
});

app.get('/history', (req, res) => {
  const base = readFile('./server/data-base.json');

  return res.send({ status: 'OK', data: JSON.parse(base) });
});

app.post('/set-history', express.json(), (req, res) => {
  if (!req.body) {
    return res.send({ status: 'ERROR', message: 'NO_SEND_DATA' });
  }

  const currentBaseData = JSON.parse(readFile('./server/data-base.json'));
  const lastId = currentBaseData[currentBaseData.length - 1].id;
  const preparedDataToWrite = { ...req.body, id: lastId + 1 };
  const getDataToWrite = (dataBase, routeData) => JSON.stringify([...dataBase, routeData]);

  fs.writeFile(
    './server/data-base.json',
    getDataToWrite(currentBaseData, preparedDataToWrite),
    err => {
      if (err) {
        console.error('Can`t write json:', err);
        return res.send({ status: 'ERROR', message: 'CANNOT_WRITE_FILE', err });
      }

      return res.send({ status: 'OK', data: [preparedDataToWrite] });
    }
  );
});

app.listen(3001);
