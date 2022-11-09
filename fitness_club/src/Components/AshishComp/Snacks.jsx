import { Box, Heading, SimpleGrid, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styles from "../../Pages/AshishPages/Css/AddFood.module.css";

export default function Snacks() {
    return (
        <Box className={styles.foodLog}>
            <SimpleGrid column={{ base: 1, sm: 2, md: 2 }} m="15px">
                <Box >
                    <Heading as="h1">Snacks:0</Heading>
                </Box>
                <Box>
                    <button>
                        <FaSearch />
                    </button>
                    <input type="text" placeholder="Search" />
                </Box>
            </SimpleGrid>
            <Box h="auto" className={styles.foodLogDisplay} pl="10px" pr="10px" >
                <TableContainer>
                    <Table  variant=''  size="sm" >
                        <Thead>
                            <Tr>
                                <Th>Food</Th>
                                <Th textAlign="center">Quantity</Th>
                                <Th textAlign="center" isNumeric>
                                    Calories
                                </Th>
                                <Th w="10px"></Th>
                            </Tr>
                        </Thead>
                        {/* Mapping happen over here */}
                        <Tbody textAlign="center">
                            <Tr>
                                <Td>Apple</Td>
                                <Td textAlign="center">1</Td>
                                <Td textAlign="center" isNumeric>
                                    46
                                </Td>
                                <Td>
                                    <ImCross />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Banana</Td>
                                <Td textAlign="center">1</Td>
                                <Td textAlign="center" isNumeric>
                                    56
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}