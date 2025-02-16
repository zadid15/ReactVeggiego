import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import Product from "./pages/Product";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./pages/auth/AuthContext";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Browse />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/list-products" element={<Product />} />

          {/* Rute yang hanya bisa diakses jika login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
