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
import { useDispatch, useSelector } from "react-redux";
import {
    totalcaloriesdailybudget,
    totalcaloriesdifference,
    totalcaloriesfood,
} from "../../Redux/AshsihRedux/TotalCalories/TotalCalories.action";
import { useEffect, useState } from "react";
import axios from "axios";

const getDataFromSignUp = async () => {
    let res = await axios.get(`https://fitness-club-server.onrender.com/signup`);
    let data = res.data;
    console.log('data:', data);
    // return 0;

    if (data[data.length - 1].caloriesTotal !== undefined) {
        return (data[data.length - 1].caloriesTotal).toFixed(2);
    }
    return 0;

    // {
    //     "email": "ujjawal@gmail.com",
    //     "password": "ujjawal123",
    //     "age": 24,
    //     "location": "delhi",
    //     "caloriesTotal": 1900,
    //     "id": 4
    //   },
}

export default function AddFood() {
    const [storeBreakfast, setStoreBreakfast] = useState(0);
    const [storeLunch, setStoreLunch] = useState(0);
    const [storeDinner, setStoreDinner] = useState(0);
    const [storeSnacks, setStoreSnacks] = useState(0);
    const [put, setPut] = useState(0);
    const [difference, setDifference] = useState(0);
    const [budget, setBudget] = useState(0);
    const [under, setUnder] = useState(0);

    const { totalCaloriesFoods, totalCaloriesExercises } = useSelector(
        (store) => store.totalcalories
    );
    const dispatch = useDispatch();

    let sumOfCalories = 0;

    const breakfastCalories = (TotalCalories) => {
        console.log("TotalCalories:", TotalCalories);
        setStoreBreakfast(TotalCalories);
    };

    const lunchCalories = (TotalCalories) => {
        console.log("TotalCalories:", TotalCalories);
        setStoreLunch(TotalCalories);
    };

    const dinnerCalories = (TotalCalories) => {
        console.log("TotalCalories:", TotalCalories);
        setStoreDinner(TotalCalories);
    };

    const snacksCalories = (TotalCalories) => {
        // console.log("TotalCalories:", TotalCalories);
        setStoreSnacks(TotalCalories);
    };

    useEffect(() => {
        sumOfCalories +=
            +storeBreakfast + +storeLunch + +storeDinner + +storeSnacks;
        // console.log("sumOfCalories:", sumOfCalories);
        setPut(sumOfCalories);
        dispatch(totalcaloriesfood(sumOfCalories));

        setDifference((totalCaloriesFoods - totalCaloriesExercises).toFixed(2));

        dispatch(totalcaloriesdifference(difference));

        //get data from sign up
        let result = getDataFromSignUp().then((res) => {
            console.log("res:", res)
            setBudget(res);
        });

        dispatch(totalcaloriesdailybudget(budget));
        // console.log('result------------------------------------------------------:', result)

        setUnder((Number(budget) - Number(difference)).toFixed(2));

    }, [storeBreakfast, storeLunch, storeDinner, storeSnacks, difference, budget, under, put]);



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
                    <Box
                        maxW="590px"
                        color="#808080"
                        fontSize="11px"
                        className={styles.addfoodTotalCalories}
                    >
                        <TableContainer bg="#edeff2" padding="-15px">
                            <Table variant="" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th textAlign="center">Budget</Th>
                                        <Th textAlign="center">Food</Th>
                                        <Th textAlign="center" isNumeric>
                                            Exercise
                                        </Th>
                                        <Th textAlign="center">Net</Th>
                                        <Th textAlign="center">Under</Th>
                                    </Tr>
                                </Thead>
                                {/* Mapping happen over here */}
                                <Tbody textAlign="center">
                                    <Tr>
                                        <Td textAlign="center">{budget}</Td>
                                        <Td textAlign="center">{put}</Td>
                                        <Td textAlign="center" isNumeric>
                                            {totalCaloriesExercises}
                                        </Td>
                                        <Td textAlign="center">{difference}</Td>
                                        <Td textAlign="center">
                                            <Text color="black" fontWeight="bold" bg="#00b651">{under}</Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Breakfast breakfastCalories={breakfastCalories} />
                    <Lunch lunchCalories={lunchCalories} />
                    <Dinner dinnerCalories={dinnerCalories} />
                    <Snacks snacksCalories={snacksCalories} />
                </GridItem>
                <GridItem
                    color="#0B6CC4"
                    rowSpan={{ base: 1, sm: 1, md: 2 }}
                    colSpan={{ base: 5, sm: 5, md: 2 }}
                    bg=""
                    width="340px"
                >
                    <StatisticsOfCalories />
                    <WeightUpdate />
                </GridItem>
            </Grid>
        </Box>
    );
}
