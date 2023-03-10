import { addTransaction, loadStoredData } from "../slice/addSlice"

export const addCreditOrDebit = (data) => async (dispatch) => {
    dispatch(addTransaction({ ...data }));
}

export const loadAsyncStorageData = (data) => async (dispatch) => {
    dispatch(loadStoredData(data))
}