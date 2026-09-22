# Undangan Khitanan Digital — Premium Vintage Traditional

Website undangan khitanan digital bergaya *vintage traditional Jawa*, mobile-first, 100% statis (HTML + CSS + JavaScript), langsung siap deploy ke **Netlify** (tanpa backend, tanpa database).

## Struktur Project

```
/
├── index.html          # Halaman utama
├── style.css           # Semua styling
├── script.js           # Data undangan + semua logika (ubah data di sini)
├── netlify.toml        # Konfigurasi deploy Netlify
├── README.md
└── assets/
    ├── images/         # Foto (ganti dengan foto asli Anda)
    ├── audio/music.mp3 # Musik latar
    └── ornaments/      # Ornamen SVG (top, bottom, gunungan)
```

---

## 1. Menjalankan Website Secara Lokal

Buka file `index.html` langsung di browser (klik dua kali), atau jalankan server statis sederhana:

```bash
npx serve .
```

## 2. Mengganti Nama Anak

Buka `script.js`, ubah pada object `invitationData` bagian atas:

```js
childName: "Farhan",
childFullName: "Muhammad Farhan",
```

## 3. Mengganti Tanggal / Hari / Waktu Acara

Di `invitationData`:

```js
eventDate: "09 Juli 2026",   // Tanggal yang tampil
eventDay: "Minggu",          // Hari yang tampil
eventTime: "09.00 - 13.00 WITA",
eventISO: "2026-07-09T09:00:00+08:00",  // Untuk countdown (harus format ISO, +08:00 = WITA)
```

## 4. Mengganti Foto

Ganti file foto asli Anda, dengan nama yang sama, di folder `assets/images/`:

| File              | Fungsinya                        |
|-------------------|----------------------------------|
| `child.jpg`       | Foto anak (hero & profil)        |
| `hero.jpg`        | Banner dekoratif                 |
| `background.jpg`  | Tekstur background               |
| `gallery-1.jpg` s/d `gallery-4.jpg` | Foto galeri |

Tidak perlu ubah kode — cukup timpa filenya (format JPG/PNG/WebP).

## 5. Mengganti Musik

Timpa file `assets/audio/music.mp3` dengan musik Anda (format MP3, usahakan di bawah **10 MB** agar Netlify aman). Urutan bisa di-loop otomatis.

## 6. Mengganti Nama Ayah & Ibu

Di `invitationData`:

```js
fatherName: "Bapak Ahmad",
motherName: "Ibu Siti",
```

## 7. Mengganti Alamat dan Google Maps

```js
address: "Jl. Contoh Alamat No. 123, ...",
mapsUrl: "https://www.google.com/maps",   // Tujuan tombol "Buka Google Maps"
mapPreviewUrl: "https://maps.google.com/maps?q=LATITUDE,LONGITUDE&z=15&output=embed",  // Denah di halaman (tanpa API key)
```

Cara mudah `mapPreviewUrl`: buka Google Maps, klik kanan lokasi rumah → salin koordinat (contoh `-6.2088,106.8456`), lalu tempel ke URL di atas.

## 8. Mengganti Nomor WhatsApp (RSVP)

```js
whatsappNumber: "6281234567890",  // Format internasional tanpa "+" dan tanpa "0" di depan
```

## 9. Mengirim Undangan dengan Nama Penerima Berbeda (Fitur Pengirim)

Buka link utama (tanpa parameter), lalu klik tombol pensil di pojok kanan bawah (**Atur Nama Penerima**):

1. Ketik nama penerima, contoh: `Bapak Budi`.
2. Klik **Salin Link** — akan menghasilkan link khusus seperti:
   `https://undangan-khitanan-aqikah.vercel.app/?nama=Bapak%20Budi&u=1`
3. Tempel link itu ke WhatsApp atau pesan pribadi.

**Perbedaan tampilan:**
- **Link pengirim** (tanpa `nama=`): muncul tombol pensil untuk mengatur nama penerima.
- **Link penerima** (dengan `nama=...`): tombol pensil/pengaturan **tidak tampil** — hanya isi undangan, cocok untuk dibagikan ke banyak orang. Nama penerima tampil di layar pembuka (`Kepada Yth. <nama>`) dan di bagian sambutan.

Alternatif tanpa tombol pensil: tempel `?nama=Nama%20Tamu` di akhir link biasa.

## 10. Deploy ke Netlify (melalui GitHub)

1. Push project ini ke repository GitHub.
2. Buka [https://app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Pilih repository Anda.
4. Biarkan **Build command** kosong dan **Publish directory** = `.` (root), lalu **Deploy**.

## 11. Deploy Cepat (Drag & Drop Folder)

1. Buka [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Seret **seluruh folder project ini** ke area upload.
3. Selesai — situs langsung online. Tiap kali drag & drop lagi = update.

## 12. Deploy ke Vercel (repo `Nra1n/khitanan`)

1. Pastikan sudah `vercel login`.
2. Dari folder ini jalankan `vercel --prod`, **atau** cukup push ke GitHub:
   ```bash
   git add . && git commit -m "Update undangan" && git push
   ```
   Vercel terhubung ke repo `Nra1n/khitanan` sehingga setiap push langsung ter-deploy.
3. URL produksi: `https://undangan-khitanan-aqikah.vercel.app`

---

## Kustomisasi Teks

Hampir semua teks tersimpan di bagian `texts` dalam `invitationData` di `script.js` — ubah bebas (salam pembuka, doa, tombol, dll.).

## Form Ucapan Tamu

Form ucapan memakai **localStorage** (demo penyimpanan lokal di perangkat pengunjung). Untuk menyimpan ucapan ke internet, gunakan layanan pihak ketiga seperti **Firebase / Supabase / Formspree** — detail integrasi memerlukan akun layanan tersebut.

## Daftar Periksa

- [ ] Nama anak & orang tua benar di `script.js`
- [ ] Tanggal & `eventISO` benar (pastikan countdown akurat)
- [ ] Foto diganti di `assets/images/`
- [ ] Musik diganti di `assets/audio/`
- [ ] Nomor WhatsApp benar
- [ ] `mapsUrl` & `mapPreviewUrl` menunjuk lokasi acara
- [ ] (Opsional) Siapkan link per tamu via tombol **Atur Nama Penerima** di link pengirim