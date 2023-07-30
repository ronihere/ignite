import axios from "axios";
import { gameDetailsUrl , gameDetailsScreenShots } from "../api";

export const loadGameDetails = (id) => async (dispatch) => {
    const gameDetailData = await axios.get(gameDetailsUrl(id));
    const gameDetailScreenShots = await axios.get(gameDetailsScreenShots(id));
    dispatch({
        type: 'FETCH_GAME_DETAILS',
        payload: {
            gameDetails: gameDetailData?.data,
            screenshots: gameDetailScreenShots?.data,
        }
    })
}

export const clearGameDetails =()=> async(dispatch) => {
    dispatch({
        type: 'CLEAR_GAME_DETAILS',
    })
}
