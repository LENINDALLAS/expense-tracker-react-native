import { addTransaction, loadStoredData, expenseData, incomeData } from "../slice/addSlice"

export const addCreditOrDebit = (data) => async (dispatch) => {
    dispatch(addTransaction({ ...data }));
}

export const loadAsyncStorageData = (data) => async (dispatch) => {
    dispatch(loadStoredData(data))
}

export const storeExpenseData = (data) => async (dispatch) => {
    dispatch(expenseData(data))
}

export const storeIncomeData = (data) => async (dispatch) => {
    dispatch(incomeData(data))
}