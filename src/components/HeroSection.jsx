import gameboy from '../../public/images/gameBoy.png';
import orangeBorder from '../../public/images/fotter.svg';
import pattren from '../../public/images/pattren.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="box">
          <div className="box-son1">
          <h1>Hey !! Mario still here, But don&apos;t forget that</h1>
          <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
          Branding, Digital Marketing, Web/App Development, Ui/Ux
          Content creation, Graphic design, Social media and More........
          So you can take a tour in our website, OR just <span>Press Start :)</span></p>
          </div>
          <div className="img">
          <img src={gameboy} alt="Gameboy" className="gameboy" />
          <img src={pattren} alt="Gameboy" className="pattren" />
          </div>
        </div>
        <img src={orangeBorder} alt="Orange Border" className="orange-border" />
        <div className="info">
        <div className="icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="info-son">
          <p>© 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
