import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import styles from "./Css/WeightUpdate.module.css";
import { BsArrowUp, BsFillArrowUpCircleFill } from "react-icons/bs";

export default function WeightUpdate() {
    return (
        <Box maxW="338px" mt="20px" className={styles.weightupdatebody}>
            <Box h="21px" bg="#D0CFD0">
                <Text>Weight</Text>
            </Box>
            <Box pl="10px" pr="10px" h="132px">
                <Box
                    w="155px"
                    h="118px"
                    bg=""
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="40px"
                    color="red"
                > <BsFillArrowUpCircleFill /> 0 kg</Box>

                <Box w="155px" h="118px" bg="">
                    <Box p="10px" textAlign="left">
                        <Heading fontSize="11px" color="black" as="h1">
                            Your goal is to maintain your current weight.
                        </Heading>
                    </Box>
                    <Box display="flex" borderTop="1px solid grey">
                        <Heading mt="10px" as="h1" color="black" fontSize="14px">
                            {" "}
                            Weight
                        </Heading>
                    </Box>

                    <Box display="flex" justifyContent="spaceBetween" alignItems="center">
                        <Input bg="gray.100" w="60px" h="35px" color="black" type="text" />{" "}
                        kg
                        <Button h="35px" bg="green.100" color="black">
                            Record
                        </Button>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
