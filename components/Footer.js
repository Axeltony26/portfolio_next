import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className={styles.footer} style={{backgroundColor:'black'}}>
      <div className={styles.innerContainer}>
        {/* Contenu du footer */}
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.copyRight} style={{ color: 'white',textAlign:'center'  }}>
          <br />
          &copy;<b> 2023 Axel. Tous droits réservés.</b>
        </p>
      </div>
      <div className={`d-flex justify-content-end ${styles.iconContainer}`} style={{ marginRight: '700px'}}>
        <a href="https://github.com/Axeltony26/portfolio" target="_blank" rel="noopener noreferrer" className="me-4">
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/axel-sika-35bb49278/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
