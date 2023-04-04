export const addTransactionReducer = (state, action) => {
    state.account = [...state.account, action.payload];
}

export const loadStoredDataReducer = (state, action) => {
    state.account = [...action.payload];
}

export const expenseDataReducer = (state, action) => {
    state.expenseData = [...action.payload];
}

export const incomeDataReducer = (state, action) => {
    state.incomeData = [...action.payload];
}

