import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import Breakfast from "../../Components/AshishComp/Breakfast";
import Snacks from "../../Components/AshishComp/Snacks";
import Dinner from "../../Components/AshishComp/Dinner";
import Lunch from "../../Components/AshishComp/Lunch";
import styles from "./Css/AddFood.module.css";
import Exercise from "../../Components/AshishComp/Exercise";
import WeightUpdate from "../../Components/AshishComp/WeightUpdate";
import StatisticsOfCalories from "../../Components/AshishComp/StatisticsOfCalories";



export default function AddExercise() {
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
                    <Exercise />
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
