'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfoCircle, faGlobe, faLightbulb, faCode, faDatabase, faDesktop, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import Type from '@/components/Type';

const profil = '/profilAxel.png'

function Home() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div style={{ marginLeft: '20px' }}>
              <div style={{ fontSize: '24px', textAlign: 'left' }}>
                <h5 style={{ fontSize: '50px', marginBottom: '10px', fontWeight: 'bold', color: '#2c264e' }}>
                  <Type />
                </h5>
                <p style={{ marginTop: '5px',fontSize: '25px', }}>
                Je m'appelle Axel, développeur web passionné et administrateur de bases de données. Je suis spécialisé dans la création d'applications web
                 et la gestion efficace des données pour garantir des solutions robustes et performantes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={profil} className="d-block w-100" style={{ marginTop: '' }} />
          </div>
        </div>
  
  
        <div className="container">
          <h1 className="text-left mb-5 mt-5">
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Mes Services
          </h1>
          <div className="row">
            <div className="col-md-6 mt-3">
              <Card className="zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faGlobe} className="me-2" />
                    Solution Web
                  </Card.Title>
                  <Card.Text>Nous proposons des solutions web personnalisées pour répondre aux besoins uniques de votre entreprise.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mt-3">
              <Card className="zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                    Stratégie & Recherche
                  </Card.Title>
                  <Card.Text>Je propose des services de stratégie et de recherche pour vous aider à prendre des décisions éclairées et à atteindre vos objectifs commerciaux</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
  
          <div className="row">
            <div className="col-md-6 mt-3">
              <Card className="zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faCode} className="me-2" />
                    Web Development
                  </Card.Title>
                  <Card.Text>Je propose des services de développement web personnalisés pour vous aider à créer une présence en ligne efficace et engageante.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mt-3">
              <Card className="zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faTasks} className="me-2" />
                    Organisateur d'événements
                  </Card.Title>
                  <Card.Text>
                  En tant qu'Organisateur d'événements, je propose une gamme complète de services pour vous aider à planifier et à réaliser des événements mémorables. </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mt-5">
          <h1 className="text-left mb-5 mt-5">
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Mes Compétences
        </h1>
          <div className="col-md-6 mt-5">
            
    <Card className="border-2 rounded-2 zoom-card custom-shadow">
      <Card.Body>
        <Card.Title>
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          Développement Web
        </Card.Title>
        <Card.Text>
        En tant que développeur web, j'ai acquis une solide expertise dans diverses technologies 
        et outils pour créer des sites web modernes et fonctionnels
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  
            <div className="col-md-6 mt-5">
              <Card className="border-2 rounded-2 zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                    Base de données
                  </Card.Title>
                  <Card.Text>
                  Mes compétences en bases de données me permettent de concevoir,
                  développer et optimiser des systèmes de gestion de bases de données robustes et performants.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mt-5">
              <Card className="border-2 rounded-2 zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faDesktop} className="skill-icon" />
                    Design Graphique
                  </Card.Title>
                  <Card.Text>
                  La section dédiée à mes compétences en Design Graphique! En tant que designer, 
                  je possède une solide expérience dans la création d'éléments visuels attrayants. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mt-5">
              <Card className="border-2 rounded-2 zoom-card custom-shadow">
                <Card.Body>
                  <Card.Title>
                    <FontAwesomeIcon icon={faTasks} className="skill-icon" />
                    Gestion de Projet
                  </Card.Title>
                  <Card.Text>En tant que professionnel de la gestion de projet, je possède une solide expérience et expertise dans la planification,
                    l'organisation et la coordination de projets.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
  
          <div className="mt-5">
    <div className="  p-4 rounded ">
      <h1 className="text-left mt-5">
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
        À propos de moi
      </h1>
      <p className="mt-5">
        Je suis Axel Sika, un développeur passionné par la création d'applications web et mobiles innovantes et efficaces, avec une expertise particulière dans le domaine des bases de données. Mon objectif est de combiner mes compétences en développement avec ma passion pour les bases de données pour créer des solutions logicielles puissantes et évolutives.
  
        Avec une solide expérience en développement d'applications, j'ai acquis une connaissance approfondie des langages de programmation tels que Java, C#, Vue.js et React. Je suis en mesure de concevoir et développer des interfaces utilisateur attrayantes, des fonctionnalités robustes et des expériences utilisateur optimales.
  
        En plus de mes compétences en développement et en bases de données, j'ai développé des compétences en leadership et en collaboration en équipe. J'ai appris à diriger des projets et à travailler efficacement avec d'autres professionnels créatifs pour atteindre des objectifs communs. Je crois fermement à la communication transparente et à la collaboration étroite pour assurer la réussite des projets.
  
        Je suis également passionné par l'exploration de nouvelles technologies et tendances émergentes dans le domaine de l'informatique. Je reste constamment à jour avec les dernières avancées et les meilleures pratiques, ce qui me permet d'apporter des solutions innovantes à chaque projet.
  
        Mon portfolio met en évidence mes compétences en développement d'applications, ma maîtrise des bases de données et ma capacité à collaborer efficacement en équipe. J'y présente mes projets les plus récents, mettant en avant mes capacités en matière de modélisation de bases de données, d'optimisation des performances, de leadership et de développement d'applications.
  
        Je suis ouvert aux opportunités de collaboration et de travail stimulantes dans le domaine du développement d'applications, des bases de données et du leadership. Si vous êtes intéressé par mon travail ou si vous souhaitez discuter de projets potentiels, n'hésitez pas à me contacter. Je serais ravi d'échanger avec vous et de partager mes compétences et connaissances pour contribuer au succès de vos projets.
      </p>
    </div>
  </div>
        </div>
  
        <style>
          {`
          .custom-shadow {
            box-shadow: 0 0 3px 2px #3e515f;
          }
          
          .zoom-card {
            transition: transform 0.3s;
          }
          
          .zoom-card:hover {
            transform: scale(1.1);
          }
  
          .service-card {
            border: solid;
            background-color: transparent;
            text-align: center;
          }
          `}
        </style>
      </div>
    );
  }
  
  export default Home;

