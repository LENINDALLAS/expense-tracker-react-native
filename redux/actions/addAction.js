import { ADD_CREDIT_OR_DEBIT } from "../constants";

export const addCreditOrDebit = (data) => async(dispatch) => {
    dispatch({ type: ADD_CREDIT_OR_DEBIT, payload: data });
}