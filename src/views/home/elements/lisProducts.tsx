import React, { useState } from "react";



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


import "antd/dist/antd.css";
import ProductAddToCart from "@components/cards/productCard";
import Modals from "@components/modals";

import { Spacer, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";


export const ListProduct = ({ ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedItem, setSelectedItems] = useState({})
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
                    overflowX: 'hidden'
                    // textAlign: 'left',
                }}
            >
                {/* <header className="header-container">
                    <h2 className="header-heading">
                        BCX PRODUCT STORE
                        <span role="img" aria-label="books">
                            💻
                        </span>
                    </h2>

                    <DataSearch
                        autosuggest={false}
                        componentId="search"
                        dataField={[{ "field": "product_name", "weight": 10 }, { "field": "product_name.search", "weight": 2 }, { "field": "categories", "weight": 3 }, { "field": "categories.search", "weight": 1 }, { "field": "description", "weight": 1 }, { "field": "description.search", "weight": 1 }]}
                        filterLabel="Search"
                        highlight={true}
                        placeholder="Search ..."
                        showIcon={false}
                    />
                </header> */}
                {/* <SelectedFilters style={{ marginTop: 20 }} showClearAll={false} /> */}
                <div className="multi-col">
                    {/* <div className="left-col" style={{ width: '240px' }}>

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
                            title="Retail Price (Rupees)"
                            filterLabel="Retail Price"
                            showHistogram
                            range={{
                                start: 30,
                                end: 10000,
                            }}
                        />
                    </div> */}
                    <div style={{ width: '100%' }}>

                        <ReactiveList
                            componentId="results"
                            dataField="_score"
                            size={50}
                            pagination
                            stream
                            URLParams
                            react={{
                                and: ["search", "categories", "brand", "retail_price"]
                            }}
                            innerClass={{
                                listItem: 'list-item',
                                resultStats: 'result-stats',
                            }}
                            render={({ data }) => (
                                <SimpleGrid columns={2} width="100%">
                                    <Modals isOpen={isOpen} onOpen={onOpen} onClose={onClose} item={selectedItem} data={data} />
                                    {data.map((item) => (<>


                                        <ProductAddToCart item={item} onClick={() =>

                                            (setSelectedItems(item), onOpen())} /></>
                                    ))}
                                </SimpleGrid>
                            )}
                        />

                    </div>
                </div>
            </ReactiveBase>
        </>
    );
};
