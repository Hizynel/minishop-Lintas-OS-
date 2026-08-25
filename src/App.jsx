import './App.css';

import Home from './pages/Home';
import DetailProduk from './pages/DetailProduk';
import Keranjang from './pages/Keranjang';
import Layout from './components/layout';
import Login from './pages/Login';
import FormRegister from './pages/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/produk/:id" element={<DetailProduk />} />
            <Route path="/keranjang" element={<ProtectedRoute><Keranjang /></ProtectedRoute>}/>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<FormRegister />} />
            <Route path="*" element={<h2>404 - Halaman Tidak Ditemukan</h2>} />
          </Route>
        </Routes>
  );
}

export default App
