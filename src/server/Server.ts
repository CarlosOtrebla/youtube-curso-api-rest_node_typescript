import express from 'express'

const server = express();

server.get('/',(req, res ) => {
  return res.send('To rodando bem')
});

export { server };