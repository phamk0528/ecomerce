import React, { useState, useEffect } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text, Button, Image
} from "@chakra-ui/react";
import { OrderResult } from "../orderResult";

interface Props {
    isShow?: boolean;
    setIsOpen: () => void;
}

export const PaymentModal = ({ isShow, setIsOpen }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [isShowResult, setIsShowResult] = useState<boolean>(false)

    useEffect(() => {
        isShow ? onOpen() : null;
    }, [isShow]);
    return (
        <>
            <OrderResult isShow={isShowResult} setIsOpen={() => setIsShowResult(false)} />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={() => {
                    setIsOpen(), onClose();
                }}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor={"#F7F7F7"}>
                    <DrawerCloseButton color={"#A68340"} mt="7px" />

                    <DrawerHeader borderBottomWidth="1px" fontSize={"18px"} color={"#A68340"}>
                        Choose Payment Method
                    </DrawerHeader>
                    <DrawerBody alignItems={"center"} display={"flex"} flexDirection={"column"} justifyContent={"center"} px="0">
                        <Image
                            onClick={() => { onClose(), setIsShowResult(true) }}
                            backgroundColor={"white"}
                            width={{ base: '100%' }}
                            height={{ base: "20vh" }}
                            src={"https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"}

                            objectFit="contain"
                        />
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    );
};
