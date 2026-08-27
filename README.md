# MiniShop

Aplikasi e-commerce sederhana berbasis react untuk menampilkan produk, melihat detail produk, dan mengelola keranjang belanja.

## Fitur

* **Home** — Menampilkan daftar produk
* **Search** — Mencari produk berdasarkan nama
* **Filter Kategori** — Memfilter produk berdasarkan kategori
* **Detail Produk** — Melihat informasi lengkap produk
* **Keranjang** — Menambahkan dan menghapus produk dari keranjang
* **Quantity** — Mengatur jumlah produk di keranjang
* **Perhitungan Total** — Menghitung subtotal dan total harga secara otomatis
* **Authentication** — Login dan register pengguna
* **Protected Route** — Membatasi halaman tertentu untuk pengguna yang sudah login
* **Local Storage** — Menyimpan data keranjang di browser

---

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/Gatoott/minishop.git
```

Masuk ke folder project:

```bash
cd minishop
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Setelah itu buka URL yang diberikan Vite, biasanya:

```text
http://localhost:5173
```

---

## Build untuk Production

Untuk membuat production build:

```bash
npm run build
```

---

## Menjalankan Testing

Menjalankan test:

```bash
npm run test
```

---

### Penjelasan Folder

| Folder/File             | Keterangan                                   |
| ----------------------- | -------------------------------------------- |
| `src/assets/components` | Component yang digunakan di beberapa halaman |
| `src/assets/pages`      | Halaman utama aplikasi                       |
| `src/context`           | Global state menggunakan React Context       |
| `src/hooks`             | Custom React hooks                           |
| `src/App.jsx`           | Konfigurasi routing aplikasi                 |
| `src/main.jsx`          | Entry point React                            |
| `public`                | Asset statis                                 |
| `screenshots`           | Screenshot untuk dokumentasi                 |
| `package.json`          | Dependency dan script project                |
| `vite.config.js`        | Konfigurasi Vite                             |

---

## API

Project ini menggunakan **Fake Store API** sebagai sumber data produk.

Endpoint yang digunakan:

```text
GET https://fakestoreapi.com/products
```

Untuk mendapatkan detail produk:

```text
GET https://fakestoreapi.com/products/:id
```

---

## Routing

| Route         | Halaman       |
| ------------- | ------------- |
| `/`           | Home          |
| `/produk/:id` | Detail Produk |
| `/login`      | Login         |  
| `/register`   | Register      | 
| `/keranjang`  | Keranjang     |