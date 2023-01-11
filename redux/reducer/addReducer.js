export const addTransactionReducer = (state, action) => {
    console.log("reachedReducer====>", { action })
    state.account = [...state.account, action.payload];
}

