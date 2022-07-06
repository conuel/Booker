export const setInitialBest = initial => ({
    type: 'SET_INITIAL_BEST',
    payload: initial
});

export const moveLeft = () => ({
    type: 'SET_MOVE',
})

export const noMove = () => ({
    type: 'NO_MOVE'
})

export const moveItem = item => ({
    type: 'MOVE_ITEM',
    payload: item
})

export const toShow = () => ({
    type: 'SHOW'
});

export const sendTitle = (title) => ({
    type: 'SEND_TITLE',
    payload: title
})