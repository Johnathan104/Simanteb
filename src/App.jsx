
import './App.css'
import Nav from './assets/static/Nav.jsx'
import Home from './assets/pages/Home.jsx'
import Footer from './assets/static/Footer.jsx'
import Layout from "./assets/static/Layout.jsx" 
import {createBrowserRouter, Route, BrowserRouter, Routes} from "react-router-dom"
import Bim from './assets/pages/Bim.jsx'

const router =createBrowserRouter([{
  path:"/", element:<Home/>
},])
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/Bim" element={<Bim/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
