import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { useEffect, useState } from 'react';
import TabNavigator from "../screens/TabNavigator";
import { getProfile, getAccount, setAccount } from "../utils/helperFunctions";
import Transaction from "../components/Transaction";
import { getDayWise, showDate } from "../utils/helperFunctions";
// import { addTrans } from "../utils/seed";

function HomePage(props) {
    const [greeting, setGreeting] = useState("Good Morning");
    const [profile, setProfile] = useState({});
    const [total, setTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [account, setAccount] = useState([]);

    useEffect(() => {
        const getData = async () => {
            // addTrans()
            showDate(new Date());

            const userInfo = await getProfile();
            const account = await getAccount();
            const greet = getDayWise(new Date().getHours());
           
            if (!account) return;
            let calculatedTotal = 0;
            let expenseTotal = 0;
            let incomeTotal = 0;
console.log('====================================');
            console.log("account", account);
console.log('====================================');
            for (let trans of account) {
                if (trans.type === 'expense') {
                    calculatedTotal = calculatedTotal - Number(trans.amount);
                    expenseTotal += Number(trans.amount);
                }
                else {
                    calculatedTotal = calculatedTotal + Number(trans.amount);
                    incomeTotal += Number(trans.amount);
                }
            }
            if (userInfo) setProfile(userInfo);
            setTotal(calculatedTotal);
            setExpenseTotal(expenseTotal);
            setIncomeTotal(incomeTotal);
            setAccount(account);
            setGreeting(greet);
        }

        getData();
    }, []);

    return (
        <View style={styles.homepageContainer} >
            <View style={styles.homepageFlex1} >
                <View style={styles.homepageFlex1_child1}>
                    <Text>{greeting}</Text>
                    <Text>{profile && profile.name}</Text>
                </View>
                <View style={styles.homepageFlex1_child2}>
                    <Icon
                        reverse
                        name='bell'
                        type='fontisto'
                        color='#57A39D'
                        size={15}


                    />
                </View>
            </View>
            <View style={styles.homepageFlex2} >
                <View style={styles.homepageFlex2_top}>
                    <Text>Total balance</Text>
                    <Text>{total}</Text>
                </View>
                <View style={styles.homepageFlex2_bottom}>
                    <View style={styles.homepageFlex2_left}>
                        <Text>Income</Text>
                        <Text>{incomeTotal}</Text>
                    </View>
                    <View style={styles.homepageFlex2_right}>
                        <Text>Expenses</Text>
                        <Text>{expenseTotal}</Text>
                    </View>
                </View>

            </View>

            <View style={styles.homepageFlex3} >
                <View style={styles.homepageFlex3_heading}>
                    <Text>Transaction History</Text>
                    <Text>see all</Text>
                </View>
                {account && account.length > 0 &&  <Transaction data={account} />}
            </View>
            <TabNavigator navigation={props.navigation} selectedTab={1} />

        </View>
    )
}

const styles = StyleSheet.create({
    homepageContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#00b4d8",
    },
    homepageFlex1: {
        flex: .2,
        position: "relative",
        flexDirection: "row",
        // justifyContent: "space-between",
        // top: "8%",
        width: "100%",
        backgroundColor: "lightgrey",
        padding: 8
    },
    homepageFlex1_child1: {
        flex: 1,
        justifyContent: "center",
    },
    homepageFlex1_child2: {
        flex: .2,
        justifyContent: "center",
    },
    homepageFlex2: {
        flex: .3,
        justifyContent: "space-around",
        width: "100%",
    },
    homepageFlex2_top: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "center"
        padding: 6,
        left: 10
    },
    homepageFlex2_bottom: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    homepageFlex3: {
        flex: 1,
        borderColor: '#FF3D00',
        borderWidth: 5,
        width: "100%",
        // justifyContent: "space-evenly"
    },
    homepageFlex3_heading: {
        // flex: .,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 7
    },
    homepageFlex3_list: {
        flex: 1,
        padding: 5
    },
    homepageFlex3_list_item: {
        flex: 1,
        flexDirection: "row"
    },
    homepageFlex3_list_item_child: {
        flex: 1,
    }

})

export default HomePage;