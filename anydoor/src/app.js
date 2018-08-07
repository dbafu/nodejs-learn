const http = require('http');
const chalk = require('chalk');
const path = require('path');
const route = require('./helper/route')
const conf = require('./config/defaultconfig');

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url)
  console.log(filePath);

  route(req, res, filePath)

})

server.listen(conf.port, conf.host, () => {
  const addr = `http://${conf.host}:${conf.port}`
  console.log(`server started at ${chalk.green(addr)}`);
})
