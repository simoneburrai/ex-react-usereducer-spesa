import Products from "./components/Products"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {

  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}></Route>
      </Routes>
  </BrowserRouter>
}

export default App
