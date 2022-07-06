const INITIAL_STATE = {
    initial_best: null,
    move_left: false,
    show: false,
    item: null
}

const bestReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_INITIAL_BEST':
            return{
                ...state,
                initial_best: action.payload
            }
        case 'SET_MOVE':
            return{
                ...state,
                move_left: true
            }
        case 'NO_MOVE':
            return{
                ...state,
                move_left: false
            }
        case 'MOVE_ITEM':
            return{
                ...state,
                item: action.payload
            }
        case 'SHOW':
            return{
                ...state,
                show: !state.show
            }
        case 'SEND_TITLE':
            console.log('It works')
            return{
            ...state,
            title: action.payload
        }
        
            default:
                return state;
    }
}

export default bestReducer;