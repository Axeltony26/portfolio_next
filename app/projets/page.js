'use client'
import { useState } from "react";
const photo = '/cula.png'
const photo2 = '/fitmax.png'
const photo3 = '/max.png'
import '../../app/projet.css'

const Projet = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
  
    const handleMouseEnter = (cardIndex) => {
      setHoveredCard(cardIndex);
    }
  
    const handleMouseLeave = () => {
      setHoveredCard(null);
    }
  
    return (
      <div>
        <div className="row" style={{ marginTop: '50px' }}>
          <div className="col-md-4 mb-4">
            <div
              className={`card small ${hoveredCard === 0 ? 'zoom-effect' : ''}`}
              style={{ fontSize: '14px', width: '100%' }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={photo2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '26px', marginBottom: '0.5rem' }}><b>MAXFIT</b></h5>
                <p className="card-text">
                  MAXFIT est une application de fitness qui permet aux utilisateurs de suivre leurs séances d'entraînement, de gérer leur profil et de consulter les conseils et les recommandations de leurs entraîneurs.
                  MAXFIT a été développé en utilisant React et utilise MySQL comme base de données pour le stockage des informations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className={`card small ${hoveredCard === 1 ? 'zoom-effect' : ''}`}
              style={{ fontSize: '14px' }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '26px', marginBottom: '0.5rem' }}><b>Calculatrice</b></h5>
                <p className="card-text">
                  Une calculatrice qui permet d'effectuer des opérations mathématiques de base et des calculs arithmétiques, ainsi que d'autres opérations plus avancées comme le calcul des pourcentages.
                  Cette calculatrice a été développée en C#.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className={`card small ${hoveredCard === 2 ? 'zoom-effect' : ''}`}
              style={{ fontSize: '14px' }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={photo3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '26px', marginBottom: '0.5rem' }}><b>Gmax</b></h5>
                <p className="card-text">
                  Gmax est une application de gestion de commande développée en C#. Elle offre des fonctionnalités pour gérer efficacement les commandes des clients dans un environnement commercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projet;
  