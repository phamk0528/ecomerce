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
  } from '@chakra-ui/react';
  import ProductAddToCart from '@components/cards/productCard';
  import ProductModal from '@components/cards/productModal';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function ModalMenu({ isOpen, onOpen, onClose, item, data }: any) {



    const dataMock2= [{
        title:"Profile",point:0
    },
    {
        title:"Shops",point:0
    },
    {
        title:"Manufacturers/Publishers",point:0
    },
    {
        title:"Authors",point:0
    },
    {
        title:"Offers",point:0
    },
    {
        title:"FAQ",point:0
    },  {
        title:"Contact",point:0
    }]

    return (
      <Drawer placement='left' isOpen={isOpen} onClose={onClose} size='full'  zIndex="9999">
         <DrawerOverlay />
       
        <DrawerContent maxW={'100%'} >
     
        <DrawerCloseButton />
        <DrawerHeader>BCX Ecomerce</DrawerHeader>
          <Container maxW={'100%'} py="10px" px={0}>
  
            <Box w="100%" pt="30px"  px="20px">
            {
                    dataMock2?.map(x=> <Box display='flex' py="10px" flexDir='row' justifyContent={'space-between'}>
                          <Text fontWeight='semibold'>{x?.title}</Text>
                        
                </Box>)
                }
           
            </Box>
          </Container>
        </DrawerContent></Drawer>
    );
  }