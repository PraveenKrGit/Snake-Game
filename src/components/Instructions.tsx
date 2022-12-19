import { Box, Button, Flex, Heading, Kbd } from "@chakra-ui/react";
import React from "react";


export interface IInstructionProps {
    resetBoard: () => void;
}

const Instruction = ({ resetBoard }: IInstructionProps) => (
    <Box mt={3}>
        <Heading as="h6" size="lg">
            How to Play
        </Heading>
        <Heading as="h5" size="sm" mt={1}>
            Start the game by pressing <Kbd>d</Kbd>
        </Heading>
        <Flex flexDirection="row" mt={3}>
            <Flex flexDirection={"column"}>
                <span>
                    <kbd>w</kbd> Move Up
                </span>
                <span>
                    <kbd>a</kbd> Move Left
                </span>
                <span>
                    <kbd>s</kbd> Move Down
                </span>
                <span>
                    <kbd>d</kbd> Move Right
                </span>
            </Flex>
            <Flex flexDirection="column">
                <Button onClick={() => resetBoard()}>Reset game</Button>
            </Flex>
        </Flex>
    </Box>
);

export default Instruction;


// The Instruction component will accept resetBoard as a prop which is a function that will help the user when the game is over or when they want to reset the game.