import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import AllItem from './Pages/Purchase/AllItem';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/Dashboard/DashBoard';



function App() {
  return (

    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="myPortfolio" element={<MyPortfolio/>} />
        <Route path="allItem" element={<AllItem/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="purchase" element={
           <RequireAuth>
           <Purchase />
         </RequireAuth>
        } />
        <Route path="dashBoard" element={
           <RequireAuth>
           <DashBoard />
         </RequireAuth>
        } />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
