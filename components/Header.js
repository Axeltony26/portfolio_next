'use client'
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './header.module.css'; 

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#0c0b0be6' }}>
        <Link href="/home" className="navbar-brand" style={{ color: 'white', marginLeft: '15px' }}>
          <b>Axel</b>
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{ marginLeft: '20%' }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{ marginLeft: '20%', fontSize: '20px', fontWeight: 'bold' }}>
              <Link
                href="/home"
                className={`nav-link ${styles['animated-hover']}`}
                onClick={toggleMenu}
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: '20%', fontSize: '20px', fontWeight: 'bold' }}>
              <Link
                href="/projets"
                className={`nav-link ${styles['animated-hover']}`}
                onClick={toggleMenu}
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> Projets
              </Link>
            </li>
           
            <li className="nav-item" style={{ marginLeft: '20%', fontSize: '20px', fontWeight: 'bold' }}>
              <Link
                href="/contact"
                className={`nav-link ${styles['animated-hover']}`}
                onClick={toggleMenu}
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: '20%', fontSize: '20px', fontWeight: 'bold' }}>
              <Link
                href="/testimonial"
                className={`nav-link ${styles['animated-hover']}`}
                onClick={toggleMenu}
                style={{ color: 'white' }}
              >
                <FontAwesomeIcon icon={faComments} className="mr-2" /> Testimonial
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Header;