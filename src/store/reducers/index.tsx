//For drawing the snake we need to maintain the position of the snake. For that, we can use our global state management tool redux.

import { RIGHT, LEFT, UP, DOWN, SET_DIS_DIRECTION, INCREASE_SNAKE, RESET_SCORE, INCREMENT_SCORE, RESET } from "../actions";

//Updating the global state

interface ISnakeCoord{
    x: number;
    y: number;
}

//global state variables
export interface IGlobalState{
    snake: ISnakeCoord[] | [];
    disallowedDirection: string;
    score: number;
}

const globalState: IGlobalState={
    snake:[
        {x: 580, y: 300},
        {x: 560, y: 300},
        {x: 540, y: 300},
        {x: 520, y: 300},
        {x: 500, y: 300},
    ],
    disallowedDirection: "",
    score: 0,
};

const gameReducer = (state = globalState, action: any )=>{
    switch (action.type){
        case RIGHT:
        case LEFT:
        case UP:
        case DOWN:{
            let newSnake = [...state.snake];
            newSnake =[{
                x: state.snake[0].x + action.payload[0],
                y: state.snake[0].y + action.payload[1],
            }, ...newSnake];
            newSnake.pop();

            return{
                ...state,
                snake: newSnake,
            };
        }

        case SET_DIS_DIRECTION:
            return{ ...state, disallowedDirection: action.payload};

        case RESET:
            return{
                ...state,
                snake: [
                    { x: 580, y: 300 },
                    { x: 560, y: 300 },
                    { x: 540, y: 300 },
                    { x: 520, y: 300 },
                    { x: 500, y: 300 },
                  ],
                  disallowedDirection: ""
                };
        case INCREASE_SNAKE:
            const snakelen = state.snake.length;
            return{
                ...state,
                snake:[
                    ...state.snake,
                    {
                        x: state.snake[snakelen-1].x -20,
                        y: state.snake[snakelen -1].y-20,
                    },
                ],
            };

        case RESET_SCORE:
            return { ...state, score:0};

        case INCREMENT_SCORE:
            return{
                ...state,
                score: state.score +1,
            };
        default:
            return state;
    }
};

export default gameReducer;
