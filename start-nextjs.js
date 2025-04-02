// Simple script to start Next.js development server
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Run next dev command with turbopack for faster development
const nextDev = spawn('npx', ['next', 'dev', '--turbo'], {
  stdio: 'inherit',
  cwd: __dirname,
  env: {
    ...process.env,
    PORT: process.env.PORT || '3000',
    HOSTNAME: '0.0.0.0', // Allow connections from all hosts
  },
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down Next.js server...');
  nextDev.kill('SIGINT');
  process.exit(0);
});

nextDev.on('close', (code) => {
  console.log(`Next.js server exited with code ${code}`);
  process.exit(code);
});