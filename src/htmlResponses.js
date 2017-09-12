const fs = require('fs');
// pull in the file system module
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const index3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getIndex2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index2);
  response.end();
};

const getIndex3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index3);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getIndex2 = getIndex2;
module.exports.getIndex3 = getIndex3;
