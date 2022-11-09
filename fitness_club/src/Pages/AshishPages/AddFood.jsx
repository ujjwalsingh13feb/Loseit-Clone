import {
    Box,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import Breakfast from "../../Components/AshishComp/Breakfast";
import Snacks from "../../Components/AshishComp/Snacks";
import Dinner from "../../Components/AshishComp/Dinner";
import Lunch from "../../Components/AshishComp/Lunch";
import styles from "./Css/AddFood.module.css";



export default function AddFood() {
    return (
        <Box maxW="1348px" bg="teal" className={styles.addfoodBody}>
            <Heading>Add Food Page</Heading>
            <Grid
                h="auto"
                maxW="968px"
                m="auto"
                bg="orange.500"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
            // gap="72px"
            >
                <GridItem
                    rowSpan={{ base: 1, sm: 1, md: 2 }}
                    colSpan={{ base: 5, sm: 5, md: 3 }}
                    bg="white"
                >
                    <Breakfast />
                    <Lunch />
                    <Dinner />
                    <Snacks />
                </GridItem>
                <GridItem
                    color="#0B6CC4"
                    rowSpan={{ base: 1, sm: 1, md: 2 }}
                    colSpan={{ base: 5, sm: 5, md: 2 }}
                    bg="papayawhip"
                >
                    <Heading>Statistics of Calories</Heading>
                </GridItem>
            </Grid>
        </Box>
    );
}
