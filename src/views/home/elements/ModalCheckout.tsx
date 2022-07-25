import { MultiList, RangeInput } from '@appbaseio/reactivesearch';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    ModalContent,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    Divider,
    DrawerFooter,
    DrawerBody,
} from '@chakra-ui/react';
import ProductAddToCart from '@components/cards/productCard';
import ProductModal from '@components/cards/productModal';
import { myCartState } from '@recoil/atoms/cart';
import { useEffect, useState } from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { PaymentModal } from './choosePayment';

export default function ModalCheckout({ isOpen, onClose }: any) {

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

    const [isShowPayment, setIsShowPayment] = useState<boolean>(false)


    return (
        <>
            <PaymentModal isShow={isShowPayment} setIsOpen={() => setIsShowPayment(false)} />
            <Drawer placement='left' isOpen={isOpen} onClose={onClose} size='full' zIndex="9999">
                <DrawerOverlay />

                <DrawerContent maxW={'100%'} h="100vh" overflowY={'auto'}>

                    <DrawerCloseButton />
                    <DrawerHeader fontSize={"30px"} display='flex' flexDir={'row'} alignItems='center'><BsFillBagCheckFill color="green" /> {`  ${total}`}</DrawerHeader>
                    <Divider />

                    <DrawerBody px="5px">
                        <Box w="100%" pt="10px" >
                            {
                                cart?.map((item: any) => (
                                    <Flex
                                        maxW="md"
                                        mx="auto"
                                        bg="white"
                                        _dark={{
                                            bg: "gray.800",
                                        }}
                                        shadow="lg"
                                        rounded="lg"
                                        overflow="hidden"
                                        mb="10px"
                                    >

                                        {item?.image && item?.image[0] && <Image
                                            src={item?.image[0]}
                                            alt={`Picture of ${item?.product_name}`}
                                            roundedTop="lg"
                                            alignSelf={'center'}
                                            w={1 / 3}

                                            objectFit='contain'
                                        />}


                                        <Box
                                            w={2 / 3}
                                            p={{
                                                base: 4,
                                                md: 4,
                                            }}
                                        >
                                            <chakra.h1
                                                fontSize="1xl"
                                                fontWeight="bold"
                                                color="gray.800"
                                                _dark={{
                                                    color: "white",
                                                }}
                                            >
                                                {item?.product_name}
                                            </chakra.h1>

                                            <chakra.p
                                                mt={2}
                                                fontSize="sm"
                                                color="gray.600"
                                                _dark={{
                                                    color: "gray.400",
                                                }}
                                            >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
                                            </chakra.p>



                                            <Flex mt={3} alignItems="center" justifyContent="space-between">
                                                <chakra.h1 color="green" fontWeight="bold" fontSize="lg">
                                                    ${item?.retail_price}
                                                </chakra.h1>
                                                <chakra.h1 color="black" fontWeight="bold" fontSize="lg">
                                                    x{item?.quantity}
                                                </chakra.h1>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                ))
                            }


                        </Box>

                    </DrawerBody>
                    <DrawerFooter>
                        <Box onClick={() => { onClose(), setIsShowPayment(true) }} bgColor={'green'} w="100%" display='flex' justifyContent={'space-between'} py="10px" px="15px" borderRadius={"20px"}>
                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg" mb='0px'>
                                Checkout
                            </chakra.h1>
                            <Box bgColor="white" px="20px" py="5px" borderRadius={"20px"} fontWeight="bold">${price}</Box>
                        </Box>
                    </DrawerFooter>
                </DrawerContent></Drawer >
        </>
    );
}

