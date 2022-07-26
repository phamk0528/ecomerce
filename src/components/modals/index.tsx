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
  IconButton,
} from '@chakra-ui/react';
import ProductAddToCart from '@components/cards/productCard';
import ProductModal from '@components/cards/productModal';
import { myCartState } from '@recoil/atoms/cart';
import { useEffect, useRef, useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { useRecoilState } from 'recoil';

export default function Modals({ isOpen, onOpen, onClose, item, data }: any) {

  const [count, setCount] = useState(0)
  const quantity = useRef(0)

  const [isOpenCart, setIsOpenCart] = useState(false);
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
    <Modal isOpen={isOpen} onClose={onClose} size='full' zIndex="9999">
      <ModalOverlay />
      <ModalContent maxW={'100%'}>

        <ModalCloseButton />
        <Container maxW={'100%'}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}>
            <Flex>
              {item?.image && item?.image[0] ? <Image
                rounded={'md'}
                alt={'product image'}
                src={item?.image[0]}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '450px' }}
              /> : null}
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                  {item?.product_name}
                </Heading>
                <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}>
                  $ {item?.retail_price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>Chronograph</ListItem>
                      <ListItem>Master Chronometer Certified</ListItem>{' '}
                      <ListItem>Tachymeter</ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>Anti‑magnetic</ListItem>
                      <ListItem>Chronometer</ListItem>
                      <ListItem>Small seconds</ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Branch:
                      </Text>{' '}
                      {item?.brand}
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Bracelet:
                      </Text>{' '}
                      leather strap
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case:
                      </Text>{' '}
                      Steel
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Case diameter:
                      </Text>{' '}
                      42 mm
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Dial color:
                      </Text>{' '}
                      Black
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Crystal:
                      </Text>{' '}
                      Domed, scratch‑resistant sapphire crystal with anti‑reflective
                      treatment inside
                    </ListItem>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        Water resistance:
                      </Text>{' '}
                      5 bar (50 metres / 167 feet){' '}
                    </ListItem>
                  </List>
                </Box>
              </Stack>



              {
                !isOpenCart ? <Button
                  onClick={() => setIsOpenCart(true)}
                  rounded={'none'}
                  w={'full'}
                  mt={8}
                  size={'lg'}
                  py={'7'}
                  bg={useColorModeValue('gray.900', 'gray.50')}
                  color={useColorModeValue('white', 'gray.900')}
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}>
                  Add to cart
                </Button> : <Flex direction={"row"} alignItems={"center"} justifyContent="center">

                  <IconButton
                    _focus={{
                      borderWidth: 0
                    }}
                    onClick={() =>
                      setCount((c) => {
                        if (c - 1 < 1) {
                          setIsOpenCart(false)
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

              <Stack direction="row" alignItems="center" justifyContent={'center'}>
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
          <SimpleGrid columns={2} >
            {data.map((item) => (<>


              <ProductModal item={item} /></>
            ))}
          </SimpleGrid>
        </Container>
      </ModalContent></Modal>
  );
}