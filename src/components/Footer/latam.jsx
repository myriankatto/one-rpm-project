import React from 'react';
import './styles.scss';

import logoONE from '../../assets/images/LOGO_WHITE.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import { Icon } from '@iconify/react';
import twitterIcon from '@iconify/icons-feather/twitter';
import facebookIcon from '@iconify/icons-feather/facebook';
import instagramIcon from '@iconify/icons-feather/instagram';
import youtubeIcon from '@iconify/icons-feather/youtube';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* <div className="footer__apoio">
          <h5>APOIO</h5>
          <div className="logos">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        */}
      

        <div className="footer__realização">
          <h5>EVENTO REALIZADO POR</h5>
          <div className="logos">
            <a href="https://www.onerpm.com/" target="_blank" rel="noopener noreferrer">
              <img className="logo-one" src={logoONE} alt="oneRPM" />
            </a>
          </div>
          
          <div className="social">
            <a
              href="https://www.youtube.com/channel/UCOx3mWPFzMwwfn5h_obJOaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon width={20} icon={youtubeIcon} />
            </a>
            <a href="https://www.instagram.com/onerpmmx/
" target="_blank" rel="noopener noreferrer">
              <Icon width={20} icon={instagramIcon} />
            </a>
            <a href="https://twitter.com/onerpmmx" target="_blank" rel="noopener noreferrer">
              <Icon width={20} icon={twitterIcon} />
            </a>
            <a href="https://www.facebook.com/onerpmmx" target="_blank" rel="noopener noreferrer">
              <Icon width={20} icon={facebookIcon} />
            </a>
          </div>
        </div>
          <div className="footer__parceiros">
          <h5>NUESTROS PATROCINADORES</h5>
          <div className="logos">
            <img src={logo1} alt="aire libre" />
            <img src={logo2} alt="sae méxico" />
            <img src={logo3} alt="roland" />
          </div>
        </div> 
        <div className="footer__final">
          <h6>© 2020 ONErpm Inc. Todos los derechos reservados.
</h6>
          <span>
           SITIO CREADO POR {' '}
            <a href="https://www.myriankatto.com" target="_blank" rel="noopener noreferrer">
              <b>MYRIAN KATTO</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
