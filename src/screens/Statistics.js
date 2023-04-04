import { View, TouchableOpacity, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import TabNavigator from "./TabNavigator";
import BenzierChart from "../components/BenzierChart";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Transaction from "../components/Transaction";

function Statistics(props) {
    const { expenseData, incomeData } = useSelector(reducer => reducer.transaction);

    const [expenseEnabled, setExpenseEnabled] = useState(true);

    return (
        <View style={styles.statisticContainer}>
            <View style={styles.statisticFlex1} >
                <BenzierChart expense={expenseEnabled}/>
            </View>
            <View style={styles.statisticFlex2} >
                <TouchableOpacity onPress={() => setExpenseEnabled(true)} style={{ ...styles.statisticFlex2_heading, backgroundColor: expenseEnabled ? "#0077b6" : "#00b4d8" }}>
                    <Text style={styles.statisticFlex2_heading_text} >Spending</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setExpenseEnabled(false)} style={{ ...styles.statisticFlex2_heading, backgroundColor: !expenseEnabled ? "#0077b6" : "#00b4d8" }}>
                    <Text style={styles.statisticFlex2_heading_text}>Incomes</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.statisticFlex3}>
                {expenseEnabled && expenseData && expenseData.length > 0 && <Transaction data={expenseData} />}
                {!expenseEnabled && incomeData && incomeData.length > 0 && <Transaction data={incomeData} />}
            </View>

            <TabNavigator navigation={props.navigation} selectedTab={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    statisticContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#00b4d8",
        paddingTop: StatusBar.currentHeight
        // alignItems: "center",
        // justifyContent: "center"
    },
    statisticFlex1: {
        flex: .48,
        position: "relative",
        // paddingTop: 5,
    },
    statisticFlex2: {
        flex: .05,
        position: "relative",
        // paddingTop: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        // top: "8%",
        width: "100%",
        // padding: 8,
        borderWidth: 3,
        // border: "5px solid black",
        borderRadius: 5
    },
    statisticFlex2_heading: {
        alignItems: "center",
        // margin: 20,
        // padding: 15,
        // top: 20,
        // left: 10,
        fontSize: 40,
        width: "50%",
    },
    statisticFlex2_heading_text: {
        fontWeight: "bold",
        fontSize: 16,
    },
    statisticFlex3: {
        flex: .5,
        position: "relative",
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        // top: "8%",
        width: "100%",
    },
    statisticFlex3_list: {
        flex: 1,
        padding: 7,
    },
    statisticFlex3_list_item: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5
    },
    statisticFlex3_list_item_child: {
        flex: 1,
        justifyContent: "center"
    },
    statisticFlex3_list_item_child2: {
        paddingTop: 15,
    }

})

export default Statistics;