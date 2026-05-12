<div align="center">
  <h1>📦 ArchiveDrop — Unpack & Share</h1>

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/46dbf7f659b14f65962aa296f5e0e308)](https://app.codacy.com/gh/R0mb0/ArchiveDrop/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![pages-build-deployment](https://github.com/R0mb0/ArchiveDrop/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/R0mb0/ArchiveDrop/actions/workflows/pages/pages-build-deployment)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/R0mb0/ArchiveDrop)
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/R0mb0/ArchiveDrop)
[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit)
[![Donate](https://img.shields.io/badge/PayPal-Donate%20to%20Author-blue.svg)](http://paypal.me/R0mb0)

  <p>
    ArchiveDrop is a fast, privacy‑first archive extractor that runs 100% in the browser.
    Open ZIP/RAR/7Z files, preview images, and download or share extracted content —
    all without uploading anything to a server.
  </p>

<div align="center">
  <a href="http://paypal.me/R0mb0">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Light.svg">
      <img alt="Saved you time? Support the dev" src="https://github.com/R0mb0/Support_the_dev_badge/blob/main/Badge/SVG/Support_the_dev_badge_Default.svg">
    </picture>
  </a>
</div>

  <br>

  <!-- LIVE DEMO -->

 ## [👉 Click here to test the app! 👈](https://github.com/R0mb0/ArchiveDrop)



</div>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li><strong>Client‑Side Extraction:</strong> All archives are processed locally in the browser with zero server upload.</li>
  <li><strong>ZIP / RAR / 7Z Support:</strong> Reads the most common archive formats.</li>
  <li><strong>Instant File Search:</strong> Find any extracted file immediately.</li>
  <li><strong>Folder Tree View:</strong> Explore content in a clean tree layout.</li>
  <li><strong>Image Preview:</strong> Full‑screen preview for images with one click.</li>
  <li><strong>Download or Share:</strong> Download files or share them via the Web Share API.</li>
  <li><strong>Modern UI:</strong> Glassmorphism design, responsive layout, and smooth interactions.</li>
  <li><strong>PWA Ready:</strong> Works offline and can be installed like a native app.</li>
</ul>

<h2>🧠 How It Works</h2>
<ol>
  <li><strong>File Upload:</strong> The user drops an archive (ZIP/RAR/7Z) into the drop zone.</li>
  <li><strong>Client Extraction:</strong> The archive is parsed inside a Web Worker using <code>libarchive.js</code>.</li>
  <li><strong>File Indexing:</strong> Extracted files are normalized and rendered into the tree view and table.</li>
  <li><strong>Preview & Actions:</strong> Users can preview images and download or share any file.</li>
</ol>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><strong>HTML + CSS + Vanilla JS</strong></li>
  <li><strong>libarchive.js</strong> (WASM + Web Worker)</li>
  <li><strong>Font Awesome</strong> (icons)</li>
  <li><strong>PWA Service Worker</strong></li>
</ul>

<h2>⚙️ Local Setup</h2>
<ol>
  <li>Clone or download the repository.</li>
  <li>Make sure all assets are local (no external CDN links).</li>
  <li>Open <code>index.html</code> in your browser or run a local server.</li>
</ol>

<h2>🔒 Privacy</h2>
<p>
  ZipFlow never uploads files. Everything runs locally in the browser.
  Your archives remain private and never leave your device.
</p>
