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
        await AsyncStorage.setItem("account", JSON.stringify([data, ...account]));
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

export const setProfile = async (data) => {
    try {
        const profile = JSON.parse(await AsyncStorage.getItem("profile"));
        await AsyncStorage.setItem("profile", JSON.stringify({ ...profile, ...data }));
        return SUCCESS;
    } catch (error) {
        console.log("helperFuncations:AsyncStorage-setProfile: ERROR", { error });
        return FAILED;
    }
}

export const getDayWise = (hour) => {
    try {
        let greet;
        switch (hour) {
            case hour < 12 && hour >= 1:
                greet = "Good Morning";
                break;
            case hour < 17 && hour >= 1:
                greet = "Good Afternoon";
                break;
            default:
                greet = "Good Evening";
        }
        return greet;
    } catch (error) {
        console.error("getDayWise: ERROR", { error });
    }
}

export const showDate = (dateString) => {
    try {
        const date = new Date(dateString);
        let label;
        const today = new Date();
        const todayDate = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
        const argDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

        if (todayDate === argDate) label = "Today";
        else if (today.getDate() - date.getDate() === 1) label = "Yesterday";
        else label = new Date(date).toString().split(" ").slice(0, 4).join("-");

        return label;
    } catch (error) {
        console.error("showDate: ERROR", { error });
    }
} 

