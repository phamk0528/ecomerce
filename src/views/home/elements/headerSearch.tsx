import React from "react";
import { Box, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsSliders } from "react-icons/bs";
import ModalFilter from "./modalFilter";
import { useRecoilState } from "recoil";
import { isOpenSearch } from "@recoil/atoms";


export const HeaderSearch = ({ ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenSearchBar, setIsOpenSearchBar] = useRecoilState(isOpenSearch);

    return (
        <>
         <ModalFilter isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
         <Box

position="sticky"
top={{ base: isOpenSearchBar? "70px":"100px", md: "80px" }}
zIndex="999"
bg='white' w="100%" borderBottom={1} display={"flex"} flexDir='row' justifyContent={'space-between'} borderColor={"gray.300"} borderStyle={'solid'} px={{ base: 4 }} py="5px" shadow="lg" boxSize="full" >

<Button onClick={() =>

(onOpen())}leftIcon={<BsSliders />} colorScheme='pink' variant='solid'>
    Filter
</Button>
{/* <IconButton
    colorScheme='blue'
    aria-label='Search database'
    icon={<SearchIcon />}
/> */}
</Box></>
       
    );
};
