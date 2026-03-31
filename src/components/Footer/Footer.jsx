import React from 'react'
import './Footer.css'
import footerlogo from './assets/footerlogo.png'
import footerbottom from "./assets/footerbottom.png"

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <ul className="footer-ul">
          <h3>majorian</h3>
          <li className='footer-link'><a href="">Bord de Seine 1
            3 Esplanade du Foncet
            92130 Issy-Ies-Moulineaux</a></li>
          <li className='footer-link'><a href="">Copyright 2023 @ Majorian</a></li>
        </ul>
        <ul className="footer-ul">
          <h3>Solutions</h3>
          <li className='footer-link'><a href="">Ies Collectionneurs</a></li>
          <li className='footer-link'><a href="">Cadhi</a></li>
          <li className='footer-link'><a href="">Clorofil</a></li>
          <li className='footer-link'><a href="">Mentorihi</a></li>
          <li className='footer-link'><a href="">Peace&Work</a></li>
          <li className='footer-link'><a href="">JobHospitality</a></li>
        </ul>
        <ul className="footer-ul">
          <h3>Plan de site</h3>
          <li className='footer-link'><a href="">Manifeste</a></li>
          <li className='footer-link'><a href="">Les solutions</a></li>
          <li className='footer-link'><a href="">L’equipe</a></li>
          <li className='footer-link'><a href="">Mentorihi</a></li>
          <li className='footer-link'><a href="">Nous Contacter</a></li>
        </ul>
        <ul className="footer-ul">
          <h3>Mentions Legales</h3>
          <li className='footer-link'><a href="">Gestion des cookies</a></li>
          <li className='footer-link'><a href="">Politique de confidentialite</a></li>
          <li className='footer-link'><a href="">Mentions legales</a></li>
        </ul>
        <ul className="footer-ul">
          <h3>Nouse suirve</h3>
          <img src={footerlogo} alt="bu yerda rasim bor" />
          <li className='footer-link'><a href="">Nous rejoindre</a></li>
          <li className='footer-link'><a href="">Dossier de presse</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
          <img src={footerbottom} alt="bu yerda rasim bor" /> 
      </div>
    </footer>
  )
}

export default Footer