import React from "react";
import { Box, Button, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineMenu ,AiOutlineSearch,AiOutlineHome} from "react-icons/ai";
import { BsBag, BsPerson } from "react-icons/bs";
import { useRecoilState } from 'recoil';
import { isOpenSearch } from "@recoil/atoms";

export const BottomBar = ({ ...rest }) => {
  const [isOpenSearchBar, setIsOpenSearchBar] = useRecoilState(isOpenSearch);

    return (
        <Box

            position="sticky"
            bottom={{ base: "0", md: "80px" }}
            display={{base: "flex", md: "none"}}
            zIndex="999"
            bg='white' w="100%" borderTop={1}  flexDir='row' justifyContent={'space-between'} borderColor={"gray.300"} borderStyle={'solid'} px={{ base: 4 }} py="5px" shadow="lg" boxSize="full" >

            <Button leftIcon={<AiOutlineMenu />} colorScheme='white' variant='solid' color='black'/>

            <Button onClick={()=>{setIsOpenSearchBar(!isOpenSearchBar)}} leftIcon={<AiOutlineSearch />} colorScheme='white' variant='solid' color='black'/>
            <Button leftIcon={<AiOutlineHome />} colorScheme='white' variant='solid' color='black'/>
            <Button leftIcon={<BsBag />} colorScheme='white' variant='solid' color='black'/>
            <Button leftIcon={<BsPerson />} colorScheme='white' variant='solid' color='black'/>
   
        </Box>
    );
};