#!/usr/bin/env node
// Script to start Next.js application with turbopack
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("Starting Next.js application with turbopack...");

// Use npx next instead of node start-nextjs.js to prevent any startup issues
const nextDev = spawn('npx', ['next', 'dev', '--turbo'], {
  stdio: 'inherit',
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

process.on('SIGTERM', () => {
  console.log('Shutting down Next.js server...');
  nextDev.kill('SIGTERM');
  process.exit(0);
});

// Log any errors
nextDev.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

nextDev.on('close', (code) => {
  console.log(`Next.js server exited with code ${code}`);
  process.exit(code);
});