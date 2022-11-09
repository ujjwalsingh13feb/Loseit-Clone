import { Button, HStack, Image, useMediaQuery, VStack } from '@chakra-ui/react';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import FitnessClubRem from "../images/FitnessClubRem.png"
const LogoSection = () => {
    const [isMobileScreen] = useMediaQuery("(min-width: 720px)");
    const navigate = useNavigate()
    return (
        <>
            {isMobileScreen ? (
                <HStack justifyContent="space-around" p="20px">
                    <NavLink to="/">
                        <Image
                            src={FitnessClubRem}
                            w="170px"
                            h="150px"
                            _hover={{
                                opacity: "0.8",
                            }}
                        />
                    </NavLink>
                    <Button
                        bg="#ff9400"
                        fontSize="1em"
                        fontWeight="400"
                        textAlign="center"
                        p="10px, 40px"
                        w="119px"
                        h="41px"
                        color="white"
                        _hover={{
                            opacity: 0.8,
                        }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                </HStack>
            ) : (
                <VStack mt="15px">
                    <NavLink to="/">
                        <Image
                            src={FitnessClubRem}
                            w="200px"
                            h="150px"
                            _hover={{
                                opacity: "0.8",
                            }}
                        />
                        <Button
                        bg="#ff9400"
                        fontSize="1em"
                        fontWeight="400"
                        textAlign="center"
                        p="10px, 40px"
                        w="119px"
                        h="41px"
                        color="white"
                        _hover={{
                            opacity: 0.8,
                        }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                    </NavLink>
                </VStack>
            )}
        </>
    )
}

export default LogoSection