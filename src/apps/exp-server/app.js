import http from 'http';

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`
    <html>
      <head>
        <title>My First Server</title>
      </head>
      <body>
        <h1>Hello World!!!!!!</h1>
      </body>
    </html>`)
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
