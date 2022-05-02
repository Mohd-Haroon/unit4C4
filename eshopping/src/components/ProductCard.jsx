// import { Flex } from "./Styled";

import styled from "styled-components"
export const Flex= styled.div`` 

export const ProductCard = ({ item }) => {
  const {title,image,price} = item
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        <h1>{title}</h1>
        <img src={image} alt="" />
        <p>{item.brand}</p>
        <p>price: {price}</p>
      </Flex>
    </>
  );
};
