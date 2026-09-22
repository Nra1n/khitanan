/* =========================================================
   UNDANGAN KHITANAN DIGITAL - script.js
   Semua data diubah pada object invitationData di bawah ini.
   ========================================================= */

const invitationData = {
  childName: "Farhan",
  childFullName: "Muhammad Farhan",
  eventTitle: "Tasyakuran Khitan",
  eventDate: "09 Juli 2026",
  eventDay: "Minggu",
  eventTime: "09.00 - 13.00 WITA",
  eventISO: "2026-07-09T09:00:00+08:00",

  fatherName: "Bapak Ahmad",
  motherName: "Ibu Siti",

  address: "Jl. Contoh Alamat No. 123, Kelurahan Melati, Kecamatan Kota, Provinsi, 12345",
  mapsUrl: "https://www.google.com/maps",
  mapPreviewUrl: "https://maps.google.com/maps?q=-6.2088,106.8456&z=15&output=embed",

  whatsappNumber: "6281234567890",

  heroImage: "assets/images/child.jpg",
  music: "assets/audio/music.mp3",

  gallery: [
    { src: "assets/images/gallery-1.jpg", alt: "Foto dokumentasi 1" },
    { src: "assets/images/gallery-2.jpg", alt: "Foto dokumentasi 2" },
    { src: "assets/images/gallery-3.jpg", alt: "Foto dokumentasi 3" },
    { src: "assets/images/gallery-4.jpg", alt: "Foto dokumentasi 4" }
  ],

  texts: {
    openingLabel: "Undangan Khitanan",
    openingGuest: "Kepada Yth. Bapak / Ibu / Saudara / i",
    openButton: "Buka Undangan",
    heroLabel: "Undangan Khitan",
    heroSubline: "Putra dari ",
    bismillah: "Bismillahirrahmanirrahim",
    salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    sambutanBody: "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara tasyakuran khitanan putra kami.",
    sambutanBody2: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada putra kami.",
    putraOf: "Putra dari",
    countdownLabel: "Menuju Hari Bahagia",
    eventDayLbl: "Hari",
    eventDateLbl: "Tanggal",
    eventTimeLbl: "Waktu",
    eventLocLbl: "Lokasi Acara",
    locationNote: "Kami menantikan kehadiran Bapak/Ibu/Saudara/i di kediaman kami.",
    mapsTitle: "Denah Lokasi",
    doaTitle: "Doa & Harapan",
    doaText: "Semoga putra kami menjadi anak yang sholeh, berbakti kepada kedua orang tua, serta diberikan kesehatan, keberkahan, dan masa depan yang baik. Aamiin.",
    rsvpTitle: "Konfirmasi Kehadiran",
    rsvpNote: "Mohon konfirmasi kehadiran Anda untuk memudahkan kami mempersiapkan acara. Terima kasih.",
    rsvpButton: "Konfirmasi via WhatsApp",
    mapsButton: "Buka Google Maps",
    galeriTitle: "Gallery",
    ucapanTitle: "Kirim Ucapan & Doa",
    ucapanNamePh: "Nama Anda",
    ucapanTextPh: "Tulis ucapan dan doa untuk putra kami...",
    ucapanButton: "Kirim Ucapan",
    ucapanSaved: "Terima kasih, ucapan Anda telah kami terima.",
    formNote: "Ucapan tersimpan di perangkat ini (demo).",
    footerThanks: "Atas Kehadiran dan Doa Restunya",
    footerClosing: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
    footerFamily: "Keluarga Besar ",
    madeBy: "Undangan Digital",
    senderFabLabel: "Atur Nama Penerima",
    senderTitle: "Atur Nama Penerima",
    senderSubtitle: "Ketik nama penerima undangan, lalu salin link yang dihasilkan. Penerima hanya melihat tampilan undangan tanpa menu ini.",
    senderPlaceholder: "Contoh: Bapak Budi",
    senderCopy: "Salin Link",
    senderWa: "Kirim via WhatsApp",
    senderNote: "Link hasil sudah berisi nama penerima untuk tampilan terpisah.",
    senderNeedName: "Silakan isi nama penerima terlebih dahulu.",
    senderCopied: "Link undangan untuk {nama} berhasil disalin.",
    senderShared: "Membuka WhatsApp untuk dikirim ke {nama}..."
  }
};

