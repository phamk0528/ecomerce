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
  
  export default function ModalAccount({ isOpen, onOpen, onClose, item, data }: any) {

    const dataMock= [{
        title:"Total Points",point:0
    },
    {
        title:"Points used",point:0
    },
    {
        title:"Available Points",point:0
    }]

    const dataMock2= [{
        title:"Profile",point:0
    },
    {
        title:"My Orders",point:0
    },
    {
        title:"My Refunds",point:0
    },
    {
        title:"Change Password",point:0
    },
    {
        title:"Chẹckout",point:0
    },
    {
        title:"Logout",point:0
    }]

    return (
      <Drawer placement='right' isOpen={isOpen} onClose={onClose} size='full'  zIndex="9999">
         <DrawerOverlay />
       
        <DrawerContent maxW={'100%'} >
     
        <DrawerCloseButton />
        <DrawerHeader>Your Account</DrawerHeader>
          <Container maxW={'100%'} py="20px" px={0}>
            <Box w="100%" pt="30px" bg='gray.100' px="20px">
                {
                    dataMock?.map(x=> <Box display='flex' flexDir='row' justifyContent={'space-between'}>
                          <Text fontWeight='semibold'>{x?.title}</Text>
                          <Text fontWeight='semibold'>{x?.point}</Text>
                </Box>)
                }
           
            </Box>
            <Box w="100%" pt="30px"  px="20px">
            {
                    dataMock2?.map(x=> <Box display='flex' flexDir='row' justifyContent={'space-between'}>
                          <Text fontWeight='semibold'>{x?.title}</Text>
                        
                </Box>)
                }
           
            </Box>
          </Container>
        </DrawerContent></Drawer>
    );
  }