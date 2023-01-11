import AsyncStorage from '@react-native-async-storage/async-storage';
import { SUCCESS, FAILED } from "../constants";

export const getAccount = async () => {
    const account = await AsyncStorage.getItem("account");
    return JSON.parse(account);
}

export const setAccount = async (data) => {
    try {
        const account = JSON.parse(await AsyncStorage.getItem("account"));
        // console.log("setAccount", account);
        await AsyncStorage.setItem("account", JSON.stringify([...account, data]));
        return SUCCESS;
    } catch (error) {
        console.log("helperFuncations:AsyncStorage-setAccount: ERROR", { error });
        return FAILED;
    }
}