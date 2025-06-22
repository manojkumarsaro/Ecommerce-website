
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import './index.css';
  import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Frames from './Pages/Frames';
import Gifts from './Pages/Gifts';
import Shoots from './Pages/Shoots';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
     
    
      <BrowserRouter >
      <Navbar />
      <Routes >
       <Route path="/" element={<Home/>}/>
       <Route path="/frames" element={<Frames/>}/>
       <Route path="/gifts" element={<Gifts/>}/>
       <Route path="/shoots" element={<Shoots/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/login" element={<Login/>}/>
     
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
