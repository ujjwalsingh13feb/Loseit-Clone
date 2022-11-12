import { Box, Button, Heading, Image, Input, Select } from "@chakra-ui/react";
import styles from "./Css/SingleFood.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postbreakfast } from "../../Redux/AshsihRedux/breakfast/breakfast.action";

const dispatchDetails = {
    "calories_per_min": "",
    "duration_minutes": "",
    "total_calories_per_min": "",
    "nameExercise": "",
}

export default function SingleExercise(props) {
    const { storeExercise, open, handleOpen, handleServerData } = props;
    console.log('storeExercise:', storeExercise)
    const [store, setStore] = useState(null);
    const [duration, setDuration] = useState(1);
    // const dispatch = useDispatch();
    // const { breakfasts } = useSelector((store) => store.breakfast)
    // console.log('breakfasts:', breakfasts);
    // console.log("store:", store);

    // calories_per_hour: 435
    // duration_minutes: 60
    // name: "Skiing, water skiing"
    // total_calories: 435

    let calories_per_min = 0;
    let duration_minutes = 0;
    let total_calories_per_min = 0;

    useEffect(() => {
        setStore(storeExercise);
    }, []);

    if (store) {
        calories_per_min = ((storeExercise.calories_per_hour) / 60).toFixed(2);
        duration_minutes = ((storeExercise.duration_minutes) / 60).toFixed(2);
        total_calories_per_min = ((storeExercise.total_calories) / 60).toFixed(2);
    }

    const handleBack = () => {
        handleOpen();
    };


    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };
    calories_per_min = (calories_per_min * duration).toFixed(2);
    duration_minutes = (duration_minutes * duration).toFixed(2);
    total_calories_per_min = (total_calories_per_min * duration).toFixed(2);


    const handleAddExercise = () => {
        if (store) {
            dispatchDetails.calories_per_min = calories_per_min;
            dispatchDetails.duration_minutes = duration_minutes;
            dispatchDetails.total_calories_per_min = total_calories_per_min;
            dispatchDetails.nameExercise = storeExercise.name;
        }
        console.log('dispatchDetails:', dispatchDetails);
        handleServerData(dispatchDetails);
        // dispatch(postbreakfast(dispatchDetails));
        handleOpen();
    };


    console.log('calories_per_min:', calories_per_min)
    console.log('duration_minutes:', duration_minutes)
    console.log('total_calories_per_min:', total_calories_per_min)


    return (
        <Box
            color="black"
            w="400"
            h="300"
            bg="white"
            className={styles.SinglefoodBody}
        >
            <Box className={styles.BackButton}>
                <Button colorScheme="white" onClick={handleBack}>
                    <MdOutlineKeyboardBackspace />
                    All Result
                </Button>
            </Box>

            <Box className={styles.SingleHeading}>
                <Image w="30px" src="/FitnessClub.png" />
                <Heading as="h1" fontSize="14px" ml="10px">
                    {storeExercise.name}
                </Heading>
            </Box>

            <Box className={styles.SingleFoodMicro}>
                <Box mt="15px" bg="">
                    {/* duration */}
                    <Input
                        colorScheme="black"
                        color="black"
                        background="gray.300"
                        type="number"
                        placeholder="Qty"
                        value={duration}
                        onChange={handleDurationChange}
                    />

                    <Button
                        background="gray.300"
                        colorScheme="teal.300"
                        w="100px"
                        h="30px"
                        onClick={handleAddExercise}
                    >
                        Add Exercise
                    </Button>
                </Box>

                <Box mt="15px">
                    <Box m="" className={styles.singleCalories}>
                        <Heading as="h4"> Calories</Heading>
                        <Heading as="h1"> {calories_per_min}</Heading>
                    </Box>
                    <Box m="" 
                    // className={styles.singleMicroNutri} 
                    display="flex" flexDirection="column"
                    marginLeft="50px"
                    marginRight="75px"
                
                    >
                        <Box >
                            <Heading as="h4" fontSize="14px" >Duration</Heading>
                            <Heading as="h1" fontSize="14px">{duration_minutes} min</Heading>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Image m="auto" mt="5px" w="80px" src="/FitnessClub.png" />
            </Box>
        </Box>
    );
}
