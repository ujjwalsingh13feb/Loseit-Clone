import { Box, Heading, Text, useStatStyles } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Css/StatisticsOfCalories.module.css";
export default function StatisticsOfCalories() {


    const { totalCaloriesFoods, totalCaloriesExercises, totalCaloriesDifference, totalCaloriesDailyBudget } = useSelector((store) => store.totalcalories)
    // console.log('totalCaloriesExercises:', totalCaloriesExercises);
    // console.log('totalCaloriesFoods:', totalCaloriesFoods);
    let count = 0;
    if (totalCaloriesFoods > 0 && totalCaloriesExercises > 0) {
        count = ((+totalCaloriesDifference) / (+totalCaloriesFoods)) * 100;
    }
    console.log('count:', count);
    const [progress, setProgress] = useState(count);

    return (
        <Box m="auto" h="246px" maxW="338px" bg="#F7F8F9" >
            <Box>
                <Box h="21px" fontSize="11px" color="rgb(9, 94, 94)" fontWeight="bold" borderBottom="1px solid grey" display="flex" bg="#D0CFD0">
                    My Day | My Week | My Nutrients
                </Box>

                <Box mt="14px" h="57px" bg="" className={styles.progressbar}>
                    <Box >
                        <Box>
                            <Text>600</Text>
                            <Text>800</Text>
                            <Text>1200</Text>
                            <Text>2400</Text>
                        </Box>
                        <Box
                            // width="100px"
                            width={`${progress}%`}
                        ></Box>
                    </Box>
                </Box>
                <Box h="100px" bg="" className={styles.CaloriesBudget}>
                    <Box >
                        <Text>Daily calorie budget</Text>
                        <Text>-</Text>
                    </Box>
                    <Box>
                        <Text>Food calories consumed</Text>
                        <Text>{totalCaloriesFoods}</Text>
                    </Box>
                    <Box>
                        <Text>Exercise calories burned</Text>
                        <Text>{totalCaloriesExercises}</Text>
                    </Box>
                    <Box>
                        <Text>Net calories so far today</Text>
                        <Text>{totalCaloriesDifference}</Text>
                    </Box>
                </Box>
                <Box h="37px" bg="" m="auto" className={styles.underdailybudget}>
                    <Text>I was
                        <span>
                            {` ${totalCaloriesDailyBudget} `}
                        </span>
                        calories under my daily budget
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
