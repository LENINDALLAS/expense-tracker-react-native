import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { getAccount } from "../utils/helperFunctions";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BenzierChart(props) {

    const dataStructure = [
        // {
        //     type: "expense",
        //     date: new Date(new Date().setDate(1)),
        //     amount: 222
        // },
        // {
        //     type: "expense",
        //     date: new Date(new Date().setDate(5)),
        //     amount: 500
        // },
        // {
        //     type: "expense",
        //     date: new Date(new Date().setDate(13)),
        //     amount: 250
        // },
        // {
        //     type: "expense",
        //     date: new Date(new Date().setDate(19)),
        //     amount: 10
        // }
    ];

    const [dates, setDates] = useState([1])
    const [expense, setExpense] = useState([0])

    const calculateExpense = async () => {
        const expense = [];
        const account = await getAccount();
        const expenseHash = {};
        if (account) {
            const parsedAccount = JSON.parse(account);
            parsedAccount.forEach((expense) => {
                if (expense.type === "expense" &&
                    new Date(expense.date).getMonth() === new Date().getMonth() &&
                    new Date(expense.date).getYear() === new Date().getYear()) {
                    const date = new Date(expense.date).getDate();

                    if (expenseHash[date]) {
                        expenseHash[date] = expenseHash[date] + Number(expense.amount);
                    } else {
                        expenseHash[date] = Number(expense.amount)
                    }
                }
            })
        }
        for (let i = 1; i <= Number(new Date().getDate()); i++) {
            if (expenseHash[i]) {
                expense.push(expenseHash[i]);
            } else {
                expense.push(0);
            }
        }
        setExpense(expense);
    }

    useEffect(() => {
        try {
            // AsyncStorage.setItem("account", JSON.stringify(dataStructure));
            calculateExpense();
        } catch (error) {
            console.error(error)
        }
    }, [])


    useEffect(() => {
        const date = new Date().getDate();
        const tempDates = [];
        for (let i = 1; i <= Number(date); i++) {
            tempDates.push(i);
        }
        setDates(tempDates);
    }, []);

    return (
        <View>
            <Text>{new Date().toLocaleString('default', { month: 'long' }).toString().split(" ")[1]} Expense - Summary</Text>
            <LineChart
                data={{
                    labels: [...dates],
                    datasets: [
                        {
                            data: [...expense]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="RS"
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={styles.benzierChart}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    benzierChart: {
        marginVertical: 8,
        borderRadius: 16
    }
})