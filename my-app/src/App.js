import React from 'react';
import './App.css';
import NavBarLogo from "./components/NavBarLogo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogue from './components/pages/Catalogue';
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <NavBarLogo />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/" element={<Main />} />
                    <Route path="/catalogue" element={<Catalogue />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
