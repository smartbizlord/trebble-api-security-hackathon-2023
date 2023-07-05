const debug = require('debug')('movie_smart:server');
const app = require('../app');
const http = require('http');
const config = require('../config/auth');
const logger = require('../config/logger');


const normalizePort = (val) => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
}

const exitHandler = () => {
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
};

const onError = (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
}

const onListening = () => {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  
const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};
 
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    if (server) {
      server.close();
    }
  });

const port = normalizePort(config.port || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => {
    logger.info(`Listening to port ${port}`);
});

server.on('error', onError);
server.on('listening', onListening);