/* =========================================================
   UTILITIES
   ========================================================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const bypass = {
  get: (obj, path) => path.split(".").reduce((o, k) => (o != null ? o[k] : undefined), obj)
};

function fillBindings() {
  $$("[data-bind]").forEach((el) => {
    const val = bypass.get(invitationData, el.dataset.bind);
    if (val != null) {
      if (el.matches("img")) el.src = val;
      else if (el.matches("input,textarea")) el.placeholder = val;
      else el.textContent = val;
    }
  });
}

function fillCommon() {
  $("title").textContent = `Undangan Khitanan ${invitationData.childFullName}`;
  setMeta("description", `Kami mengundang Bapak/Ibu/Saudara/i dalam acara tasyakuran khitanan ${invitationData.childFullName}. ${invitationData.eventDay}, ${invitationData.eventDate} pukul ${invitationData.eventTime}.`);
  setMeta("og:title", `Undangan Khitanan ${invitationData.childFullName}`);
  setMeta("og:description", `${invitationData.eventTitle} - ${invitationData.eventDate}`);
  setMeta("og:image", invitationData.heroImage);
  setMeta("og:url", location.href);
  setCanonical(location.href);
}

function setMeta(prop, content) {
  let el = document.querySelector(`meta[property="${prop}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
function setCanonical(href) {
  let el = document.querySelector("link[rel=canonical]");
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", "canonical"); document.head.appendChild(el); }
  el.setAttribute("href", href);
}

/* =========================================================
   OPENING SCREEN
   ========================================================= */
function initOpening() {
  const opening = $("#opening");
  const btn = $("#openBtn");
  const audio = $("#bgm");
  const musicFab = $("#musicFab");

  document.body.classList.add("locked");

  btn.addEventListener("click", () => {
    document.body.classList.remove("locked");
    opening.classList.add("closed");
    playMusic();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !opening.classList.contains("closed")) {
      document.body.classList.remove("locked");
      opening.classList.add("closed");
      playMusic();
    }
  });
}

/* =========================================================
   AUDIO
   ========================================================= */
const audio = $("#bgm");
const musicFab = $("#musicFab");
let audioPlayed = false;

function playMusic() {
  if (audioPlayed) return;
  audioPlayed = true;
  audio.play()
    .then(() => { musicFab.classList.add("playing"); setFabIcon("music"); })
    .catch(() => { audioPlayed = false; });
}

function toggleMusic() {
  if (audio.paused) {
    audio.play()
      .then(() => { musicFab.classList.add("playing"); setFabIcon("music"); })
      .catch(() => {});
  } else {
    audio.pause();
    musicFab.classList.remove("playing");
    setFabIcon("muted");
  }
}

function setFabIcon(state) {
  const defs = document.getElementById("musicIcon");
  if (!defs) return;
  const base = defs.querySelector(`[data-icon="${state}"]`);
  if (!base) return;
  musicFab.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${base.innerHTML}</svg>`;
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
function initReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function initCountdown() {
  const target = new Date(invitationData.eventISO);
  const status = $("#countdownStatus");

  function tick() {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      $("#cdDays").textContent = "00";
      $("#cdHours").textContent = "00";
      $("#cdMins").textContent = "00";
      $("#cdSecs").textContent = "00";
      status.textContent = "Acara telah selesai. Terima kasih telah hadir!";
      return;
    }
    const sec = Math.floor(diff / 1000);
    const d = Math.floor(sec / 86400);
    const h = Math.floor((sec % 86400) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    $("#cdDays").textContent = String(d).padStart(2, "0");
    $("#cdHours").textContent = String(h).padStart(2, "0");
    $("#cdMins").textContent = String(m).padStart(2, "0");
    $("#cdSecs").textContent = String(s).padStart(2, "0");
    status.textContent = "Menuju Hari Bahagia";
  }
  tick();
  setInterval(tick, 1000);
}

/* =========================================================
   MAPS
   ========================================================= */
function initMaps() {
  const frame = $("#mapFrame");
  if (invitationData.mapPreviewUrl) {
    frame.innerHTML = `<iframe
      src="${invitationData.mapPreviewUrl}"
      title="Denah lokasi acara" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  } else {
    frame.innerHTML = `
      <div class="map-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>
        </svg>
        Denah lokasi akan tampil di sini
      </div>`;
  }
  $("#mapsBtn").href = invitationData.mapsUrl;
  $("#mapsBtn").target = "_blank";
  $("#mapsBtn").rel = "noopener";
}

