import { Box, HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "../Components/Appsection.module.css";

const GooglePlay = () => {
  return (
    <>
      <Box className={style.appdown}>
        <Text
          color="#ff9400"
          fontSize="1.5em"
          fontWeight="500"
          textAlign="center"
        >
          Get Started on Mobile
        </Text>
        <HStack display="flex" justifyContent="center" gap="20px" p="60px">
          <Link
            to="/"
            target="_blank"
          >
            <Image src="https://assets.loseit.com/website/home/Download_Apple.svg" h="60px" w="180px" />
          </Link>
          <Link
            to="/"
            target="_blank"
          >
            <Image src="https://assets.loseit.com/website/home/Download_GooglePlay.svg" h="60px" w="180px" />
          </Link>
        </HStack>
      </Box>
    </>
  )
}

export default GooglePlay