import './Image.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import Mychildren from '../../../assets/image/Mychildren.jpg'
import Concert from '../../../assets/image/concert.jpg'

interface PropsFon {
    children: React.ReactNode //JSX.Element;
}

function Image({ children }: PropsFon) {
    return (
        <>
            <section className="image">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    rewind={false}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><img src={Concert} className="first_img" /></SwiperSlide>
                    <SwiperSlide><img src={Mychildren} className="first_img" /></SwiperSlide>
                </Swiper>
                {children}
            </section>
        </>
    );
}
export default Image;