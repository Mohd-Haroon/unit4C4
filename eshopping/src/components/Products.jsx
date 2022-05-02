import React, { useEffect } from "react";
import { Select } from "./Styled";
import styled from "styled-components"
import {useSelector,useDispatch} from "react-redux"
import {getProductsData} from "../Redux/actions"
import {ProductCard} from "./ProductCard"

export const Grid= styled.div`` 
export const Products = () => {
  const {isLoading,isError,filterData,products} = useSelector((state)=> state.product)
  console.log(products)
  const dispatch = useDispatch()
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    // console.log("cjeck")
    getProductsData(dispatch)

    
  }, [dispatch,]);

  const handleSort = (e) => {
    // dispatch sort products on change
    
  };
  return isLoading ? (<h1>Loading</h1>) : isError ? (<h1>Error</h1>) : (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {products.map((item,index)=>(
          <ProductCard key={index} item={item}/>
        ))

        }

      </Grid>
    </>
  );
};
