import React from 'react';
import { Box, Icon, Image } from '@chakra-ui/react';


import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import { HeaderSearch } from './headerSearch';


type Props = {
    margin?: number;
    containerHeight?: number;
    carousels: any;
};
const PromotionCard = ({ carousels }: Props) => {
    const slides = carousels;



    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (
            <Icon
                position="absolute"
                cursor="pointer"
                _hover={{
                    opacity: 0.8,
                    color: "black",
                }}
                top={'30%'}
                right={-15}
                color="white"
                zIndex={99}
                as={MdKeyboardArrowRight}
                onClick={onClick}
                boxSize="4rem"
                mt={1}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { onClick } = props;
        return (
            <Icon
                position="absolute"
                cursor="pointer"
                _hover={{
                    opacity: 0.8,
                    color: "black",
                }}
                top={'30%'}

                left={-15}
                color="white"
                zIndex={99}
                as={MdKeyboardArrowLeft}
                onClick={onClick}
                boxSize="4rem"
                mt={1}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <>


            <Box w="full" pos="relative" overflow="hidden">
                <Box w="full">
                    <Slider {...settings}>
                        {slides?.map((slide: any) => (
                            <Box

                                h="20vh"
                                w="full"
                                cursor="pointer"
                                boxSize="full"
                                shadow="md"
                                flex="none"
                                px="5px"
                                py="5px"
                            >
                                <Image
                                    objectFit="cover"
                                    src={"https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=1200&q=75"}
                                    // maxHeight={"640px"}
                                    //
                                    w="100%"
                                />

                            </Box>
                        ))}
                    </Slider>

                </Box>

            </Box>
            <HeaderSearch />
        </>
    );
};

export default PromotionCard;
