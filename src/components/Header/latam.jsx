import React from 'react';
import './styles.scss';

import Countdown from '../Countdown/latam';
import logoES from '../../assets/images/logo-latam.png';
import formas from '../../assets/images/formas.png';
import data from '../../assets/images/data-es.png';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="bg" src={formas} alt="formas" />
        <img className="logo" src={logoES} alt="Semana ONErpm" />
        <img className="data" style={{ marginTop: '-5em' }} src={data} alt="27 e 30 de outubro" />
        <a
          style={{ marginTop: '7em' }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdmlY-wLcegaEz_aakx9v-l8QzClVu22U1uO5Cdo1km_6V0nQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Entra y sigue el evento
        </a>
        {/* <Countdown /> */}
      </div>
    </div>
  );
}

export default Header;
