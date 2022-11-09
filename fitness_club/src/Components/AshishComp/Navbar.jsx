import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const links = [
    { path: "/addfood", title: "Add Food" },
    { path: "/addexercise", title: "Add Exercise" },
];

export default function Navbar() {
    return (
        <Box color="black">
            {links.map((link) => (
                <NavLink key={link.path} to={link.path} end>
                    {link.title}
                </NavLink>
            ))}
        </Box>
    );
}
