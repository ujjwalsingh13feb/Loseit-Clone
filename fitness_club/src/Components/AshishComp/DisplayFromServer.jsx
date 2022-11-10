import { Button, Td, Tr } from "@chakra-ui/react"
import { ImCross } from "react-icons/im"

export default function DisplayFromServer({ item, handleDeleteItem }) {
    // console.log('item:', item);
    const handleDelete = (item) => {
        handleDeleteItem(item);
    }

    return (
        <Tr>
            <Td>{item.label}</Td>
            <Td textAlign="center">{item.Quantity}</Td>
            <Td textAlign="center" isNumeric>
                {item.Calories}
            </Td>
            <Td>
                <Button onClick={() => handleDelete(item)}><ImCross /></Button>
            </Td>
        </Tr>
    )
}