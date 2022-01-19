import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import lavelinge2 from './assets/lavelinge2.png';
import lavelinge3 from './assets/lavelinge3.png';

SwiperCore.use([Navigation]);

function App() {
  return (
    <div className="App">
      <h1>Hello DIYMCA</h1>
      <Swiper
      modules={[Navigation]}
      spaceBetween={1}
      slidesPerView={1}
      slidesPerGroup={1}
      navigation
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><img src={lavelinge2} alt="lavelinge" /></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide><img src={lavelinge3} alt="lavelinge" /></SwiperSlide>
    </Swiper>
    </div>
  );
}

export default App;
