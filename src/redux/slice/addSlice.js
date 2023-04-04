import { createSlice } from '@reduxjs/toolkit'
import { ADD_TRANSACTION } from "../constants";
import { addTransactionReducer, loadStoredDataReducer, expenseDataReducer, incomeDataReducer } from "../reducer/addReducer";

const slice = createSlice({
    name: ADD_TRANSACTION,
    initialState: {
        account: []
    },
    reducers: {
        addTransaction: addTransactionReducer,
        loadStoredData: loadStoredDataReducer,
        expenseData: expenseDataReducer,
        incomeData: incomeDataReducer
    }
});

export default slice.reducer;

export const { addTransaction, loadStoredData, expenseData, incomeData } = slice.actions;
