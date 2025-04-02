import { exec } from 'child_process';
import { createServer } from 'http';
import * as http from 'http';

// This file serves as a bridge between the existing infrastructure and Next.js
console.log('Starting Next.js application...');

// Create a proxy server that listens on port 5000 and forwards to port 3000
const proxyServer = createServer((req, res) => {
  const options = {
    hostname: '172.31.128.50', // Use the internal IP address that Next.js binds to
    port: 3000,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxyReq, { end: true });

  proxyReq.on('error', (e) => {
    console.error('Proxy request error:', e);
    
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Error Connecting to Next.js</title>
          <style>
            body { font-family: system-ui, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            h1 { color: #e53e3e; }
            pre { background: #f7fafc; padding: 15px; border-radius: 5px; overflow: auto; }
          </style>
        </head>
        <body>
          <h1>Connection Error</h1>
          <p>Could not connect to the Next.js application server. It may still be starting up.</p>
          <pre>${e.message}</pre>
        </body>
      </html>
    `);
  });
});

// Listen on port 5000
proxyServer.listen(5000, () => {
  console.log('Proxy server running on port 5000, forwarding to Next.js on port 3000');
});

// Start Next.js in a child process with explicit host binding
const nextProcess = exec('npx next dev --turbo --hostname 0.0.0.0', (error, stdout, stderr) => {
  if (error) {
    console.error('Failed to start Next.js:', error);
  }
});

nextProcess.stdout?.pipe(process.stdout);
nextProcess.stderr?.pipe(process.stderr);

// Handle termination signals
process.on('SIGINT', () => {
  console.log('Shutting down...');
  nextProcess.kill();
  proxyServer.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Shutting down...');
  nextProcess.kill();
  proxyServer.close();
  process.exit(0);
});