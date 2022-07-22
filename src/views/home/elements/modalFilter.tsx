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
  } from '@chakra-ui/react';
  import ProductAddToCart from '@components/cards/productCard';
  import ProductModal from '@components/cards/productModal';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function ModalFilter({ isOpen, onOpen, onClose, item, data }: any) {
    return (
      <Drawer placement='left' isOpen={isOpen} onClose={onClose} size='full'  zIndex="9999">
         <DrawerOverlay />
       
        {/* <DrawerContent maxW={'100%'}> */}
     
        <DrawerCloseButton />
          <Container maxW={'100%'} py="20px">
          <MultiList
                            componentId="categories"
                            dataField="categories.keyword"
                            className="filter"
                            title="Categories"
                            filterLabel="Categories"
                            size={10}
                            sortBy="count"
                            react={{ and: ["search", "brand"] }}
                        />

                        <MultiList
                            componentId="brand"
                            dataField="brand.keyword"
                            className="filter"
                            title="Brand"
                            filterLabel="Brand"
                            size={10}
                            sortBy="count"
                            react={{ and: ["search", "categories"] }}
                        />

                        <RangeInput
                            componentId="retail_price"
                            dataField="retail_price"
                            key="retail_price"
                            title="Retail Price ($)"
                            filterLabel="Retail Price"
                            showHistogram
                            range={{
                                start: 30,
                                end: 10000,
                            }}
                        />
          </Container>
       </Drawer>
    );
  }