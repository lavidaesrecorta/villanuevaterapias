import { IAtCard } from './Card';

const base: IAtCard = {
  title: 'Hello world!',
  body: 'This is the card content.',
  imgUrl: '/andrea/480x640.png',
};

const reiki: IAtCard = {
  title: 'Reiki',
  body: ' Es una terapia energética que se utiliza para reducir el estrés, aliviar el dolor y mejorar el bienestar general.',
  imgUrl: '/andrea/reiki.jpg',
}
const auriculoTerapia: IAtCard = {
  title: 'Auriculoterapia',
  body: 'Es una técnica de estimulación de puntos específicos en la oreja para aliviar el dolor y tratar diversas afecciones.',
  imgUrl: '/andrea/auriculoterapia.jpg',
}
const masaje: IAtCard = {
  title: 'Masaje',
  body: 'Puede ser beneficioso para el dolor de espalda, problemas de sueño, ansiedad, depresión, dolores de cabeza y mucho más. ',
  imgUrl: '/andrea/masaje.jpeg',
}
const terapiaFloral: IAtCard = {
  title: 'Terapia Floral',
  body: 'Es una terapia que utiliza esencias florales para tratar problemas emocionales y psicológicos.',
  imgUrl: '/andrea/bach.jpg',
}

export const mockAtCardProps = {
  base,
  auriculoTerapia,
  masaje,
  reiki,
  terapiaFloral
};