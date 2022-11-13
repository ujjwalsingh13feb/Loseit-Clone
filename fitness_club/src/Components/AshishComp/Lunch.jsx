import {
    Box,
    Heading,
    Image,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../Pages/AshishPages/Css/AddFood.module.css";
import {
    deletelunch,
    getlunch,
    postlunch,
} from "../../Redux/AshsihRedux/lunch/lunch.action";
import DisplayFromServer from "./DisplayFromServer";
import SingleFood from "./SingleFood";

export default function Lunch({ lunchCalories }) {
    const [open, setOpen] = useState(false);
    const [storeFood, setStoreFood] = useState({});
    const [value, setValue] = useState("");
    const [totalCalories, setTotalCalories] = useState(0);
    const [post, setPost] = useState([]);

    const dispatch = useDispatch();
    const { lunchs } = useSelector((store) => store.lunch);
    // console.log("lunchs:", lunchs);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    useEffect(() => {
        //Food
        try {
            const options = {
                method: "GET",
                url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
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
                    setPost(response.data.hints);
                })
                .catch(function (error) {
                    //   console.error(error);
                });
        } catch (error) { }

        // calling data from redux
        dispatch(getlunch());
    }, [value]);

    const handleClick = () => {
        setValue("");
        setPost([]);
    };

    const handleOpen = (food) => {
        setOpen(!open);
        setStoreFood(food);
    };

    //   console.log("open:", open);

    const handleDeleteItem = (itemDeleteFromServer) => {
        // console.log("itemDeleteFromServerId:", itemDeleteFromServer);
        dispatch(deletelunch(itemDeleteFromServer));
    };

    useEffect(() => {
        //Counting Calories
        if (lunchs) {
            let result = 0;
            lunchs.forEach((item) => (result += item.Calories));
            // console.log("result:", result);
            setTotalCalories(result.toFixed(2));
        }
    }, [lunchs]);

    lunchCalories(totalCalories);

    // Setting payload inside data base
    const handleServerData = (payloadToServer) => {
        // console.log('payloadToServer:', payloadToServer)
        dispatch(postlunch(payloadToServer));
    };

    return (
        <Box className={styles.foodLog}>
            <SimpleGrid column={{ base: 1, sm: 2, md: 2 }}>
                <Box>
                    <Heading as="h1">Lunch: {totalCalories}</Heading>
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
                                    handleServerData={handleServerData}
                                />
                            ) : (
                                <Box className={styles.FoodScroll}>
                                    {/* <Heading as="h1">All Foods</Heading> */}
                                    {post &&
                                        post.map((ele) => (
                                            <Box key={ele.foodId}>
                                                <Box>
                                                    <Image src="/FitnessClub.png" />
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
                            {/* <Heading as="h1">All Foods</Heading> */}
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
                {lunchs.length === 0 ? (
                    <Box
                        h="86px"
                        fontSize="14px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text color="gray"> No food logged for lunch</Text>
                    </Box>
                ) : (
                    <TableContainer>
                        <Table variant="" size="sm">
                            <Thead>
                                <Tr>
                                    <Th>Food</Th>
                                    <Th color="black" textAlign="center">Quantity</Th>
                                    <Th color="black" textAlign="center" isNumeric>
                                        Calories
                                    </Th>
                                    <Th w="10px"></Th>
                                </Tr>
                            </Thead>
                            {/* Mapping happen over here */}
                            <Tbody textAlign="center">
                                {lunchs &&
                                    lunchs.map((item) => (
                                        <DisplayFromServer
                                            item={item}
                                            handleDeleteItem={handleDeleteItem}
                                        />
                                    ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Box>
    );
}
