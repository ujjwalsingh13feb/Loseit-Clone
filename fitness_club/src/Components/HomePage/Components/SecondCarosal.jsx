import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/cbtcss.css";
import { Pagination, Navigation } from "swiper";


const data = [
    {
      id: 1,
      src: "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1",
      story: "Setting Macronutrient Goals – How Many Macros Do You Need?",
    },
    {
      id: 2,
      src: "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/02/Quick-tips-to-make-healthier-choices.png?w=1010&ssl=1",
      story: "Quick Tips to Make Healthier Decisions, According to Science",
    },
    {
      id: 3,
      src: "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-132.png?w=1010&ssl=1",
      story: "12 Protein-Packed Snacks to Curb Hunger Quick",
    },
    {
      id: 4,
      src: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/health-benefits-of-seltzer-water.png?w=1010&ssl=1",
      story: "Is Drinking Seltzer Actually Healthy?",
    },
    {
      id: 5,
      src: "https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-135.png?w=1010&ssl=1",
      story: "Fun 20-Minute Treadmill Workouts",
    },
    {
      id: 6,
      src: "https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/01/Seven-benefits-of-sleep.png?w=1010&ssl=1",
      story: "Seven Strategies for A Better Night’s Sleep",
    }, 
    {
      id: 7,
      src: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/Intuitive-Eating.png?w=1010&ssl=1",
      story: "The Secret Behind Intuitive Eating",
    },
    {
      id: 8,
      src: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/08/Untitled-design-83.png?w=1010&ssl=1",
      story: "5 Ways You’re Sabotaging Your Weight Loss",
    },
    {
      id: 9,
      src: "https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-126.png?w=1010&ssl=1",
      story: "10 Tips For Making Healthier Choices When Dining Out",
    },
  ];

const SecondCarosal = () => {

  return (
    <VStack p="50px">
      <Text color="#183962" fontSize="2em" w="100%" textAlign="center">
        A Balanced Approach to Weight Loss
      </Text>
      <Text
        fontSize="1.3em"
        color="#808284"
        fontWeight="400"
        textAlign="center"
        w="100%"
      >
        Get motivated with these nutrition and wellness tips and user success
        stories!
      </Text>
      <VStack w="100%" bg="white" p="50px">
        <div
          style={{
            width: "100%",
            //   height: "90%",
            display: "flex",
            justifyContent: "space-around",
            //   border: "2px solid black",
            height: "340px",
            backgroundColor: "white",
            marginBottom: "20px",
          }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              642: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              840: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((datas) => (
              <>
                <SwiperSlide
                  style={{ height: "220px", width: "40%" }}
                  key={datas.id}
                >
                  {/* <VStack h="100%" p="40px"> */}
                  <Image
                    src={datas.src}
                    alt={datas.src}
                    height="100%"
                    _hover={{
                      opacity: 0.8,
                    }}
                  />
                  <Text
                    color="#808284"
                    fontSize="16px"
                    textAlign="center"
                    fontWeight="500"
                    p="20px"
                  >
                    {datas.story}
                  </Text>
                  {/* </VStack> */}
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <Button
          bg="#183962"
          color="white"
          p="20px"
          _hover={{
            bg: "#183962",
            opacity: 0.8,
          }}
        >
          Get Weight Loss Tips
        </Button>
      </VStack>
    </VStack>
  )
}

export default SecondCarosal