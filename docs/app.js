const i18n = {
  it: {
    title: "ZipFlow",
    subtitle: "Estrai e condividi file in modo privato, direttamente dal browser.",
    dropText: "Clicca per caricare o trascina qui il file",
    dropSubtext: "Supporta ZIP / RAR / 7Z (anche con password)",
    password: "Password (se richiesta)",
    start: "Avvia estrazione",
    waiting: "In attesa...",
    extracting: "Estrazione in corso...",
    files: "File estratti",
    download: "Scarica",
    share: "Condividi",
    downloadAll: "Scarica tutti",
    shareAll: "Condividi tutti",
    reset: "Apri un altro archivio"
  },
  en: {
    title: "ZipFlow",
    subtitle: "Extract and share files privately, directly in your browser.",
    dropText: "Click to upload or drag the file here",
    dropSubtext: "Supports ZIP / RAR / 7Z (with password)",
    password: "Password (if required)",
    start: "Start extraction",
    waiting: "Waiting...",
    extracting: "Extracting...",
    files: "Extracted files",
    download: "Download",
    share: "Share",
    downloadAll: "Download all",
    shareAll: "Share all",
    reset: "Open another archive"
  }
};

const isItalian = navigator.language?.toLowerCase().startsWith("it");
const t = isItalian ? i18n.it : i18n.en;

// apply translations
document.getElementById("title").textContent = t.title;
document.getElementById("subtitle").textContent = t.subtitle;
document.getElementById("drop-text").textContent = t.dropText;
document.getElementById("drop-subtext").textContent = t.dropSubtext;
document.getElementById("password-label").textContent = t.password;
document.getElementById("start-btn").textContent = t.start;
document.getElementById("progress-text").textContent = t.waiting;
document.getElementById("files-title").textContent = t.files;
document.getElementById("download-all").textContent = t.downloadAll;
document.getElementById("share-all").textContent = t.shareAll;
document.getElementById("reset-btn").textContent = t.reset;

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const progressSection = document.getElementById("progress-section");
const uploadSection = document.getElementById("upload-section");
const tableSection = document.getElementById("table-section");
const startBtn = document.getElementById("start-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const passwordInput = document.getElementById("password-input");
const fileTable = document.getElementById("file-table");
const filesCount = document.getElementById("files-count");

let selectedFile = null;
let extractedFiles = [];

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("dragover");
});
dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragover"));
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) handleFile(file);
});

function handleFile(file) {
  selectedFile = file;
  uploadSection.classList.add("hidden");
  progressSection.classList.remove("hidden");
  progressText.textContent = t.waiting;
}

startBtn.addEventListener("click", async () => {
  if (!selectedFile) return;
  progressText.textContent = t.extracting;
  progressBar.style.width = "20%";

  try {
    const password = passwordInput.value || undefined;
    const arrayBuffer = await selectedFile.arrayBuffer();

    progressBar.style.width = "40%";

    await LibArchive.init({
      wasmUrl: "https://cdn.jsdelivr.net/npm/libarchive.js@2.0.2/dist/libarchive.wasm"
    });

    progressBar.style.width = "60%";

    const archive = await LibArchive.open(arrayBuffer, { password });

    const files = [];
    for await (const entry of archive) {
      if (entry.filetype === "file") {
        const content = await entry.readData();
        files.push({
          name: entry.pathname,
          blob: new Blob([content]),
        });
      }
    }

    extractedFiles = files;
    renderTable(files);

    progressBar.style.width = "100%";
    progressSection.classList.add("hidden");
    tableSection.classList.remove("hidden");
  } catch (err) {
    progressText.textContent = "Errore: " + err.message;
  }
});

function renderTable(files) {
  fileTable.innerHTML = "";
  filesCount.textContent = files.length.toString();

  for (const file of files) {
    const row = document.createElement("div");
    row.className = "file-row";

    const left = document.createElement("div");
    left.className = "file-name";

    const icon = document.createElement("i");
    icon.className = getIconByExt(file.name);

    const name = document.createElement("span");
    name.textContent = file.name;

    left.appendChild(icon);
    left.appendChild(name);

    const actions = document.createElement("div");
    actions.className = "file-actions";

    const downloadBtn = document.createElement("button");
    downloadBtn.className = "btn primary";
    downloadBtn.textContent = t.download;
    downloadBtn.onclick = () => downloadFile(file);

    const shareBtn = document.createElement("button");
    shareBtn.className = "btn warn";
    shareBtn.textContent = t.share;
    shareBtn.onclick = () => shareFile(file);

    actions.appendChild(downloadBtn);
    actions.appendChild(shareBtn);

    row.appendChild(left);
    row.appendChild(actions);
    fileTable.appendChild(row);
  }
}

function getIconByExt(filename) {
  const ext = filename.split(".").pop().toLowerCase();
  const map = {
    pdf: "fa-solid fa-file-pdf",
    doc: "fa-solid fa-file-word",
    docx: "fa-solid fa-file-word",
    ppt: "fa-solid fa-file-powerpoint",
    pptx: "fa-solid fa-file-powerpoint",
    xls: "fa-solid fa-file-excel",
    xlsx: "fa-solid fa-file-excel",
    mp3: "fa-solid fa-file-audio",
    wav: "fa-solid fa-file-audio",
    mp4: "fa-solid fa-file-video",
    jpg: "fa-solid fa-file-image",
    jpeg: "fa-solid fa-file-image",
    png: "fa-solid fa-file-image",
    txt: "fa-solid fa-file-lines"
  };
  return map[ext] || "fa-solid fa-file";
}

function downloadFile(file) {
  const url = URL.createObjectURL(file.blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name.split("/").pop();
  a.click();
  URL.revokeObjectURL(url);
}

async function shareFile(file) {
  if (!navigator.share) {
    alert("Condivisione non supportata su questo browser.");
    return;
  }
  const shareFile = new File([file.blob], file.name.split("/").pop(), { type: file.blob.type || "application/octet-stream" });
  await navigator.share({
    files: [shareFile],
    title: file.name
  });
}

document.getElementById("download-all").addEventListener("click", async () => {
  for (const file of extractedFiles) {
    downloadFile(file);
    await waitForUser(400);
  }
});

document.getElementById("share-all").addEventListener("click", async () => {
  if (!navigator.share) {
    alert("Condivisione non supportata su questo browser.");
    return;
  }
  for (const file of extractedFiles) {
    await shareFile(file);
    await waitForUser(400);
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  selectedFile = null;
  extractedFiles = [];
  fileInput.value = "";
  uploadSection.classList.remove("hidden");
  progressSection.classList.add("hidden");
  tableSection.classList.add("hidden");
  progressBar.style.width = "0%";
  progressText.textContent = t.waiting;
});

function waitForUser(ms) {
  return new Promise((r) => setTimeout(r, ms));
}