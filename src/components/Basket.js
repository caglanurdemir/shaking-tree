import { Grid, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import applePng from "../assets/apple.png";
import basketPng from "../assets/basket.png";
import "../index.css";

// Basket component generates the basket image
// Also makes the apples appear in the basket 1 second after the apples fall.
const Basket = () => {
    const basket = useSelector((state) => state.basket);

    return (
        <Grid position="absolute" right="48px" bottom="0">
            <Grid
                gridTemplateColumns="repeat(4,1fr)"
                transform="rotate(180deg)"
            >
                {basket?.map(() => (
                    <Image
                        src={applePng}
                        height="64px"
                        transform="rotate(180deg)"
                    />
                ))}
            </Grid>
            <Image w="240px" src={basketPng} />
        </Grid>
    );
};

export default Basket;
