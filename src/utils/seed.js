import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccount = async () => {
    const account = await AsyncStorage.getItem("account");
    return JSON.parse(account);
}

export const setAccount = async (data) => {
    try {
        const account = JSON.parse(await AsyncStorage.getItem("account"));
        await AsyncStorage.setItem("account", JSON.stringify([ data,...account]));
        return SUCCESS;
    } catch (error) {
        console.log("helperFuncations:AsyncStorage-setAccount: ERROR", { error });
        return FAILED;
    }
}

export const addTrans = async() => {
const account = await getAccount();

    let store = [];
    account.forEach(data => data && data.reason && store.push(data));
    console.log("store", store.length);
    // await AsyncStorage.setItem("account", JSON.stringify([...shuffled]));

}

