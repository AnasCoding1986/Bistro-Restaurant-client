import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";
import slide5 from "../../../assets/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    subheading={"From 11am to 10pm"}
                    heading={"Order Online"}
                >

                </SectionTitle>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='uppercase text-4xl text-center -mt-20 text-white'>salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='uppercase text-4xl text-center -mt-20 text-white'>pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='uppercase text-4xl text-center -mt-20 text-white'>soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='uppercase text-4xl text-center -mt-20 text-white'>deserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='uppercase text-4xl text-center -mt-20 text-white'>salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;