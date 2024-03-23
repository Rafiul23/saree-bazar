import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import saree1 from '../../assets/saree/saree1.jpg'
import saree2 from '../../assets/saree/saree2.jpg'
import saree3 from '../../assets/saree/saree3.jpg'
import saree4 from '../../assets/saree/saree4.jpg'
import saree5 from '../../assets/saree/saree5.jpg'
import saree6 from '../../assets/saree/saree6.jpg'
import saree7 from '../../assets/saree/saree7.jpg'
import saree8 from '../../assets/saree/saree8.jpg'

const Banner = () => {
    return (
        <Swiper navigation={true} slidesPerView={4} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiper">
            <SwiperSlide>
                <img src={saree1} alt="" />
               
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree2} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree3} alt="" />
               
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree4} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree5} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree6} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree7} alt="" />
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={saree8} alt="" />
                
            </SwiperSlide>

        </Swiper>
    );
};

export default Banner;