import React from 'react';
import './Footer.css';
import NavDropdown from "react-bootstrap/NavDropdown";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="col-md-4 footer-column">
                        <h5 style={{display:"flex", justifyContent:"flex-start"}}>Alutek</h5>
                        <p>
                            №1 імпортер алюмінієвого
                            профілю в Україні. Since 2009.
                        </p>
                    </div>
                    <div className="col-md-4 footer-column" style={{   display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"}}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Головна</a>
                            </li>
                            <li>
                                <a href="#aboutus">Про нас</a>
                            </li>
                            <li>
                                <NavDropdown style={{ color: "black" }} title="Каталог" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/catalogue">Розсувні Системи до шаф купе</NavDropdown.Item>
                                    <NavDropdown.Item href="/catalogue">Алюмінієвий рамковий профіль </NavDropdown.Item>
                                    <NavDropdown.Item href="/catalogue">Фурнітура</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/catalogue"> Види алюмінієвих меблевих систем </NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li>
                                <a href="/contacts">Контакти</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <h5>Контактки</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-map-marker"></i> м.Львів, вул. Промислова, 45
                            </li>
                            <li>
                                <i className="fa fa-phone"></i> +38 067 209 02 33
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i> designpolyprint@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; {new Date().getFullYear()} Alutek. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
