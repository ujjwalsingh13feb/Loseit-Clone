import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import Breakfast from "../../Components/AshishComp/Breakfast";
import Snacks from "../../Components/AshishComp/Snacks";
import Dinner from "../../Components/AshishComp/Dinner";
import Lunch from "../../Components/AshishComp/Lunch";
import styles from "./Css/AddFood.module.css";
import { GiKnifeFork } from "react-icons/gi";
import StatisticsOfCalories from "../../Components/AshishComp/StatisticsOfCalories";
import WeightUpdate from "../../Components/AshishComp/WeightUpdate";

export default function AddFood() {
    return (
        <Box mt="90px" maxW="1348px" bg="" className={styles.addfoodBody}>
            <Box maxW="968px">
                <Select w="120px" h="30px" mb="20px" bgImage="url('./Add_Food.png')">
                    <option value="option1"></option>
                    <option value="option1">Breakfast</option>
                    <option value="option2"> Lunch</option>
                    <option value="option3">Dinner</option>
                    <option value="option3">Snacks</option>
                </Select>
            </Box>
            {/* Total Calories */}

            <Grid
                h="auto"
                maxW="968px"
                m="auto"
                // bg="orange.500"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap="60px"
            >
                <GridItem
                    rowSpan={{ base: 1, sm: 1, md: 2 }}
                    colSpan={{ base: 5, sm: 5, md: 3 }}
                    bg="white"
                >
                    <Box maxW="590px" color="#808080" fontSize="11px" className={styles.addfoodTotalCalories}>
                        <TableContainer bg="#edeff2" padding="-15px">
                            <Table variant="" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th textAlign="center">Budget</Th>
                                        <Th textAlign="center">Food</Th>
                                        <Th textAlign="center" isNumeric>
                                            Exercise
                                        </Th>
                                        <Th textAlign="center" >Net</Th>
                                        <Th textAlign="center" >Under</Th>
                                    </Tr>
                                </Thead>
                                {/* Mapping happen over here */}
                                <Tbody textAlign="center">
                                    <Tr>
                                        <Td textAlign="center">-</Td>
                                        <Td textAlign="center">-</Td>
                                        <Td textAlign="center" isNumeric>-</Td>
                                        <Td textAlign="center">-</Td>
                                        <Td textAlign="center" >
                                            <Text bg="#00b651">-</Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Breakfast />
                    <Lunch />
                    <Dinner />
                    <Snacks />
                </GridItem>
                <GridItem
                    color="#0B6CC4"
                    rowSpan={{ base: 1, sm: 1, md: 2 }}
                    colSpan={{ base: 5, sm: 5, md: 2 }}
                    bg=""
                    width="340px"
                >
            
                    <StatisticsOfCalories/>
                    <WeightUpdate/>
                </GridItem>
            </Grid>
        </Box>
    );
}
