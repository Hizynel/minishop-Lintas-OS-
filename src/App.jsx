import './App.css';

import Home from './pages/Home';
import DetailProduk from './pages/DetailProduk';
import Layout from './components/layout';
import Login from './pages/Login';
import FormRegister from './pages/Register';

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { lazy, Suspense} from "react";

const Keranjang = lazy(() => import("./pages/Keranjang"));

function App() {
  return (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/produk/:id" element={<DetailProduk />} />
            <Route path="/keranjang" element={<ProtectedRoute><Suspense fallback = {<p>Memuat....</p>}><Keranjang /></Suspense></ProtectedRoute>}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<FormRegister />} />
            <Route path="*" element={<h2>404 - Halaman Tidak Ditemukan</h2>} />
          </Route>
        </Routes>
  );
}

export default App
