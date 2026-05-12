# ArchiveDrop
A privacy‑first, client‑side web app to extract ZIP/RAR/7Z files and download or share their contents directly from the browser.


<div align="center">
  <h1>📦 ZipFlow — Unpack & Share</h1>



  <p>
    ZipFlow is a fast, privacy‑first archive extractor that runs 100% in the browser.
    Open ZIP/RAR/7Z files, preview images, and download or share extracted content —
    all without uploading anything to a server.
  </p>

    

  <br>

  <!-- LIVE DEMO -->
 

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
