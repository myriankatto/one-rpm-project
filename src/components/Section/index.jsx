import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import banner5 from '../../assets/images/banner5.jpg';
import banner6 from '../../assets/images/banner6.jpg';
import banner7 from '../../assets/images/banner7.jpg';
import banner8 from '../../assets/images/banner8.jpg';
import banner9 from '../../assets/images/banner9.jpg';
import banner10 from '../../assets/images/banner10.jpg';
import banner11 from '../../assets/images/banner11.jpg';
import banner12 from '../../assets/images/banner12.jpg';
import banner13 from '../../assets/images/banner13.jpg';

import gif1 from '../../assets/images/FORMAS1.gif';
import gif2 from '../../assets/images/FORMAS2.gif';
import gif3 from '../../assets/images/FORMAS3.gif';

import './styles.scss';

function Section() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <div className="section">
      <div className="section__container">
        <div className="section__carousel">
          <Slider {...settings}>
            <div>
              <img src={banner1} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner2} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner3} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner4} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner5} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner6} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner7} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner8} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner9} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner10} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner11} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner12} alt="Banner ONErpm Academy" />
            </div>
            <div>
              <img src={banner13} alt="Banner ONErpm Academy" />
            </div>
          </Slider>
        </div>
        <div className="section__dados">
          <div className="section__item">
            <h4>50</h4>
            <span>especialistas referências do mercado</span>
          </div>
          <img className="formas" src={gif1} alt="formas" />
          <div className="section__item">
            <h4>26</h4>
            <span>bate-papos, painéis e workshops</span>
          </div>
          <img className="formas" src={gif2} alt="formas" />

          <div className="section__item">
            <h4>16</h4>
            <span>horas de conteúdo</span>
          </div>
          <img className="formas" src={gif3} alt="formas" />

          <div className="section__item">
            <h4>100%</h4>
            <span>online e gratuito</span>
          </div>
        </div>
        <div className="section__button">
          <a
            href="https://www.youtube.com/watch?v=J-SL8zVaBtE"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre e acompanhe o Evento ao vivo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
