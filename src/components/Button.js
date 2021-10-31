import { Button as ChakraButton, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { shakeTheTree } from "../redux/action";

// Chakra-UI implemented for a nicer ui deesign

// Button component is disabled until the all apples fall
const Button = () => {
    const dispatch = useDispatch();
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const apples = useSelector((state) => state.apples);

    const handleButtonClick = () => {
        dispatch(shakeTheTree());
        setIsButtonEnabled(false);
        setTimeout(() => {
            dispatch(shakeTheTree());
        }, 3000);

        const sessionLength =
            apples.reduce((a, b) => (a.momentum > b.momentum ? a : b))
                .momentum + 1;

        setTimeout(() => {
            setIsButtonEnabled(true);
        }, (sessionLength + 3) * 1000);
    };

    return (
        <Flex position="absolute" right="48px" top="48px">
            <ChakraButton
                onClick={handleButtonClick}
                colorScheme="teal"
                size="sm"
                disabled={!isButtonEnabled}
            >
                Shake
            </ChakraButton>
        </Flex>
    );
};

export default Button;
