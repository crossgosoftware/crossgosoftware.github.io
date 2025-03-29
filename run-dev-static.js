#!/usr/bin/env node

/**
 * This script runs the Vite development server for a frontend-only setup.
 * It's particularly useful for GitHub Pages projects where we don't need a backend server.
 */

import { exec } from 'child_process';

console.log('Starting Vite development server...');

// Run Vite dev server
const childProcess = exec('npx vite --port 3000');

// Forward stdout to console
childProcess.stdout.on('data', (data) => {
  console.log(data.toString().trim());
});

// Forward stderr to console
childProcess.stderr.on('data', (data) => {
  console.error(data.toString().trim());
});

// Handle process termination
childProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Vite process exited with code ${code}`);
    process.exit(code);
  }
});

// Handle SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('Shutting down Vite server...');
  childProcess.kill('SIGINT');
  process.exit(0);
});