//This file will consist of all our sagas.

import { CallEffect, delay, put, PutEffect, takeLatest } from "@redux-saga/core/effects";

import { DOWN, ISnakeCoord, LEFT, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, RESET, RIGHT, setDisDirection, STOP_GAME, UP} from "../actions"


export function* moveSaga(params:{
    type: string;
    payload: ISnakeCoord;
}): Generator< 
    | PutEffect<{type: string; payload: ISnakeCoord}>
    | PutEffect<{type: string; payload: string}>
    | CallEffect<true>
    >{
        while(params.type !== RESET && params.type !== STOP_GAME){
            //dispatches movement actions
            yield put({
                type: params.type.split("_")[1],
                payload: params.payload,
            });

            //Dispatches SET_DIS_DIRECTION action
            switch (params.type.split("_")[1]){
                case RIGHT:
                    yield put(setDisDirection(LEFT));
                    break;
                case LEFT:
                    yield put(setDisDirection(RIGHT));
                    break;
                case UP:
                    yield put(setDisDirection(DOWN));
                    break;
                case DOWN:
                    yield put(setDisDirection(UP));
                    break;
            }
            yield delay(100);
        }
    }

    function* watcherSagas(){
        yield takeLatest(
            [MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN, STOP_GAME, RESET],
            moveSaga
        );
    }

    export default watcherSagas;



//The first one is the saga which dispatches the actual actions to the store – let's call this worker saga. 
//The second is the watcher saga which watches for any action that is being dispatched – let's call this watcher saga.

//worker saga : moveSaga 
// dispatches actions to the redux store