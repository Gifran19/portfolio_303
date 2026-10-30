# Portofolio Pribadi (React + Vite + Tailwind CSS)

Template portofolio satu halaman: Home → About → Skills → Projects → Experience → Education → Currently → Professional English Class → Contact → Footer. Semua isi masih berupa placeholder.

## Menjalankan

```bash
npm install
npm run dev       # mode pengembangan (http://localhost:5173)
npm run build     # build produksi ke folder dist/
npm run preview   # pratinjau hasil build
```

## Mengganti isi

**Semua teks diedit di satu file: [`src/data/portfolio.js`](src/data/portfolio.js).** Ganti teks `[Seperti Ini]` dengan data Anda. Bagian berulang (skills, proyek, pengalaman, pendidikan) dirender dari array, jadi cukup tambah/hapus objek.

| Ingin mengubah | Bagian di `portfolio.js` |
| --- | --- |
| Nama, peran, perkenalan, status ketersediaan | `profile` |
| Domisili, institusi, ringkasan | `about` |
| Keterampilan | `skills` (ikon: `code`, `design`, `tools`, `people`) |
| Proyek | `projects.items` |
| Pengalaman | `experience` |
| Pendidikan | `education` |
| Aktivitas saat ini | `currently` |
| Tugas Professional English Class | `englishAssignments` |
| Email & media sosial | `contact` |

## Menambahkan foto profil
1. Salin foto ke `public/images/`, mis. `public/images/foto-saya.jpg` (rasio 4:5 disarankan).
2. Isi `profile.photo: '/images/foto-saya.jpg'` dan perbarui `photoAlt`.
Jika file gagal dimuat, fallback ilustrasi otomatis tampil.

## Menambah proyek
Salin satu objek di `projects.items`, beri `id` unik, lalu isi field-nya:
- `category`, `name`, `summary`, `description` (bisa beberapa paragraf dengan pemisah baris baru).
- `goal`, `role` (Peran Saya), `tech`, `outcome`, `image`, `demoUrl`, dan `repoUrl`.
- `features`: array daftar fitur utama yang akan ditampilkan di modal detail proyek.
- `status` (opsional): badge status proyek (misal: `'Dalam Pengembangan'`).
`demoUrl` dan `repoUrl` boleh dikosongkan (`''`) — tombolnya otomatis disembunyikan. Isi dengan URL lengkap (`https://...`) bila tersedia.

## Mengisi kontak
Di `contact`, isi `email` (otomatis menjadi `mailto:` plus tombol salin), `linkedin`, `github`, `instagram` (opsional) dengan URL lengkap. Kolom kosong menampilkan placeholder tanpa tautan aktif.

## Mengelola Tugas English Class (Professional English Class)
Seluruh data tugas dikelola di array `englishAssignments` pada file [`src/data/portfolio.js`](src/data/portfolio.js).

1. **Mengganti judul dan deskripsi tugas:**
   - Ubah properti `title` dan `description` pada item yang ingin diedit.
   - Properti `type` dapat diisi: `'Video'`, `'PDF'`, `'Document'`, `'Presentation'`, atau `'Link'`.
   - Properti `meeting` (misal: `'Pertemuan 02'`) dan `date` (format `'YYYY-MM-DD'`, misal: `'2026-03-15'`) bersifat opsional. Jika `date` diisi, sistem akan otomatis menampilkannya dalam format tanggal bahasa Indonesia.
2. **Menambah atau menghapus tugas:**
   - Salin salah satu objek dalam array `englishAssignments` dan pastikan memberikan `id` yang unik (misal: `'tugas-5'`).
   - Untuk menghapus tugas, hapus objek dari array. Kartu akan dirender secara otomatis sesuai jumlah item dalam array.
3. **Memasukkan tautan Google Drive atau YouTube:**
   - Isi properti `url` dengan URL lengkap, misalnya:
     - Google Drive: `'https://drive.google.com/file/d/.../view?usp=sharing'`
     - YouTube: `'https://www.youtube.com/watch?v=...'`
   - Tautan akan otomatis dibuka di tab baru dengan atribut `rel="noopener noreferrer"`.
4. **Menambahkan file lokal ke `public/assignments/`:**
   - Simpan file tugas Anda ke folder `public/assignments/` (misal: `public/assignments/tugas-summary.pdf`).
   - Isi properti `url` dengan jalur publik: `'/assignments/tugas-summary.pdf'` (jangan sertakan `/public/` pada URL).
5. **Kondisi URL kosong:**
   - Jika `url` dikosongkan (`url: ''`), tombol "Lihat Tugas" otomatis nonaktif dan menampilkan keterangan *"Tugas belum tersedia"*.

## Memasukkan CV
1. Salin PDF ke `public/cv/`, mis. `public/cv/cv-saya.pdf`.
2. Isi `profile.cvUrl: '/cv/cv-saya.pdf'`.
Selama kosong, tombol "Unduh CV" nonaktif dengan keterangan "CV belum tersedia".

## Warna & font
Menggunakan tema gelap elegan ala Brittany Chiang v4 (Dark Navy `#0a192f`, Light Navy `#112240`, aksen Teal `#64ffda`, teks Slate `#ccd6f6` & `#8892b0`, border `#233554`). Palet dapat diatur di `src/index.css` pada blok `@theme`. Font Inter (sans-serif) dan Playfair Display (aksen serif) dimuat secara lokal lewat paket `@fontsource-variable/*` (diimpor di `src/main.jsx`), tanpa unduhan dari CDN. Jika font gagal dimuat, fallback font sistem akan dipakai. Untuk mengganti font, ubah `--font-sans` dan `--font-serif` pada `src/index.css`.

## Struktur
```
src/
  data/portfolio.js    # seluruh konten
  components/          # satu komponen per bagian + Navbar, Footer, Modal
  hooks/               # useActiveSection
  index.css            # tema & gaya dasar
public/images/         # aset placeholder lokal (SVG)
public/cv/             # letakkan CV di sini
public/assignments/    # letakkan file tugas lokal (PDF/Doc) di sini
```

