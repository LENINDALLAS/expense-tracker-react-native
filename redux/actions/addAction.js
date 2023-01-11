import { addTransaction } from "../slice/addSlice"

export const addCreditOrDebit = (data) => async (dispatch) => {
    dispatch(addTransaction({ ...data }));
}