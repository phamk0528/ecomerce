import React from "react";
import { Box, Button, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsSliders } from "react-icons/bs";


export const HeaderSearch = ({ ...rest }) => {
    return (
        <Box

            position="sticky"
            top={{ base: "99px", md: "80px" }}
            zIndex="999"
            bg='white' w="100%" borderBottom={1} display={"flex"} flexDir='row' justifyContent={'space-between'} borderColor={"gray.300"} borderStyle={'solid'} px={{ base: 4 }} py="5px" shadow="lg" boxSize="full" >

            <Button leftIcon={<BsSliders />} colorScheme='pink' variant='solid'>
                Filter
            </Button>
            {/* <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon />}
            /> */}
        </Box>
    );
};
