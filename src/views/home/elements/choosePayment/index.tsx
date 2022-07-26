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
    Text, Button, Image, Box, Flex, Center, InputGroup, InputLeftElement, Input, Divider
} from "@chakra-ui/react";
import { OrderResult } from "../orderResult";
import { Infomation } from "../infomationCustomer";
import { PhoneIcon } from "@chakra-ui/icons";
import { MdHomeFilled } from "react-icons/md";
import { myCartState } from "@recoil/atoms/cart";
import { useRecoilState } from "recoil";

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

    let dataMock = [{
        title: "Express Delivery",
        detail: "90 min express delivery"
    }, {
        title: "Morning",
        detail: "8.00 AM - 11.00 AM"
    }, {
        title: "Noon",
        detail: "11.00 AM - 2.00 PM"
    }, {
        title: "Afternoon",
        detail: "2.00 PM - 5.00 PM"
    }, {
        title: "Evening",
        detail: "5.00 PM - 8.00 PM"
    }]
    const [cart, setCart] = useRecoilState(myCartState)
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(0)


    useEffect(() => {
        let amount = cart?.reduce((total: any, currentValue: any) => {
            return total + currentValue?.quantity;
        }, 0)

        let priceTotal = cart?.reduce((total: any, currentValue: any) => {
            return total + currentValue?.quantity * currentValue?.retail_price;
        }, 0)
        setTotal(amount ? amount : 0)
        setPrice(priceTotal ? priceTotal : 0)
    }, [cart])

    return (
        <>

            <Infomation isShow={isShowResult} setIsOpen={() => setIsShowResult(false)} />
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
                        BCX Ecomerce
                    </DrawerHeader>
                    <DrawerBody alignItems={"center"} display={"flex"} flexDirection={"column"} px="10px">
                        <Box

                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'} mt="15px">

                            <Flex justifyContent={'space-between'}>
                                <Center color='black' fontSize='lg'>
                                    <Center w='40px' h='40px' bg='green' color='white' mr="5px" borderRadius={"30px"}>
                                        <Box as='span' fontWeight='bold' fontSize='lg'>
                                            1
                                        </Box>
                                    </Center>
                                    Contact Number
                                </Center>
                                <Center px="10px" color='green'>
                                    <Box as='span' fontSize='lg'>
                                        +Add
                                    </Box>
                                </Center>
                            </Flex>
                            <InputGroup mt="20px">
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<PhoneIcon color='gray.300' />}
                                />
                                <Input type='tel' placeholder='Phone number' />
                            </InputGroup>
                        </Box>

                        <Box

                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'} mt="15px">

                            <Flex justifyContent={'space-between'}>
                                <Center color='black' fontSize='lg'>
                                    <Center w='40px' h='40px' bg='green' color='white' mr="5px" borderRadius={"30px"}>
                                        <Box as='span' fontWeight='bold' fontSize='lg'>
                                            2
                                        </Box>
                                    </Center>

                                    Billing Address
                                </Center>
                                <Center px="10px" color='green'>
                                    <Box as='span' fontSize='lg'>
                                        +Add
                                    </Box>
                                </Center>
                            </Flex>
                            <InputGroup mt="20px">
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<MdHomeFilled color='gray.300' />}
                                />
                                <Input placeholder='Address' />
                            </InputGroup>
                        </Box>

                        <Box
                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'} mt="15px">

                            <Flex justifyContent={'space-between'}>
                                <Center color='black' fontSize='lg'>
                                    <Center w='40px' h='40px' bg='green' color='white' mr="5px" borderRadius={"30px"}>
                                        <Box as='span' fontWeight='bold' fontSize='lg'>
                                            3
                                        </Box>
                                    </Center>

                                    Shipping Address


                                </Center>
                                <Center px="10px" color='green'>
                                    <Box as='span' fontSize='lg'>
                                        +Add
                                    </Box>
                                </Center>
                            </Flex>
                            <InputGroup mt="20px">
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<MdHomeFilled color='gray.300' />}
                                />
                                <Input placeholder='Address' />
                            </InputGroup>
                        </Box>

                        <Box

                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'} mt="15px">

                            <Flex justifyContent={'space-between'}>
                                <Center color='black' fontSize='lg'>
                                    <Center w='40px' h='40px' bg='green' color='white' mr="5px" borderRadius={"30px"}>
                                        <Box as='span' fontWeight='bold' fontSize='lg'>
                                            4
                                        </Box>
                                    </Center>

                                    Delivery Schedule



                                </Center>

                            </Flex>
                            {
                                dataMock?.map(item => <Box display={'flex'} flexDir='column' justifyContent={'flex-start'} borderWidth='1px' mt="15px" py="10px">

                                    <Text fontSize={'lg'} fontWeight='bold'>{item?.title}</Text>
                                    <Text>{item?.detail}</Text>

                                </Box>)
                            }


                        </Box>


                        <Box

                            w={'full'}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            p={6}
                            textAlign={'center'} mt="15px">
                            <Text fontSize={'lg'} fontWeight='bold'>Your Order</Text>
                            {
                                cart?.map(item => <Box display={'flex'} flexDir='row' justifyContent={'space-between'} mt="15px" py="10px">
                                    <Text fontSize={'sm'} fontWeight='bold'>{`${item?.quantity} x ${item?.product_name}`}</Text>
                                    <Text fontSize={'sm'}>{`${item?.quantity * item?.retail_price} $`}</Text>
                                </Box>)
                            }
                            <Divider />

                            <Box display={'flex'} flexDir='row' justifyContent={'space-between'} py="2px">
                                <Text fontSize={'sm'} >{`Subtotal`}</Text>
                                <Text fontSize={'sm'} >{`${price} $`}</Text>
                            </Box>

                            <Box display={'flex'} flexDir='row' justifyContent={'space-between'} py="2px">
                                <Text fontSize={'sm'} >{`Tax`}</Text>
                                <Text fontSize={'sm'}>{`${price * 0.1} $`}</Text>
                            </Box>


                            <Box display={'flex'} flexDir='row' justifyContent={'space-between'} py="2px">
                                <Text fontSize={'sm'} >{`Estimated Shipping`}</Text>
                                <Text fontSize={'sm'}>{`10 $`}</Text>
                            </Box>
                            <Button colorScheme='green' size='lg' w="100%" onClick={() => setIsShowResult(true)}>
                                Checkout
                            </Button>

                        </Box>






                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    );
};
