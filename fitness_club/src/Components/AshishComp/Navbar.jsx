import { Avatar, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Css/Navbar.module.css";
import { AiFillSetting } from "react-icons/ai";
import { useSelector } from "react-redux";

const links = [
    { path: "/addfood", title: "Add Food" },
    { path: "/addexercise", title: "Add Exercise" },
];


export default function Navbar() {

    const { isAuth, isLoading, error } = useSelector((state) => state.AuthReducer)


    return (
        <Box
            bg=""
            maxW="1369px"
            h="33px"
            className={styles.NavbarBody}
        >
            <Grid
                maxW="1000px"
                bg=""
                h="33px"
                m="auto"
                // templateRows="repeat(2, 1fr)"    
                templateColumns="repeat(14, 1fr)"
                gap="0px"
            >
                <GridItem
                    colSpan={{ base: 14, sm: 14, md: 9 }}
                    bg=""

                >
                    <Grid
                        h="33px"
                        templateColumns="repeat(10, 1fr)"
                        // gap={4}
                        className={styles.NavbarBodyLeft}
                    >
                        <GridItem colSpan={{ base: 0, sm: 2, md: 2 }} bg="">
                            <NavLink>
                                <Image src="./FitnessClub.jpeg" />
                            </NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="">
                            <NavLink to="/addfood">Food</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} bg="">
                            <NavLink to="/addexercise">Exercise</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} bg="">
                            <NavLink to="/sidebar">Community</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 2, sm: 2, md: 1 }} bg="">
                            <NavLink to="#">Insights</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 0, sm: 0, md: 1 }} bg="">
                            <NavLink to="#">Forums</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 0, sm: 0, md: 1 }} bg="">
                            <NavLink to="#">Apps</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 0, sm: 0, md: 1 }} bg="">
                            <NavLink to="#">Messages</NavLink>
                        </GridItem>
                        <GridItem colSpan={{ base: 0, sm: 0, md: 1 }} bg="">
                            <NavLink to="#">
                                <AiFillSetting />
                            </NavLink>
                        </GridItem>
                    </Grid>
                </GridItem>

                <GridItem
                    colSpan={{ base: 14, sm: 14, md: 5 }}
                    bg=""

                >
                    <Grid
                        h="33px"
                        templateColumns="repeat(5, 1fr)"
                        // gap={4}
                        className={styles.NavbarBodyRight}
                    >
                        <GridItem colSpan={1} bg=""></GridItem>

                        <GridItem colSpan={1} bg="">
                            <NavLink>Name</NavLink>
                        </GridItem>
                        <GridItem colSpan={1} bg="">
                            <NavLink>Upgrade</NavLink>
                        </GridItem>
                        <GridItem colSpan={1} bg="">
                            <NavLink>Sign Out</NavLink>
                        </GridItem>
                        <GridItem colSpan={1} bg="">
                            <Box>
                                <Avatar w="33px" h="33px" src='https://bit.ly/broken-link' />
                            </Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
}
