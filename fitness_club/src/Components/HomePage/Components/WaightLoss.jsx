import { HStack, Text, VStack, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const WaightLoss = () => {
  const [not778] = useMediaQuery("(min-width: 778px)");
  return (
    <>
      <VStack p="45px">
        <Text color="#183962" fontSize="2em" fontWeight="500">
          Weight Loss Made Easy
        </Text>
        <HStack pt="35px" flexDirection={not778 ? "row" : "column"}>
          <VStack>
            <Text color="#ff9400" fontSize="1.5em" fontWeight="500">
              Set Your Goals
            </Text>
            <Image h="140px" w="140px" src="https://assets.loseit.com/website/home/Home_SetGoal.svg" />
            <Text color="#808284" fontSize="1.1em" textAlign="center">
              Tell us what you want to acheive and receive personalized goals.
            </Text>
          </VStack>
          <VStack>
            <Text color="#ff9400" fontSize="1.5em" fontWeight="500">
              Track Your Food
            </Text>
            <Image h="140px" w="140px" src="https://assets.loseit.com/website/home/Home_TrackFoods.svg" />
            <Text color="#808284" fontSize="1.1em" textAlign="center">
              Learn about the foods you’re eating and keep your calories within
              your daily budget.
            </Text>
          </VStack>
          <VStack>
            <Text color="#ff9400" fontSize="1.5em" fontWeight="500">
              Lose Weight
            </Text>
            <Image h="140px" w="140px" src="https://assets.loseit.com/website/home/Home_LoseWeight.svg" />
            <Text color="#808284" fontSize="1.1em" textAlign="center">
              Reach your goals and continue to set new ones for a happier,
              healthier you!
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default WaightLoss;
