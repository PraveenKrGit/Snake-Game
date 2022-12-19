import { useContext } from "react"

//Code for clearing the canvas
export const clearBoard = (
    context: CanvasRenderingContext2D | null
    ) =>{
    if (context){
        context.clearRect(0,0,1000, 600);
    }
}

//Function for drawing an object onto the canvas
export interface IObjectBody{
    x: number;
    y: number;
}

export const drawObject=(
    context: CanvasRenderingContext2D | null,
    objectBody: IObjectBody[],
    fillColor: string,
    strokeStyle = "#146356"
)=>{
    if(context){
        objectBody.forEach((object: IObjectBody) =>{
            context.fillStyle= fillColor;
            context?.fillRect(object.x, object.y, 20, 20);
            context?.strokeRect(object.x, object.y, 20, 20);
        });
    }
};


function randowmNumber(min: number, max: number){
    let random = Math.random()*max;
    return random - (random % 20);
}

export const generateRandomPosition = (width: number, height: number)=>{
    return {
    x: randowmNumber(0, width),
    y: randowmNumber(0, height),
    };
};

export const hasSnakeCollided = (
    snake: IObjectBody[],
    currentHeadPos: IObjectBody
) =>{
    let flag = false;
    snake.forEach((pos: IObjectBody, index: number)=>{
        if(
            pos.x === currentHeadPos.x &&
            pos.y === currentHeadPos.y &&
            index !==0
        ){
            flag=true;
        }
    });

    return flag;
};