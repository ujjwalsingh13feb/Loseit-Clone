import { HStack, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";

import React from 'react'

const PoundsLost = () => {
    const [not650] = useMediaQuery("(min-width: 650px)");
  return (
    <VStack w="100%" p="50px">
      <Image src="https://assets.loseit.com/website/home/Ticker_Celebratory.svg" alt="Ticker_Celebratory" w="200px" />
      <Text
        color="#ff9400"
        fontSize={not650 ? "6.5em" : "4.5em"}
        fontWeight="700"
      >
        125,381,638
      </Text>
      <Text
        color="#455555"
        fontSize={not650 ? "2em" : "1.4em"}
        fontWeight="700"
        letterSpacing=".4em"
      >
        POUNDS LOST
      </Text>
      <hr
        style={{
          border: "5px solid #ff9400",
          width: "40px",
          marginBottom: "40px",
          marginTop: "1rem",
        }}
      />
      <Text fontSize="1.5em" fontWeight="500" lineHeight="1.2">
        AS SEEN ON
      </Text>
      {not650 ? (
        <HStack justify="space-evenly" w="100%" pt="20px">
          <Image h="40px" w="140px" src="https://assets.loseit.com/website/home/Feature_TodayShow.png" />
          <Image h="70px" w="150px" src="https://assets.loseit.com/website/home/Feature_People.png" />
          <Image h="80px" w="140px" src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png" />
          <Image h="50px" w="160px" src="https://assets.loseit.com/website/home/Feature_WomensHealth.png" />
        </HStack>
      ) : (
        <VStack w="100%" pt="20px" gap="20px">
          <Image h="40px" w="140px" src="https://assets.loseit.com/website/home/Feature_TodayShow.png" />
          <Image h="70px" w="150px" src="https://assets.loseit.com/website/home/Feature_People.png" />
          <Image h="80px" w="140px" src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png" />
          <Image h="50px" w="160px" src="https://assets.loseit.com/website/home/Feature_WomensHealth.png" />
        </VStack>
      )}
    </VStack>
  )
}

export default PoundsLost