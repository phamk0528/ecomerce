import React, { useState } from "react";
import { Box, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineMenu ,AiOutlineSearch,AiOutlineHome} from "react-icons/ai";
import { BsBag, BsPerson } from "react-icons/bs";
import { useRecoilState } from 'recoil';
import { isOpenSearch } from "@recoil/atoms";
import ModalAccount from "./modalAccount";
import ModalMenu from "./modalMenu";

export const BottomBar = ({ ...rest }) => {
  const [isOpenSearchBar, setIsOpenSearchBar] = useRecoilState(isOpenSearch);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpenModalMenu,setIsOpenModalMenu]=useState(false)


    return (
        <>
        <ModalAccount isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <ModalMenu isOpen={isOpenModalMenu}  onClose={()=>setIsOpenModalMenu(false)} />

        <Box

            position="sticky"
            bottom={{ base: "0", md: "80px" }}
            display={{base: "flex", md: "none"}}
            zIndex="999"
            bg='white' w="100%" borderTop={1}  flexDir='row' justifyContent={'space-between'} borderColor={"gray.300"} borderStyle={'solid'} px={{ base: 4 }} py="5px" shadow="lg" boxSize="full" >

            <Button onClick={()=>{setIsOpenModalMenu(true)}} leftIcon={<AiOutlineMenu />} colorScheme='white' variant='solid' color='black'/>

            <Button onClick={()=>{setIsOpenSearchBar(!isOpenSearchBar)}} leftIcon={<AiOutlineSearch />} colorScheme='white' variant='solid' color='black'/>
            <Button leftIcon={<AiOutlineHome />} colorScheme='white' variant='solid' color='black'/>
            <Button leftIcon={<BsBag />} colorScheme='white' variant='solid' color='black'/>
            <Button  onClick={()=>{onOpen()}} leftIcon={<BsPerson />} colorScheme='white' variant='solid' color='black'/>
   
        </Box></>
    );
};