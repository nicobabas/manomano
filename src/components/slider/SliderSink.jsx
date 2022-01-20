import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderSink.css';

const lavabos = [
  {id: 0, name:'', img:''},
  {id: 1, name:'Lavabo de salle de bain Céramique Noir mat Rond', img:'https://i.ibb.co/PN7mjqQ/24173581-1-removebg-preview.png'},
  {id: 2, name:'Lavabo rond de luxe Noir mat 40x15 cm Céramique', img:'https://i.ibb.co/zQbg84T/24173670-1-removebg-preview.png'},
  {id: 3, name:'Lavabo ronde Céramique Blanc 41,5 x 13,5 cm', img:'https://i.ibb.co/LrCzBtJ/5099056-1-removebg-preview.png'},
  {id: 4, name:'Évier triangulaire Céramique Blanc 50,5 x 41 x 12 cm', img:'https://i.ibb.co/cyzPLnZ/5099063-1-removebg-preview.png'},
];

const SliderSink = () => {
  return (
    <div className="SliderSink">
      <h2>Aperçu</h2>
      <div className="SliderSink-sliders">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation
        >
          <div className="SliderSink-sliders-slider">
            {lavabos.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.img} alt={item.name} width={360} height={360}/></SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderSink;