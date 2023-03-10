import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import TabNavigator from "../screens/TabNavigator";
import React, { useState } from 'react';
import { SUCCESS } from '../../constants';
import { addCreditOrDebit } from "../redux/actions/addAction";
import { setAccount } from "../utils/helperFunctions";

function Add(props) {
    const [amount, setAmount] = useState(null);
    const [amountType, setAmountType] = useState(true);

    const dispatch = useDispatch();

    const addAmount = async () => {
        try {
            if (!amount || amount <= 0) return;
            const calculatedAmount = {
                type: amountType ? "expense" : "income",
                date: `${new Date(new Date())}`,
                amount
            };
            dispatch(addCreditOrDebit(calculatedAmount));
            const setResult = await setAccount(calculatedAmount);
            if (setResult === SUCCESS) {
                setAmount(0);
                props.navigation.navigate("statistics");
            } else {
                console.log("ERROR: amount not tracked, please try again");
            }
        } catch (error) {
            console.log("Add:addAmount:ERROR", { error });
        }
    }

    return (
        <View style={styles.AddContainer}>
            <View style={styles.AddContainerFlex1}>
                <TouchableOpacity onPress={() => setAmountType(true)} style={{ ...styles.AddContainerFlex1_child, backgroundColor: amountType ? "#0077b6" : "#00b4d8" }}>
                    <Text style={styles.AddContainerFlex2_text}>
                        Expense
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAmountType(false)} style={{ ...styles.AddContainerFlex1_child, backgroundColor: !amountType ? "#0077b6" : "#00b4d8" }}>
                    <Text style={styles.AddContainerFlex2_text}>
                        Income
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AddContainerFlex2} >
                <TextInput style={styles.AddContainerInput} placeholder="Enter Amount" value={amount} keyboardType="numeric" onChangeText={setAmount} onSubmitEditing={() => addAmount()} />
            </View>

            <TabNavigator navigation={props.navigation} selectedTab={3} />
        </View>
    )
}

const styles = StyleSheet.create({
    AddContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#00b4d8",
        fontFamily: 'normal'
    },
    AddContainerFlex1: {
        flex: .2,
        flexDirection: "row",
        borderColor: "#03045e",
        borderWidth: 3,
    },
    AddContainerFlex1_child: {
        backgroundColor: "white",
        width: "50%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 5
    },
    AddContainerFlex2: {
        flex: .8,
        justifyContent: "center",
        margin: 5,

        // alignItems: "center",
    },
    AddContainerFlex2_text: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },
    AddContainerInput: {
        fontFamily: "normal",
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: "#90e0ef",
        textAlign: "center",
        borderColor: "#03045e",
        borderWidth: 3,
        padding: 8,
    }
})

export default Add;