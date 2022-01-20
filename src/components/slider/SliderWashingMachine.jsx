import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderWashingMachine.css';

const lavelinges = [
  {id: 0, name:'', img:''},
  {id: 1, name:'Lave-linge frontal FAGOR FLF7012D', img:'https://i.ibb.co/55ytQ4P/43703154-1-removebg-preview.png'},
  {id: 2, name:'Lave-linge frontal FAGOR FLF9014BIW', img:'https://i.ibb.co/GPDSQwz/43703125-1-removebg-preview.png'},
  {id: 3, name:'ELECTROLUX Lave-linge frontal 9kg 1400trs/min Tambour 68L SensiCare Machine à laver hublot - Blanc', img:'https://i.ibb.co/D9M6DnY/35091123-1-removebg-preview.png'},
  {id: 4, name:'CANDY Lave-linge frontal 13kg 1400trs/min SimplyFi Machine à laver hublot - Blanc', img:'https://i.ibb.co/mrpKN26/29366566-2-removebg-preview.png'},
  {id: 5, name:'INDESIT Lave-linge Frontal 8kg 1200trs/min Moteur induction Machine à laver hublot - Blanc', img:'https://i.ibb.co/ygMvL5n/37214520-1-removebg-preview.png'},
  {id: 6, name:'Lave linge hublot Candy Cs 1292Drre/1 S 9 kg 1200 trs/min Connecté Anthracite', img:'https://i.ibb.co/TLG0ThN/lavelinge2.png'},
];

const SliderWashingMachine = () => {
  return (
    <div className="SliderWashingMachine">
      <h2>Aperçu</h2>
      <div className="SliderWashingMachine-sliders">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation
        >
          <div className="SliderWashingMachine-sliders-slider">
            {lavelinges.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.img} alt={item.name} width={365} height={365}/></SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderWashingMachine;
