import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Button, Tree, Basket } from "./components";
import { setApples } from "./redux/action";
import { randomIntFromInterval } from "./utils/utilFunctions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const appleCount = randomIntFromInterval(2, 6);
        let appleArray = [];

        for (let i = 0; i < appleCount; i++) {
            appleArray.push({
                id: uuidv4(),
                momentum: randomIntFromInterval(1, 7),
                index: randomIntFromInterval(1, 36),
            });
        }

        dispatch(setApples(appleArray));
    });

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            bg="green.100"
        >
            <Button />
            <Tree />
            <Basket />
        </Flex>
    );
}

export default App;
