import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccount = async () => {
    const account = await AsyncStorage.getItem("account");
    return JSON.parse(account);
}

export const setAccount = async (data) => {
    try {
        const account = JSON.parse(await AsyncStorage.getItem("account"));
        // console.log("setAccount", account);
        await AsyncStorage.setItem("account", JSON.stringify([ data,...account]));
        return SUCCESS;
    } catch (error) {
        console.log("helperFuncations:AsyncStorage-setAccount: ERROR", { error });
        return FAILED;
    }
}

export const addTrans = async() => {
const data = await getAccount();

const shuffled = [];
for(let trans of data) {
    // trans.reason = "google pay transaction"
    // trans.date = `${new Date(trans.date)}`;
    shuffled.unshift(trans);
}
    await AsyncStorage.setItem("account", JSON.stringify([...shuffled]));

console.log('====================================');
    console.log(shuffled);
console.log('====================================');
}

