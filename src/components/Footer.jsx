import React from "react";
import {Link} from "react-router-dom";
import logoUnahur from "./img/UNAHUR-logo.png";
import { BrowserRouter } from 'react-router-dom';

const Footer = () => {
    return (
        <BrowserRouter>
            <footer className="text-white py-4 bg-dark">
                <hr className="bg-white"/>
                <div className="container">
                    <nav className="row">
                        <Link to="http://unahur.edu.ar" className="col-12 col-md-3 d-flex justify-content-center">
                            <img src={logoUnahur} className="mx-2" alt="logoUnahur" height="90"/>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled materia">
                            <li className="font-weight-bold mb-2">Trabajo Final Integrador</li>
                            <li className="mb-2">C. Interfases de Usuario</li>
                            <li className="mb-2">2023C1 - Comisión jueves 18 a 22</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled materia">
                            <li className="font-weight-bold mb-2">Hernán M. Coniglio</li>
                            <li className="mb-2">+5491158258440</li>
                            <li className="mb-2">
                                <Link className="miMail" to="mailto:hernanmarcelo.coniglio@estudiantes.unahur.edu.ar">hernanmarcelo.coniglio@estudiantes.unahur.edu.ar</Link>
                            </li>
                        </ul>

                        <ul className="col-12 col-md-3 list-unstyled d-flex justify-content-between">
                            <Link to="https://www.facebook.com/hernan.coniglio.5">
                                <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/>
                            </Link>
                            <Link to="https://www.instagram.com/hernan.coniglio/">
                                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/> 
                            </Link>
                            <Link to="https://www.linkedin.com/in/hernan-coniglio/">
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin"/>
                            </Link>
                            <Link to="https://www.twitter.com/HMConiglio">
                                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter"/>   
                            </Link>
                            <Link to="https://www.youtube.com/channel/UCQj9OjkVPHLFrpZIS4dWYyQ" alt="youtube">
                                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube"/>
                            </Link>
                        </ul>
                    </nav>
                </div>

            </footer>

        </BrowserRouter>
    );
};

export default Footer;
