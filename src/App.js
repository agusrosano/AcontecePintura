
import './App.css';
import Gallery from './Components/Galery/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Cart } from './Components/Cart/Cart';
import { Footer } from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
