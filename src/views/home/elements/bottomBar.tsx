import React, { useEffect, useState } from "react";
import { Box, Button, chakra, IconButton, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { BsBag, BsPerson } from "react-icons/bs";
import { useRecoilState } from 'recoil';
import { isOpenSearch } from "@recoil/atoms";
import ModalAccount from "./modalAccount";
import ModalMenu from "./modalMenu";
import { myCartState } from "@recoil/atoms/cart";
import ModalCheckout from "./ModalCheckout";

export const BottomBar = ({ ...rest }) => {
    const [isOpenSearchBar, setIsOpenSearchBar] = useRecoilState(isOpenSearch);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isOpenModalMenu, setIsOpenModalMenu] = useState(false)
    const [isOpenModalCheckout, setIsOpenModalCheckout] = useState(false)
    const [total, setTotal] = useState(0)

    const [cart, setCart] = useRecoilState(myCartState)

    useEffect(() => {
        let amount = cart?.reduce((total: any, currentValue: any) => {
            return total + currentValue?.quantity;
        }, 0)
        setTotal(amount ? amount : 0)
    }, [cart])



    return (
        <>
            <ModalAccount isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <ModalMenu isOpen={isOpenModalMenu} onClose={() => setIsOpenModalMenu(false)} />
            <ModalCheckout isOpen={isOpenModalCheckout} onClose={() => setIsOpenModalCheckout(false)} />

            <Box

                position="sticky"
                bottom={{ base: "0", md: "80px" }}
                display={{ base: "flex", md: "none" }}
                zIndex="999"
                bg='white' w="100%" borderTop={1} flexDir='row' justifyContent={'space-between'} borderColor={"gray.300"} borderStyle={'solid'} px={{ base: 4 }} py="5px" shadow="lg" boxSize="full" >

                <Button onClick={() => { setIsOpenModalMenu(true) }} leftIcon={<AiOutlineMenu />} colorScheme='white' variant='solid' color='black' />

                <Button onClick={() => { setIsOpenSearchBar(!isOpenSearchBar) }} leftIcon={<AiOutlineSearch />} colorScheme='white' variant='solid' color='black' />
                <Button leftIcon={<AiOutlineHome />} colorScheme='white' variant='solid' color='black' />
                {/* <Button leftIcon={<BsBag />} colorScheme='white' variant='solid' color='black'/> */}
                <IconButton
                    aria-label="label"
                    colorScheme='white' variant='solid'
                    size="md"
                    color='black'
                    onClick={() => { setIsOpenModalCheckout(true) }}
                    icon={
                        <>
                            <BsBag />
                            {
                                total > 0 ? <chakra.span
                                    pos="absolute"
                                    top="-1px"
                                    right="-1px"
                                    px={2}
                                    py={1}
                                    fontSize="xs"
                                    fontWeight="bold"
                                    lineHeight="none"
                                    color="red.100"
                                    transform="translate(50%,-50%)"
                                    bg="red.600"
                                    rounded="full"
                                >
                                    {total}
                                </chakra.span> : null
                            }
                        </>
                    }
                />


                <Button onClick={() => { onOpen() }} leftIcon={<BsPerson />} colorScheme='white' variant='solid' color='black' />

            </Box></>
    );
};