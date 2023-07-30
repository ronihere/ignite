const initialState = {
    gameDetails: {},
    screenshots: {},
}

const gameDetailReducer = (state = initialState , action)=>{
    switch (action.type) {
        case 'FETCH_GAME_DETAILS':
            return {
                ...state,
                gameDetails: action.payload.gameDetails,
                screenshots: action.payload.screenshots,
            };
        case 'CLEAR_GAME_DETAILS':
            return {
                ...state,
                gameDetails: {},
                screenshots:{},
            }
        default:
            return { ...state };
    }
}

export default gameDetailReducer;