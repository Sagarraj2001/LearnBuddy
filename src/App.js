import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Course from './components/Courses/Course';
import Blog from './components/Blog/Blog';
import Price from './components/Price/Price';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/Login/ForgotPassword';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signup/login" element={<Login/>} />
          <Route path="/login/signup" element={<Signup/>} />
          <Route path="/login/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/course/login" element={<Login />} />
          <Route path="/price/login" element={<Login />} />


          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
