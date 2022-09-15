import { useState } from 'react';
import { Mask, CardSectionSlide } from './styles'
import { Card } from '../Card/Card';

import spidermanUrl from '../../assets/images/spiderman.svg';
import wandaUrl from '../../assets/images/wanda.svg';
import thanosUrl from '../../assets/images/thanos.svg';
import hulkUrl from '../../assets/images/hulk.svg';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const charactersList = [
{
  name: 'Homem-Aranha',
  about: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
  image: spidermanUrl
},
{
  name: 'Wanda Maximoff',
  about: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.',
  movies: ['Vingadores - Era de Ultron', 'Capitão América - Guerra Civil', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato', 'WandaVision'],
  rating: 4,
  image: wandaUrl,
},
{
  name: 'Thanos',
  about: `A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.`,
  movies: ['Vingadores', 'Guardiões da Galáxia - vol. I', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
  rating: 5,
  image: thanosUrl
},
{
  name: 'Hulk',
  about: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.',
  movies: ['Vingadores', 'Vingadores - Era de Ultron', 'Thor - Ragnarok', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
  rating: 4,
  image: hulkUrl
}];


export const CardSection = () => {
  const [gradient, setGradient] = useState(false);
  
  return (
    <>
      {gradient ?  
      <Mask />
      :
      ''
      }
      <CardSectionSlide>
        <Swiper
        modules={[Navigation]}
        spaceBetween={100}
        slidesPerView={3}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        >
          {charactersList.map(({name, about, movies, rating, image}, index) => (
            <SwiperSlide key={index}>
              <Card name={name} about={about} movies={movies} rating={rating} image={image} gradient={gradient} setGradient={setGradient} />
            </SwiperSlide>
          ))}
        </Swiper>
        <FontAwesomeIcon icon={faArrowLeft} className="swiper-button-prev" />
        <FontAwesomeIcon icon={faArrowRight} className="swiper-button-next" />
       </CardSectionSlide>
    </>
  )
}
