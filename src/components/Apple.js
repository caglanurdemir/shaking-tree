import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import applePng from "../assets/apple.png";
import { addToBasket } from "../redux/action";

// Apple component generates the apples using redux store (apples array)
// Apples fall's is bounding to the offset y and their momentum
const Apple = ({ id, componentRef, momentum }) => {
    const dispatch = useDispatch();
    const isShaking = useSelector((state) => state.isShaking);
    const [isShakingEnded, setIsShakingEnded] = useState(false);
    const [offsetY, setOffsetY] = useState(null);

    useEffect(() => {
        setOffsetY(0);
    }, []);

    useEffect(() => {
        if (isShaking) {
            setTimeout(() => {
                setIsShakingEnded(true);
            }, 3000);
        }
    }, [isShaking]);

    useEffect(() => {
        if (isShakingEnded) {
            setOffsetY(
                window.innerHeight -
                    componentRef?.current?.getBoundingClientRect().y -
                    componentRef?.current?.getBoundingClientRect().height
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShakingEnded]);

    useEffect(() => {
        if (isShakingEnded) {
            setTimeout(() => {
                dispatch(addToBasket(id));
            }, (momentum + 1) * 1000);
        }
    }, [dispatch, id, isShakingEnded, momentum]);

    return (
        <Image
            alt={id}
            ref={componentRef}
            src={applePng}
            className="appleImage"
            position="absolute"
            height="64px"
            transition={`all ease ${momentum}s`}
            top={offsetY}
        />
    );
};

export default Apple;
