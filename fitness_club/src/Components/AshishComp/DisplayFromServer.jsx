import { Button, Td, Tr } from "@chakra-ui/react"
import { ImCross } from "react-icons/im"
import styles from "./Css/DisplayItem.module.css";

export default function DisplayFromServer({ item, handleDeleteItem }) {
    // console.log('item:', item);
    const handleDelete = (item) => {
        handleDeleteItem(item);
    }

    return (
        <Tr>
            <Td>{item.label}</Td>
            <Td color="black" textAlign="center">{item.Quantity}</Td>
            <Td color="black" textAlign="center" isNumeric>
                {item.Calories}
            </Td>
            <Td>
                <Button 
                    borderRadius="20px"
                    h="10px"
                    w="10px"
                    // bg="gray"
                    className={styles.buttonFoodDelete}
                    color="black"
                    onClick={() => handleDelete(item)}><ImCross/></Button>
            </Td>
        </Tr>
    )
}