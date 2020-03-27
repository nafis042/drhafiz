// webp
import Slide1 from '../../assets/images/slider/webp/slide-1.webp';
import Slide2 from '../../assets/images/slider/webp/slide-2.webp';
import Slide3 from '../../assets/images/slider/webp/slide-3.webp';
import Slide4 from '../../assets/images/slider/webp/slide-4.webp';
import Slide5 from '../../assets/images/slider/webp/slide-5.webp';
import Slide6 from '../../assets/images/slider/webp/slide-6.webp';
import Slide7 from '../../assets/images/slider/webp/slide-7.webp';
// jpg
import Slide1jpg from '../../assets/images/slider/jpg/slide-1.jpg';
import Slide2jpg from '../../assets/images/slider/jpg/slide-2.jpg';
import Slide3jpg from '../../assets/images/slider/jpg/slide-3.jpg';
import Slide4jpg from '../../assets/images/slider/jpg/slide-4.jpg';
import Slide5jpg from '../../assets/images/slider/jpg/slide-5.jpg';
import Slide6jpg from '../../assets/images/slider/jpg/slide-6.jpg';
import Slide7jpg from '../../assets/images/slider/jpg/slide-7.jpg';

// OBJECT EXAMPLE
// {
//   id: 1,
//   src: Slide1,
//   caption: ['Վերնագիր', 'Заголовок', 'Heading '],
//   altText: ['Նկարագրություն', 'Описание', 'Description']
// },

export const CarouselItems = [
  { id: 1, src: Slide1, src1: Slide1jpg },
  { id: 2, src: Slide2, src1: Slide2jpg },
  { id: 3, src: Slide3, src1: Slide3jpg },
  { id: 4, src: Slide4, src1: Slide4jpg },
  { id: 5, src: Slide5, src1: Slide5jpg },
  { id: 6, src: Slide6, src1: Slide6jpg },
  { id: 7, src: Slide7, src1: Slide7jpg }
];
export default function(state = CarouselItems, action) {
  return state;
}
