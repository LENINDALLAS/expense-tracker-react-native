import AsyncStorage from '@react-native-async-storage/async-storage';
import { SUCCESS, FAILED } from "../../constants";

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

export const getProfile = async () => {
    const profile = await AsyncStorage.getItem("profile");
    return JSON.parse(profile);
}

export const setProfile = async(data) => {
    try {
      const profile =  JSON.parse(await AsyncStorage.getItem("profile"));
      await AsyncStorage.setItem("profile", JSON.stringify({...profile, ...data}));
      return SUCCESS;
    } catch (error) {
        console.log("helperFuncations:AsyncStorage-setProfile: ERROR", { error });
        return FAILED;
    }
}