/* =========================================================
   GALERI + LIGHTBOX
   ========================================================= */
let lbIndex = 0;

function initGallery() {
  const grid = $("#galleryGrid");
  grid.innerHTML = "";
  invitationData.gallery.forEach((img, i) => {
    const fig = document.createElement("figure");
    fig.className = "reveal";
    fig.dataset.delay = (i % 2) + 1;
    fig.setAttribute("aria-label", `Buka foto ${img.alt}`);
    fig.tabIndex = 0;
    const imgEl = document.createElement("img");
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    imgEl.loading = "lazy";
    imgEl.addEventListener("click", () => openLightbox(i));
    fig.appendChild(imgEl);
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
    });
    grid.appendChild(fig);
  });
}

function openLightbox(i) {
  lbIndex = i;
  const item = invitationData.gallery[lbIndex];
  $("#lbImg").src = item.src;
  $("#lbImg").alt = item.alt;
  $("#lightbox").classList.add("open");
  document.body.classList.add("locked");
  $("#lbClose").focus();
}

function closeLightbox() {
  $("#lightbox").classList.remove("open");
  document.body.classList.remove("locked");
}

function stepLightbox(dir) {
  lbIndex = (lbIndex + dir + invitationData.gallery.length) % invitationData.gallery.length;
  const item = invitationData.gallery[lbIndex];
  $("#lbImg").src = item.src;
  $("#lbImg").alt = item.alt;
}

