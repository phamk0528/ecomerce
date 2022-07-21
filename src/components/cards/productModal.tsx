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
} from '@chakra-ui/react';
import { BsFillBagPlusFill, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Tag } from 'antd';

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

function ProductModal({ item, onClick }: any) {
    return (
        <Flex p={"1px"} alignItems="center" justifyContent="center" onClick={() => onClick()}>
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="100%"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            {/* {data.isNew && ( */}
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
                    <Box fontSize="18px"color={'red.500'}>
                        <Box as="span" color={'red.500'} fontSize="15px">
                            $
                        </Box>
                        {item?.retail_price}
                    </Box>
                  
                </Flex>
                <Box
                        shadow={'md'}
                        borderRadius='10px'
                       
                        py={1}
                       
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
                    </Box>
             
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
        </Box>
    </Flex>
    );
}

export default ProductModal;