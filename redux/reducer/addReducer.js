export const addTransactionReducer = (state, action) => {
    state.account = [...state.account, action.payload];
}

export const loadStoredDataReducer = (state, action) => {
    state.account = [...action.payload];
}

