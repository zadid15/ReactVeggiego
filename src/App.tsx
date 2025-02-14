import { BrowserRouter, Route, Routes } from "react-router-dom"
import Browse from "./pages/Browse"
import Product from "./pages/Product"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />"
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Browse />} />
        <Route path="/list-product" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
