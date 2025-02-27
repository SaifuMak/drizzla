
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SmoothScroll from './componets/SmoothScroll';


function App() {

  return (
    <>
      <Router>
    <SmoothScroll/>

        <Routes>
        <Route path='/' element={<Products />} />

          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
       


          

        </Routes>
      </Router>
    </>
  )
}

export default App
