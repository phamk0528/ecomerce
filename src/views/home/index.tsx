import { Box } from "@chakra-ui/react";
import { Header } from "@components";
import React from "react";
import { BottomBar } from "./elements/bottomBar";
import PromotionCard from "./elements/caroulsel";
import { ListProduct } from "./elements/lisProducts";


export const HomeView = ({ ...rest }) => {
    return (
        <>
            <Header />
            <PromotionCard carousels={[0, 1, 2, 3]} />

            <>
                <ListProduct />
            </>
            <BottomBar/>
        </>
    );
};
