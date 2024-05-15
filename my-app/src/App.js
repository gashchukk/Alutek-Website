import React from 'react';
import './App.css';
import NavBarLogo from "./components/NavBarLogo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Catalogue from './components/pages/Catalogue';
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div>
                <NavBarLogo />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
