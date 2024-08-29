import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <header>
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={true}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <img src="/Images/slid2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/slid3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/slid4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/slid5.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Images/slid6.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </header>
        </div>
      </Layout>
    </>
  );
};

export default Home;
