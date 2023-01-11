import { createSlice } from '@reduxjs/toolkit'
import { ADD_TRANSACTION } from "../constants";
import { addTransactionReducer } from "../reducer/addReducer";
import { getAccount } from "../../utils/helperFunctions";

const account = (async() =>await getAccount())();

console.log(getAccount())
const slice = createSlice({
    name: ADD_TRANSACTION,
    initialState: {
        account
    },
    reducers: {
        addTransaction: addTransactionReducer
    }
});

export default slice.reducer;

export const { addTransaction } = slice.actions;
