#!/usr/bin/env node

/**
 * This script prepares the React application for GitHub Pages deployment.
 * It builds the app, adds a 404.html file that redirects to index.html,
 * and creates a .nojekyll file to disable Jekyll processing.
 */

import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'client', 'public');

// Ensure the dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

// Create a 404.html file that redirects to index.html
// This is a common pattern for single-page applications on GitHub Pages
const create404Html = () => {
  console.log('Creating 404.html...');
  
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CrossGo Software Development</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script takes the current URL and converts the path and query
      // string into just a query string, and then redirects the browser
      // to the new URL with only a query string and hash fragment.
      var pathSegmentsToKeep = 1; // Change to match your repo name depth (usually 1)

      var l = window.location;
      var segmentCount = l.pathname.split('/').length;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, pathSegmentsToKeep + 1).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    <p>Redirecting...</p>
  </body>
</html>`;

  fs.writeFileSync(path.join(DIST_DIR, '404.html'), html);
};

// Modify index.html to handle GitHub Pages routing
const modifyIndexHtml = () => {
  console.log('Modifying index.html...');
  
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  
  if (fs.existsSync(indexHtmlPath)) {
    let html = fs.readFileSync(indexHtmlPath, 'utf8');
    
    // Add redirect script right after opening head tag
    const redirectScript = `
  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    // This script checks to see if a redirect is present in the query string,
    // converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  <!-- End Single Page Apps for GitHub Pages -->`;
    
    html = html.replace('<head>', '<head>' + redirectScript);
    
    fs.writeFileSync(indexHtmlPath, html);
  } else {
    console.error('index.html not found in dist directory!');
  }
};

// Create .nojekyll file to disable Jekyll processing
const createNoJekyllFile = () => {
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');
};

// Build the application
const buildApp = () => {
  return new Promise((resolve, reject) => {
    console.log('Building application...');
    
    // Build only the frontend (no backend for GitHub Pages)
    const cmd = 'npx vite build';
    
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return reject(error);
      }
      
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      
      console.log(stdout);
      resolve();
    });
  });
};

// Main function
const main = async () => {
  try {
    await buildApp();
    create404Html();
    modifyIndexHtml();
    createNoJekyllFile();
    
    console.log('\n✓ GitHub Pages build complete!\n');
    console.log('Your site is ready to be deployed. To deploy to GitHub Pages:');
    console.log('1. Push your code to GitHub');
    console.log('2. Go to your repo Settings > Pages');
    console.log('3. Select "GitHub Actions" as your source');
    console.log('4. Use the "Static HTML" workflow to deploy from your main branch /dist folder\n');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
};

main();