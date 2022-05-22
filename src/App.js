import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
