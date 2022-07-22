import { Box } from "@chakra-ui/react";
import { Header } from "@components";
import React from "react";
import { BottomBar } from "./elements/bottomBar";
import PromotionCard from "./elements/caroulsel";
import { ListProduct } from "./elements/lisProducts";
import {
    DataSearch,
    DynamicRangeSlider,
    RangeSlider,
    MultiList,
    ReactiveBase,
    ReactiveList,
    ResultList,
    SelectedFilters,
    RangeInput,
} from '@appbaseio/reactivesearch';

export const HomeView = ({ ...rest }) => {
    return (
        <>
         <ReactiveBase
                app="quoc-app-test"
                credentials="A6wtvxKW0:6d20c42f-0fa8-4cac-9274-7b1362843856"
                enableAppbase
                url="https://fat-easter-cmbbjuf-arc.searchbase.io"
                className="search-app"
                mapKey="AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU"

                theme={{
                    colors: {
                        primaryColor: '#FF307A',
                    },
                }}
                style={{
                    backgroundColor: '#fff',
                    // padding: '40px',
                    borderRadius: '2px',
                    width: "100%",
                    // overflowX: 'hidden'
                    // textAlign: 'left',
                }}
            >
               
            <Header />
            <PromotionCard carousels={[0, 1, 2, 3]} />

            <>
                <ListProduct />
            </>
          
            </ReactiveBase>
            <BottomBar/>
        </>
    );
};
