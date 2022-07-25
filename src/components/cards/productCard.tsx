import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    IconButton, Text
} from '@chakra-ui/react';
import { BsCartPlusFill, BsFillBagPlusFill, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Tag } from 'antd';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { myCartState } from '@recoil/atoms/cart';

const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

interface RatingProps {
    rating: number;
    numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
    return (
        <Box d="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

function ProductAddToCart({ item, onClick }: any) {
    const [count, setCount] = useState(0)
    const quantity = useRef(0)
    const btnRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useRecoilState(myCartState)

    console.log("cart", cart)
    useEffect(() => {
        if (count > 0) {
            let itemFilter = [...cart]?.find((x: any) => x?.uniq_id === item?.uniq_id)
            let dataCart = itemFilter ? [...[...cart]?.filter((x: any) => x?.uniq_id !== item?.uniq_id), ...[{ ...itemFilter, quantity: quantity.current }]] : [...cart, ...[{ ...item, quantity: quantity.current }]]
            setCart([...dataCart])
        }



    }, [count])
    return (
        <Flex p={"1px"} alignItems="center" justifyContent="center" >
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                minW="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                py="10px"
                px="10px"
            >
                {/* {data.isNew && ( */}
                <Box width={"100%"} onClick={() => onClick()}>
                    <Circle
                        size="40px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="#F1C411"
                        color='white'
                        rounded="full" px="2" fontSize="0.8em"
                    >-20%</Circle>


                    {/* )} */}

                    {item?.image && item?.image[0] && <Image
                        src={item?.image[0]}
                        alt={`Picture of ${item?.product_name}`}
                        roundedTop="lg"
                        alignSelf={'center'}
                        w="100%"
                        height={"120px"}
                        objectFit='contain'
                    />}

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">

                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                {item?.brand}
                            </Badge>

                        </Box>


                        <Flex mt="1" justifyContent="space-between" alignContent="center" flexDir="column">
                            <Box
                                fontSize="13px"
                                fontWeight="semibold"

                                lineHeight="tight"
                                isTruncated>
                                {item?.product_name}
                            </Box>

                        </Flex>
                        <Flex justifyContent="space-between" alignContent="center" flexDir='row'>
                            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                            <Box fontSize="18px" color={'red.500'}>
                                <Box as="span" color={'red.500'} fontSize="15px">
                                    $
                                </Box>
                                {item?.retail_price}
                            </Box>

                        </Flex>
                    </Box>
                </Box>
                {
                    !isOpen ? <Box
                        shadow={'md'}
                        borderRadius='10px'

                        py={1}
                        onClick={() => setIsOpen(true)}
                        fontSize={'1em'}
                        display='flex'
                        justifyContent={'center'}
                        alignContent="center"
                        alignItems='center'
                        flexDir='row'
                        bg='green'
                        color="white">

                        <Icon color="white" as={BsFillBagPlusFill} h={4} w={5} alignSelf={'center'} />
                        Cart
                    </Box> : <Flex direction={"row"} alignItems={"center"} justifyContent="center">

                        <IconButton
                            _focus={{
                                borderWidth: 0
                            }}
                            onClick={() =>
                                setCount((c) => {
                                    if (c - 1 < 1) {
                                        setIsOpen(false)
                                        return 1
                                    }
                                    // setTotal({ ...total, total: total.total - dish.prices[0].price })
                                    quantity.current--
                                    return c - 1
                                })}
                            colorScheme='white'
                            aria-label='Call Sage'
                            borderWidth={0}
                            fontSize='30px'
                            icon={<AiFillMinusCircle color="green" />}
                        />
                        <Text fontSize={'1em'} mb="0px" color={"#8A8A8F"}>{count}</Text>

                        <IconButton
                            _focus={{
                                borderWidth: 0
                            }}
                            onClick={() =>
                                setCount((c) => {
                                    // setTotal({ ...total, total: total.total + dish.prices[0].price })
                                    quantity.current++
                                    return c + 1
                                })}
                            colorScheme='white'
                            borderWidth={0}
                            aria-label='Call Sage'
                            fontSize='30px'
                            icon={<AiFillPlusCircle color="green" />}
                        />
                    </Flex>
                }




                {/* <div>
                        {Array.isArray(item?.categories) ? (
                            item.categories.map((category: any) => (
                                <Tag>{category}</Tag>
                            ))
                        ) : (
                            <Tag>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item?.categories,
                                    }}
                                />
                            </Tag>
                        )}
                    </div> */}

            </Box>
        </Flex>
    );
}

export default ProductAddToCart;