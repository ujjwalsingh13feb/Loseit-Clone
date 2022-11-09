import { Box, Button } from "@chakra-ui/react";
import styles from "./Css/SingleFood.module.css";

export default function SingleFood(props) {
    const { storeFood, open, handleOpen } = props;
    console.log('open FROM sINGLE:', open)
    console.log('storeFood:', storeFood)
    const handleBack = () => {
        handleOpen();
    }
    return (
        <Box w="400" h="200" bg="white" className={styles.SinglefoodBody}>
            <Box>
                <Button colorScheme="white" color="black" onClick={handleBack}>--All Result</Button>
            </Box>
            <Box>

            </Box>

        </Box>
    )
}