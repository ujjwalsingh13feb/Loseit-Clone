import { Box, Button, Heading, Image, Input, Select } from "@chakra-ui/react";
import styles from "./Css/SingleFood.module.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postbreakfast } from "../../Redux/AshsihRedux/breakfast/breakfast.action";

const dispatchDetails = {
    "foodId": "",
    "label": "",
    "Calories": "",
    "Protein": "",
    "Carbohydrates": "",
    "Fat": "",
    "Quantity": "",
}

export default function SingleFood(props) {
    const { storeFood, open, handleOpen, handleServerData } = props;
    const [store, setStore] = useState(null);
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(1);
    // const dispatch = useDispatch();
    // const { breakfasts } = useSelector((store) => store.breakfast)
    // console.log('breakfasts:', breakfasts);
    // console.log("store:", store);

    let CalValue = 0;
    let ProValue = 0;
    let CabValue = 0;
    let FatValue = 0;
    useEffect(() => {
        setStore(storeFood.nutrients);
    }, []);

    if (store) {
        // console.log(store.ENERC_KCAL);
        CalValue = store.ENERC_KCAL;
        ProValue = store.PROCNT;
        CabValue = store.CHOCDF;
        FatValue = store.FAT;
    }

    const handleBack = () => {
        handleOpen();
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };
    CalValue = (CalValue * quantity).toFixed(2);
    ProValue = (ProValue * quantity).toFixed(2);
    CabValue = (CabValue * quantity).toFixed(2);
    FatValue = (FatValue * quantity).toFixed(2);

    const handleType = (e) => {
        setType(e.target.value);
    };
    switch (type) {
        case "Gram": {
            CalValue *= 0.1;
            CabValue *= 0.1;
            ProValue *= 0.1;
            FatValue *= 0.1;
        }
        case "Ounce": {
            CalValue = (CalValue * 0.35).toFixed(2);
            CabValue = (CabValue * 0.35).toFixed(2);
            ProValue = (ProValue * 0.35).toFixed(2);
            FatValue = (FatValue * 0.35).toFixed(2);
        }
        case "Pound": {
            CalValue = (CalValue * 2.2).toFixed(2);
            CabValue = (CabValue * 2.2).toFixed(2);
            ProValue = (ProValue * 2.2).toFixed(2);
            FatValue = (FatValue * 2.2).toFixed(2);
        }
        case "Kilogram": {
            CalValue *= 10;
            CabValue *= 10;
            ProValue *= 10;
            FatValue *= 10;
        }
        case "Glass": {
            CalValue = (CalValue * 0.25).toFixed(2);
            CabValue = (CabValue * 0.25).toFixed(2);
            ProValue = (ProValue * 0.25).toFixed(2);
            FatValue = (FatValue * 0.25).toFixed(2);
        }
        default: {
            CalValue *= 1;
            CabValue *= 1;
            ProValue *= 1;
            FatValue *= 1;
        }
    }

    const handleAddFood = () => {
        if (store) {
            dispatchDetails.Calories = CalValue;
            dispatchDetails.Carbohydrates = CabValue;
            dispatchDetails.Fat = FatValue;
            dispatchDetails.Protein = ProValue;
            dispatchDetails.foodId = storeFood.foodId;
            dispatchDetails.label = storeFood.label;
            dispatchDetails.Quantity = quantity;
        }
        // console.log('dispatchDetails:', dispatchDetails);
        handleServerData(dispatchDetails);
        // dispatch(postbreakfast(dispatchDetails));
        handleOpen();
    };





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
                    {storeFood.label}
                </Heading>
            </Box>

            <Box className={styles.SingleFoodMicro}>
                <Box mt="15px" bg="">
                    {/* Quantity */}
                    <Input
                        colorScheme="black"
                        color="black"
                        background="gray.300"
                        type="number"
                        placeholder="Qty"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />

                    {/* type gram , Ounce, Pound, Kilogram */}
                    <Select
                        background="gray.300"
                        w="140px"
                        h="30px"
                        placeholder="Select option"
                        onChange={handleType}
                    >
                        <option value="Gram">Gram</option>
                        <option value="Ounce">Ounce</option>
                        <option value="Pound">Pound</option>
                        <option value="Kilogram">Kilogram</option>
                        <option value="Glass">1 Glass</option>
                    </Select>

                    <Button
                        background="gray.300"
                        colorScheme="teal.300"
                        w="100px"
                        h="30px"
                        onClick={handleAddFood}
                    >
                        Add Food
                    </Button>
                </Box>

                <Box mt="15px">
                    <Box m="" className={styles.singleCalories}>
                        <Heading as="h4"> Calories</Heading>
                        <Heading as="h1"> {CalValue}</Heading>
                    </Box>
                    <Box m="" className={styles.singleMicroNutri}>
                        <Box>
                            <Heading as="h4">Proteins</Heading>
                            <Heading as="h1">{ProValue} g</Heading>
                        </Box>
                        <Box>
                            <Heading as="h4">Fats</Heading>
                            <Heading as="h1">{FatValue} g</Heading>
                        </Box>
                        <Box>
                            <Heading as="h4">Carbs</Heading>
                            <Heading as="h1">{CabValue} g</Heading>
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
