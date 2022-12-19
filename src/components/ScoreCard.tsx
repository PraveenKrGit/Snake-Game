import {Heading} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {IGlobalState} from "../store/reducers";

const ScoreCard = () =>{
    const score = useSelector((state: IGlobalState)=>state.score);

    return(
        <Heading as = "h2" size = "md" mt={5} mb={5} color="green"> Score: {score}</Heading>
    );
}


export default ScoreCard;