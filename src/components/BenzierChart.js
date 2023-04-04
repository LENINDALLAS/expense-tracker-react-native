import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { getAccount } from "../utils/helperFunctions";
import { useDispatch, useSelector } from 'react-redux';
import { loadAsyncStorageData, storeExpenseData, storeIncomeData } from "../redux/actions/addAction";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BenzierChart(props) {

    const dispatch = useDispatch();
    const { account } = useSelector(reducer => reducer.transaction);

    const [dates, setDates] = useState([1])
    const [expense, setExpense] = useState([0])
    const [income, setIncome] = useState([0])

    const loadTransaction = (transactionData) => {
        const expense = [];
        const income = [];
        const expenseData = [];
        const incomeData = [];
        const expenseHash = {};
        const incomeHash = {};

        if (transactionData.length > 0) {
            transactionData.forEach((trans) => {
                if (trans.type === "expense" &&
                    new Date(trans.date).getMonth() === new Date().getMonth() &&
                    new Date(trans.date).getYear() === new Date().getYear()) {
                    expenseData.push(trans);
                    const date = new Date(trans.date).getDate();

                    if (expenseHash[date]) {
                        expenseHash[date] = expenseHash[date] + Number(trans.amount);
                    } else {
                        expenseHash[date] = Number(trans.amount)
                    }
                } else if (trans.type === "income" &&
                    new Date(trans.date).getMonth() === new Date().getMonth() &&
                    new Date(trans.date).getYear() === new Date().getYear()) {
                    incomeData.push(trans);
                    const date = new Date(trans.date).getDate();

                    if (incomeHash[date]) {
                        incomeHash[date] = incomeHash[date] + Number(trans.amount);
                    } else {
                        incomeHash[date] = Number(trans.amount)
                    }
                    }
            })
        }
        for (let i = 1; i <= Number(new Date().getDate()); i++) {

            if (incomeHash[i]) {
                income.push(incomeHash[i]);
            }

            if (expenseHash[i]) {
                expense.push(expenseHash[i]);
            } else {
                expense.push(0);
                income.push(0);
            }
        }
        setExpense(expense);
        setIncome(income);
        dispatch(storeExpenseData(expenseData));
        dispatch(storeIncomeData(incomeData));

    }

    const calculateExpense = async () => {
        const account = await getAccount();
        dispatch(loadAsyncStorageData(account));
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

    useEffect(() => {
        loadTransaction(account);
    }, [account]);

    return (
        <View>
            <Text style={styles.benzierChart_title} >{`${props.expense ? "Expense" : "Income" } - Summary ${new Date().toLocaleString('default', { month: 'long' }).toString()}`}</Text>
            {props && props.expense &&
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
            }
            { props && !props.expense &&
            <LineChart
                data={{
                    labels: [...dates],
                    datasets: [
                        {
                            data: [...income]
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
            /> }
        </View>
    )
};

const styles = StyleSheet.create({
    benzierChart: {
        marginVertical: 8,
        borderRadius: 16
    }, 
    benzierChart_title: {
        paddingTop: 10,
        paddingLeft: 10,
    }
})