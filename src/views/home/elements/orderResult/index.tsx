import React, { CSSProperties, useEffect } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text, Image, Icon, Button
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
    isShow?: boolean;
    setIsOpen: () => void;
}

export const OrderResult = ({ isShow, setIsOpen }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    useEffect(() => {
        isShow ? onOpen() : null;
    }, [isShow]);
    return (
        <>
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


                    <DrawerHeader borderBottomWidth="1px" fontSize={"18px"} color={"#A68340"}>

                        <Text fontSize='20px' mb={1} color="#A68340" textAlign={"center"}>{`Oder Placed`}</Text>
                    </DrawerHeader>
                    <DrawerBody alignItems={"center"} display={"flex"} flexDirection={"column"} >
                        <Icon
                            mt={"40px"}
                            as={AiFillCheckCircle}
                            color={"#004C45"}
                            boxSize={"8rem"}
                        />
                        <Text fontSize='xl' mt="20px" mb={1} color="#000000" fontWeight={"bold"} textAlign={"center"}> Thank you for order</Text>
                        <Text px={"30px"} fontSize='15px' color="#8A8A8F" lineHeight={"23px"} textAlign={"center"}>  Successfully</Text>




                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    );
};