function initLightbox() {
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
  $("#lbNext").addEventListener("click", () => stepLightbox(1));
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target === $("#lightbox") || e.target.tagName === "IMG") closeLightbox();
  });
  window.addEventListener("keydown", (e) => {
    if (!$("#lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

/* =========================================================
   RSVP WHATSAPP
   ========================================================= */
function initRsvp() {
  const msg = `Assalamu'alaikum, saya ingin mengonfirmasi kehadiran pada acara khitanan ${invitationData.childFullName} (${invitationData.eventDay}, ${invitationData.eventDate}). Terima kasih.`;
  const link = `https://wa.me/${invitationData.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  $("#rsvpBtn").href = link;
  $("#rsvpBtn").target = "_blank";
  $("#rsvpBtn").rel = "noopener";
}

/* =========================================================
   UCAPAN (localStorage demo)
   ========================================================= */
const STORE_KEY = "khitan_ucapan";

function getStored() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}

function renderUcapan() {
  const list = $("#ucapanList");
  const items = getStored();
  if (!items.length) {
    list.innerHTML = `<p class="ucapan-empty">Belum ada ucapan. Jadilah yang pertama!</p>`;
    return;
  }
  list.innerHTML = "";
  items.slice().reverse().forEach((u) => {
    const div = document.createElement("div");
    div.className = "ucapan-item reveal in";
    div.innerHTML = `<p class="u-name"></p><p class="u-text"></p>`;
    div.querySelector(".u-name").textContent = u.nama || "Anonim";
    div.querySelector(".u-text").textContent = u.ucapan;
    list.appendChild(div);
  });
}

function initUcapan() {
  renderUcapan();
  $("#ucapanForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = $("#uNama").value.trim();
    const ucapan = $("#uUcapan").value.trim();
    if (!ucapan) return;
    const items = getStored();
    items.push({ nama: nama || "Anonim", ucapan });
    localStorage.setItem(STORE_KEY, JSON.stringify(items));
    e.target.reset();
    renderUcapan();
    alert(invitationData.texts.ucapanSaved);
  });
}

/* =========================================================
   BOTTOM NAV
   ========================================================= */
function navTo(sectionId) {
  const sec = document.getElementById(sectionId);
  if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  setActiveNav(sectionId);
}

function setActiveNav(id) {
  $$(".nav-item").forEach((b) =>
    b.classList.toggle("active", b.dataset.target === id)
  );
}

function initNav() {
  $$(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => navTo(btn.dataset.target));
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) setActiveNav(en.target.id);
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  ["home", "acara", "galeri", "ucapan", "maps"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}

/* =========================================================
   SCROLL TO TOP
   ========================================================= */
function initFab() {
  musicFab.addEventListener("click", toggleMusic);
  $("#topFab").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const stage = $(".stage");
    if (stage) stage.scrollTo({ top: 0 });
  });
}

/* =========================================================
   ICON SPRITE
   ========================================================= */
function installIcons() {
  const icons = {
    music: '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
    muted: '<path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="m16 9 5 5m0-5-5 5"/>',
    top: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'
  };
  const defs = document.getElementById("musicIcon");
  defs.innerHTML = Object.entries(icons)
    .map(([k, p]) => `<g data-icon="${k}">${p}</g>`)
    .join("");
  setFabIcon("muted");
}

/* =========================================================
   SENDER PANEL - atur nama penerima
   ========================================================= */
function initSender() {
  const senderFab = $("#senderFab");
  const modal = $("#senderModal");
  const closeBtn = $("#senderClose");
  const input = $("#senderName");

  const urlParams = new URLSearchParams(location.search);
  const isRecipient = urlParams.has("nama") && urlParams.get("nama").trim() !== "";
  if (isRecipient) {
    senderFab.style.display = "none"; // Tampilan penerima: tanpa menu pengaturan
    return;
  }
  if (!senderFab) return;

  senderFab.addEventListener("click", openSenderModal);
  closeBtn && closeBtn.addEventListener("click", closeSenderModal);
  modal && modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSenderModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeSenderModal();
  });
  input && input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buildSenderLink("copy");
  });

  $("#senderCopy").addEventListener("click", () => buildSenderLink("copy"));
  $("#senderWa").addEventListener("click", () => buildSenderLink("wa"));

  function openSenderModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    setTimeout(() => input.focus(), 60);
  }
  function closeSenderModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
  function getLink(name) {
    return location.origin + location.pathname + "?nama=" + encodeURIComponent(name.trim()) + "&u=1";
  }
  function buildSenderLink(mode) {
    const name = input.value.trim();
    if (!name) { showToast(invitationData.texts.senderNeedName); input.focus(); return; }
    const link = getLink(name);
    const text = `${invitationData.texts.senderShared.replace("{nama}", name)}\n\n${link}`;
    if (mode === "wa") {
      window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank", "noopener");
      closeSenderModal();
    } else {
      copyText(link).then((ok) => {
        if (ok) {
          showToast(invitationData.texts.senderCopied.replace("{nama}", name));
          closeSenderModal();
        } else {
          showToast(invitationData.texts.senderNeedName);
        }
      });
    }
  }
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true, () => legacyCopy(text));
  }
  return Promise.resolve(legacyCopy(text));
}
function legacyCopy(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch { return false; }
}

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  installIcons();
  fillBindings();
  fillCommon();
  renderGalleryImages();
  initOpening();
  initReveals();
  initCountdown();
  initMaps();
  initGallery();
  initLightbox();
  initRsvp();
  initUcapan();
  initNav();
  initFab();
  initSender();
});

function renderGalleryImages() {
  const imgs = $$("img[data-src]");
  imgs.forEach((img) => {
    img.src = img.dataset.src;
    delete img.dataset.src;
  });
}