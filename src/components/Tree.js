import { Flex, Grid } from "@chakra-ui/layout";
import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import treePng from "../assets/tree.png";
import { Apple } from "../components";
import "../index.css";

const Tree = () => {
    const isShaking = useSelector((state) => state.isShaking);
    const apples = useSelector((state) => state.apples);
    const indexes = useMemo(
        () => [...apples.map((apple) => apple.index)],
        [apples]
    );

    const renderApples = useCallback(() => {
        let applesToRender = [];
        for (let i = 1; i <= 36; i++) {
            applesToRender.push(
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                >
                    {indexes.includes(i) && (
                        <Apple
                            {...apples.find((apple) => apple.index === i)}
                            componentRef={React.createRef()}
                        />
                    )}
                </Flex>
            );
        }

        return applesToRender;
    }, [apples, indexes]);

    return (
        <>
            <Grid
                className={isShaking ? "tree shake" : "tree"}
                backgroundImage={`url("${treePng}")`}
                w="679px"
                h="810px"
                backgroundSize="cover"
                position="absolute"
                bottom="0"
                justifyContent="center"
            >
                <Grid gridTemplateColumns="repeat(6,1fr)" w="480px" h="480px">
                    {renderApples()}
                </Grid>
            </Grid>
        </>
    );
};

export default Tree;
