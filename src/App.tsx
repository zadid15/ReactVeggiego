import { BrowserRouter, Route, Routes } from "react-router-dom"
import Browse from "./pages/Browse"
import Product from "./pages/Product"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/list-product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
