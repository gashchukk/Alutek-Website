import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogue from './components/pages/Catalogue';
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import FrameProfile from "./components/pages/FrameProfile";
import Furniture from "./components/pages/Furniture";
import SystemTypes from "./components/pages/SystemTypes";

function App() {


    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/frameprofile" element={<FrameProfile />} />
                    <Route path="/furniture" element={<Furniture />} />
                    <Route path="/systemtypes" element={<SystemTypes />} />


                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
