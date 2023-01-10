import  { ADD_CREDIT_OR_DEBIT } from "../constants";
import { setAccount } from "../../utils/helperFunctions";

export const addReducer = (intialState , action) => {
    switch(action.type) {
        case ADD_CREDIT_OR_DEBIT:
            setAccount(action.payload);
            console.log("reducer========>");
    }
}

