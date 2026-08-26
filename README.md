# MiniShop

MiniShop adalah aplikasi e-commerce sederhana berbasis React. Aplikasi ini menampilkan katalog produk, menyediakan pencarian dan pagination, serta memungkinkan pengguna mengelola keranjang setelah login.

## Fitur

- **Katalog produk**: mengambil dan menampilkan daftar produk dari Fake Store API.
- **Pencarian produk**: mencari produk berdasarkan judul.
- **Pagination**: menampilkan katalog secara bertahap, lima produk per halaman.
- **Detail produk**: menampilkan gambar, judul, harga, dan status ketersediaan produk.
- **Autentikasi sederhana**: register, login, dan logout menggunakan data yang disimpan di browser.
- **Keranjang belanja**: menambahkan produk dan menghapus produk dari keranjang.
- **Proteksi route**: halaman keranjang hanya dapat diakses oleh pengguna yang sudah login.
- **Persistensi local storage**: sesi pengguna dan isi keranjang tetap tersimpan setelah halaman dimuat ulang.
- **Layout bersama**: header, navigasi, dan footer digunakan di seluruh halaman melalui komponen layout.

## Teknologi

- React 19
- React Router DOM
- Vite
- Tailwind CSS
- Vitest dan React Testing Library

## Instalasi

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
git clone https://github.com/Hizynel/minishop-Lintas-OS-.git
cd minishop-Lintas-OS-
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Script npm

| Script | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat production build |
| `npm run preview` | Meninjau production build secara lokal |
| `npm run test` | Menjalankan test dengan Vitest |
| `npm run lint` | Memeriksa masalah linting |

## Struktur Folder

```text
minishop/
├── public/                 # Asset statis yang disajikan langsung
├── src/
│   ├── assets/             # Gambar produk dan asset bawaan
│   ├── components/         # Komponen reusable aplikasi
│   │   ├── badge.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── layout.jsx
│   │   ├── ProdukCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/            # State global React Context
│   │   ├── AuthContext.jsx
│   │   └── KeranjangContext.jsx
│   ├── data/               # Data produk lokal pendukung
│   ├── hooks/              # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── pages/              # Halaman yang terhubung ke route
│   │   ├── DetailProduk.jsx
│   │   ├── Home.jsx
│   │   ├── Keranjang.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx             # Definisi route aplikasi
│   ├── App.css             # Style khusus aplikasi
│   ├── index.css           # Style global
│   ├── main.jsx            # Entry point React
│   └── test-setup.js       # Konfigurasi environment test
├── index.html              # Template HTML utama
├── package.json            # Dependency dan script npm
├── vite.config.js          # Konfigurasi Vite
└── eslint.config.js        # Konfigurasi ESLint
```

## API

Data katalog dan detail produk diambil dari [Fake Store API](https://fakestoreapi.com/):

```text
GET https://fakestoreapi.com/products
GET https://fakestoreapi.com/products/:id
```

## Routing

| Route | Halaman | Akses |
| --- | --- | --- |
| `/` | Katalog produk | Publik |
| `/produk/:id` | Detail produk | Publik |
| `/Login` | Login | Publik |
| `/Register` | Register | Publik |
| `/keranjang` | Keranjang belanja | Pengguna login |

## Testing

Jalankan seluruh test dengan perintah berikut:

```bash
npm run test
```

Test yang tersedia mencakup komponen kartu produk, halaman login, dan perilaku context keranjang.