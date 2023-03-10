import { createSlice } from '@reduxjs/toolkit'
import { ADD_TRANSACTION } from "../constants";
import { addTransactionReducer, loadStoredDataReducer } from "../reducer/addReducer";

const slice = createSlice({
    name: ADD_TRANSACTION,
    initialState: {
        account: []
    },
    reducers: {
        addTransaction: addTransactionReducer, 
        loadStoredData: loadStoredDataReducer
    }
});

export default slice.reducer;

export const { addTransaction, loadStoredData } = slice.actions;
