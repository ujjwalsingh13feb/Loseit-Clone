import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import styles from "./Css/AddFood.module.css";
import Exercise from "../../Components/AshishComp/Exercise";
import WeightUpdate from "../../Components/AshishComp/WeightUpdate";
import StatisticsOfCalories from "../../Components/AshishComp/StatisticsOfCalories";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalcaloriesdifference, totalcaloriesexercise } from "../../Redux/AshsihRedux/TotalCalories/TotalCalories.action";
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
export default function AddExercise() {
    const [storeExercise, setStoreExercise] = useState(0);
    const [put, setPut] = useState(0);
    const [difference, setDifference] = useState(0);
    const [budget, setBudget] = useState(0);
    const [under, setUnder] = useState(0);

    const { totalCaloriesFoods, totalCaloriesExercises } = useSelector((store) => store.totalcalories)
    // console.log('totalCaloriesExercises:', totalCaloriesExercises)
    // console.log('totalCaloriesFoods:', totalCaloriesFoods)

    const dispatch = useDispatch();

    let sumOfCalories = 0;

    const exerciseCalories = (TotalCalories) => {
        console.log("TotalCalories:", TotalCalories);
        // carryBreakfast = TotalCalories;
        setStoreExercise(TotalCalories);
        // // console.log('carryBreakfast before:', carryBreakfast)
    };

    useEffect(() => {
        sumOfCalories +=
            +storeExercise;
        console.log("sumOfCalories:", sumOfCalories);
        setPut(sumOfCalories);
        dispatch(totalcaloriesexercise(sumOfCalories));

        setDifference((totalCaloriesFoods - totalCaloriesExercises).toFixed(2));
        dispatch(totalcaloriesdifference(difference));

        //get data from sign up
        let result = getDataFromSignUp().then((res) => {
            console.log("res:", res)
            setBudget(res)
        });
        // console.log('result------------------------------------------------------:', result)

        setUnder((Number(budget) - Number(difference)).toFixed(2));

    }, [storeExercise, difference, put]);

    return (
        <Box mt="70px" maxW="1348px" bg="" className={styles.addfoodBody}>
            <Box maxW="968px" display="flex">
                <Button colorScheme='teal' variant='outline' w="120px" h="30px" mb="20px" bgImage="url('./Add_Exercise.png')" >
                </Button>
            </Box>
            <Grid
                h="auto"
                maxW="968px"
                m="auto"
                bg=""
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
            // gap="72px"
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
                                        <Td textAlign="center">{budget}</Td>
                                        <Td textAlign="center">{totalCaloriesFoods}</Td>
                                        <Td textAlign="center" isNumeric>{put}</Td>
                                        <Td textAlign="center">{difference}</Td>
                                        <Td textAlign="center" >
                                            <Text fontWeight="bold" color="black" bg="#00b651">{under}</Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Exercise
                        exerciseCalories={exerciseCalories}
                    />
                </GridItem>
                <GridItem
                    margin="auto"
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
