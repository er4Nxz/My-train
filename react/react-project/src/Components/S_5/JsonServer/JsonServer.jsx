import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./JsonServer.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

const JsonServer = () => {
  const [menu, setMenu] = useState(null);
  const fetchMenu = async () => {
    try {
      let url = await axios("https://er4nxz.github.io/data/db.json");
      setMenu(url.data.menu);
    } catch (error) {
      console.log(error);
    }
  };
  const [swiper, setSwiper] = useState(null);
  const fetchSwiper = async () => {
    try {
      let url = await axios("https://er4nxz.github.io/data/db.json");
      setSwiper(url.data.swiper);
      console.log(url);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMenu();
    fetchSwiper();
  }, []);
  return (
    <div>
      <div className="w-[100%] p-2 bg-blue-950">
        <nav className="flex flex-row justify-center gap-x-10">
          {menu?.map((item) => {
            return item.dropdown.length === 0 ? (
              <a
                key={item.id}
                href={item.link}
                className="text-white capitalize hover:text-white/[0.5] transition"
              >
                {item.title}
              </a>
            ) : (
              <div className="dropdown" key={item.id}>
                <div
                  tabIndex={0}
                  className="text-white cursor-pointer capitalize hover:text-white/[0.5] transition"
                >
                  {item.title}
                  <RiArrowDropDownLine className="inline-block" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-blue-300/[0.5] rounded-box z-10 w-52 p-2 shadow-lg"
                >
                  {item.dropdown?.map((itemDrop) => {
                    return (
                      <li key={itemDrop.id}>
                        <a
                          className="text-black capitalize"
                          href={itemDrop.link}
                        >
                          {itemDrop.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="slider">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {swiper?.map((item)=>{
            return(
              <SwiperSlide><img src={item.link} key={item.id} /></SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default JsonServer;
