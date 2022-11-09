import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Card from "./Card";
// import "../CSS/carousal.css";
import "../css/carousal.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";

const data = [
  {
    id: 1,
    src: "https://assets.loseit.com/website/home/Features_WaterTracking.svg",
    title: "Water Tracking",
    note: "Track your water intake to make sure you're getting the recommended amount daily.",
  },
  {
    id: 2,
    src: "https://assets.loseit.com/website/home/Features_Macros.svg",
    title: "Macro Tracking",
    note: "Set personalized macronutrient goals to ensure you’re getting enough protein, carbs, and more.",
  },
  {
    id: 3,
    src: "https://assets.loseit.com/website/home/Features_DeviceIntegration.svg",
    title: "Patterns & Reports",
    note: "Get reports on your behaviors and progress straight to your inbox.",
  },
  {
    id: 4,
    src: "https://assets.loseit.com/website/home/Features_PatternsReports.svg",
    title: "Smart Camera",
    note: "Use your camera to take a picture of your food and allow Lose It! technology to help you log it.",
  },
  {
    id: 5,
    src: "https://assets.loseit.com/website/home/Features_Barcode.svg",
    title: "Scanner Feature",
    note: "Use your camera to scan package barcodes for quick tracking or create new foods with the nutrition label auto-fill.",
  },
  {
    id: 6,
    src: "https://assets.loseit.com/website/home/Features_SnapIt.svg",
    title: "Device Integration",
    note: "Connect Apple Health and Google Fit for easy exercise tracking.",
  },
];
const FirstCarosal = () => {
  const [not804] = useMediaQuery("(min-width: 824px)");
  const [not940] = useMediaQuery("(min-width: 940px)");
  return (
    <VStack w="100%" bg="#f1f1f1" p="50px">
      <div
        style={{
          width: "80%",
          //   height: "90%",
          display: "flex",
          justifyContent: "space-around",
          //   border: "2px solid black",
          height: "380px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <Swiper
          slidesPerView={not804 ? 2 : 1}
          spaceBetween={50}
          slidesPerGroup={not804 ? 2 : 1}
          // loop={true}
          // loopFillGroupWithBlank={true}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((datas) => (
            <SwiperSlide
              style={{ height: not940 ? "280px" : "310px", width: "40%" }}
              key={datas.id}
            >
              <VStack h="100%" p="40px">
                <Image src={datas.src} alt={datas.src} height="100px" />
                <Text
                  color="#183962"
                  fontSize="2.6em"
                  textAlign="center"
                  fontWeight="500"
                >
                  {datas.title}
                </Text>
                <Text
                  color="#808284"
                  fontWeight="400"
                  textAlign="center"
                  w="85%"
                  fontSize="14px"
                >
                  {datas.note}
                </Text>
              </VStack>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </VStack>
  );
};

export default FirstCarosal;
