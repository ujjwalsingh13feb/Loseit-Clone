import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "./Css/FooterInside.module.css";

export default function FooterInside() {
    return (
        <Box className={styles.FooterBody}>
            <SimpleGrid  columns={{ base:4,sm: 4, md: 8 }} spacing="2px">
                <Box bg="">
                    <Text>Jobs </Text>
                </Box>
                <Box bg="" >
                    <Text>Support</Text>
                </Box>
                <Box bg="">
                    <Text>Blog</Text>
                </Box>
                <Box bg="">
                    <Text> Terms of Service </Text>
                </Box>
                <Box bg="">
                    <Text> Privacy </Text>
                </Box>
                <Box bg="">
                    <Text>About </Text>
                </Box>
                <Box bg="">
                    <Text>Accessibility</Text>
                </Box>
                <Box bg="">
                    <Text> Statement</Text>
                </Box>
            </SimpleGrid>

            <Box >
                <Text fontSize="11px" color="#A9ADB5">
                    Do Not Sell My Personal Information
                </Text>
            </Box>

            <Box>
                <Text fontSize="11px" color="#A9ADB5">
                    {" "}
                    © Copyright 2008 - 2022 FitNow, Inc. All Rights Reserved
                </Text>
            </Box>

            <Box>
                <Text fontSize="11px" color="#A9ADB5">
                    Lose It! is among the federally registered trademarks of FitNow, Inc.,
                    and may not be used by third parties without explicit permission.
                </Text>
            </Box>
        </Box>
    );
}
