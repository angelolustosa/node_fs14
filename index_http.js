const http = require('http');

// Crie um servidor HTTP
const server = http.createServer((req, res) => {
  // Verifique o método da solicitação e a URL
  if (req.method === 'GET') {
    if (req.url === '/produtos') {
      // Se a solicitação for GET para /produtos, retorne 'get produtos'
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('get produtos');
    } else if (req.url === '/servicos') {
      // Se a solicitação for GET para /servicos, retorne 'servicos' no navegador
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<html><body>servicos</body></html>');
    } else {
      // Se a URL não for reconhecida, retorne um erro 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } else {
    // Se o método da solicitação não for GET, retorne um erro 405 (Método não permitido)
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('405 Method Not Allowed');
  }
});

// Defina a porta em que o servidor irá ouvir
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
