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
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../Pages/AshishPages/Css/AddFood.module.css";
import {
    deleteexercise,
    getexercise,
    postexercise,
} from "../../Redux/AshsihRedux/exercise/exercise.action";

import DisplayFromServerExercise from "./DisplayFromServerExercise";
import SingleExercise from "./SingleExercise";

export default function Exercise() {
    const [open, setOpen] = useState(false);
    const [storeExercise, setStoreFood] = useState({});
    const [value, setValue] = useState("");
    const [totalCalories, setTotalCalories] = useState(0);
    const [post, setPost] = useState([]);

    const dispatch = useDispatch();
    const { exercises } = useSelector((store) => store.exercise);
    console.log("exercises:", exercises);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        //Food
        try {
            // const options = {
            //     method: "GET",
            //     url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
            //     params: { ingr: value },
            //     headers: {
            //         "X-RapidAPI-Key":
            //             "7f05e07b5bmshb869046befc8649p1fd334jsn35099610d923",
            //         "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
            //     },
            // };
            const options = {
                method: "GET",
                url: "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned",
                params: { activity: value },
                headers: {
                    "X-RapidAPI-Key":
                        "7f05e07b5bmshb869046befc8649p1fd334jsn35099610d923",
                    "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
                },
            };

            axios
                .request(options)
                .then(function (response) {
                    // setPost(response.data.hints);

                    //Exercise
                    console.log(response.data);
                    setPost(response.data);
                })
                .catch(function (error) {
                    //   console.error(error);
                });
        } catch (error) { }

        // calling data from redux
        dispatch(getexercise());
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

    // Setting payload inside data base
    const handleServerData = (payloadToServer) => {
        console.log("payloadToServer:", payloadToServer);
        dispatch(postexercise(payloadToServer));
    };

    const handleDeleteItem = (itemDeleteFromServer) => {
        console.log("itemDeleteFromServerId:", itemDeleteFromServer);
        dispatch(deleteexercise(itemDeleteFromServer));
    };

    useEffect(() => {
        //Counting Calories
        if (exercises) {
            let result = 0;
            exercises.forEach((item) => (result += Number(item.calories_per_min)));
            console.log("result:", result);
            setTotalCalories(result.toFixed(2));
        }
    }, [exercises]);

    return (
        <Box className={styles.foodLog}>
            <SimpleGrid column={{ base: 1, sm: 2, md: 2 }}>
                <Box>
                    <Heading as="h1">Exercise: {totalCalories}</Heading>
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
                                <SingleExercise
                                    storeExercise={storeExercise}
                                    open={open}
                                    handleOpen={handleOpen}
                                    handleServerData={handleServerData}
                                />
                            ) : (
                                <Box className={styles.FoodScroll}>
                                    <Heading as="h1">All Foods</Heading>
                                    {post &&
                                        post.map((ele) => (
                                            <Box key={ele.name + Date.now()}>
                                                <Box>
                                                    <Image src="/FitnessClub.png" />
                                                </Box>

                                                <Box>
                                                    <button onClick={() => handleOpen(ele)}>
                                                        {ele.name}
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
                {exercises.length === 0 ? (
                    <Box
                        h="86px"
                        fontSize="14px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text color="gray">No exercises logged for today</Text>
                    </Box>
                ) : (
                    <TableContainer>
                        <Table variant="" size="sm">
                            <Thead>
                                <Tr>
                                    <Th>Exercise</Th>
                                    <Th color="black" textAlign="center">
                                        Duration
                                    </Th>
                                    <Th color="black" textAlign="center" isNumeric>
                                        Calories
                                    </Th>
                                    <Th w="10px"></Th>
                                </Tr>
                            </Thead>
                            {/* Mapping happen over here */}
                            <Tbody textAlign="center">
                                {exercises &&
                                    exercises.map((item) => (
                                        <DisplayFromServerExercise
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
