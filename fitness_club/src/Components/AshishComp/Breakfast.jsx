import {
    Box,
    Button,
    Collapse,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ScaleFade,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styles from "../../Pages/AshishPages/Css/AddFood.module.css";
import SingleFood from "./SingleFood";

export default function Breakfast() {
    const [open, setOpen] = useState(true);
    const [storeFood, setStoreFood] = useState({});

    const [value, setValue] = useState("");
    const [post, setPost] = useState([]);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        //Food
        try {
            const options = {
                method: "GET",
                url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?page=2&limit=2",
                params: { ingr: value },
                headers: {
                    "X-RapidAPI-Key":
                        "7f05e07b5bmshb869046befc8649p1fd334jsn35099610d923",
                    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
                },
            };

            axios
                .request(options)
                .then(function (response) {
                    //fOOD
                    console.log(response.data);
                    console.log(response.data.hints);
                    setPost(response.data.hints);
                })
                .catch(function (error) {
                    console.error(error);
                });
        } catch (error) { }
    }, [value]);

    const handleClick = () => {
        console.log(value);
        console.log(post);
        setValue("");
        setPost([]);
    };

    const handleOpen = (food) => {
        console.log("food:", food);
        setOpen(!open);
        console.log("hello");
        setStoreFood(food);
    };

    console.log("open:", open);

    return (
        <Box className={styles.foodLog}>
            <SimpleGrid column={{ base: 1, sm: 2, md: 2 }}>
                <Box>
                    <Heading as="h1">Breakfast:0</Heading>
                </Box>
                <Box>
                    <button onClick={handleClick}>
                        <FaSearch />
                    </button>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="Search & Add Food"
                    />
                </Box>
            </SimpleGrid>
            <Box>
                <Box>
                    {value.length !== 0 ? (
                        <Box className={styles.FoodScrollBody}>
                            {open ? (
                                <SingleFood
                                    storeFood={storeFood}
                                    open={open}
                                    handleOpen={handleOpen}
                                />
                            ) : (
                                <Box className={styles.FoodScroll}>
                                    <Heading as="h1">All Foods</Heading>
                                    {post &&
                                        post.map((ele) => (
                                            <Box>
                                                <Box>
                                                    <Image src="/FitnessClub.jpeg" />
                                                </Box>

                                                <Box>
                                                    <button onClick={() => handleOpen(ele.food)}>
                                                        {ele.food.label}
                                                    </button>
                                                </Box>
                                            </Box>
                                        ))}
                                </Box>
                            )}
                            <Heading as="h1">All Foods</Heading>
                        </Box>
                    ) : (
                        <Box
                            style={{
                                margin: "auto",
                                height: "0",
                                width: "0",
                            }}
                        ></Box>
                    )}
                </Box>
            </Box>
            <Box h="auto" className={styles.foodLogDisplay} pl="10px" pr="10px">
                <TableContainer>
                    <Table variant="" size="sm">
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
    );
}
