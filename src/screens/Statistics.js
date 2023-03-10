import { View, TouchableOpacity, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import TabNavigator from "./TabNavigator";
import BenzierChart from "../components/BenzierChart";

function Statistics(props) {
    return (
        <View style={styles.statisticContainer}>
            <View style={styles.statisticFlex1} >
                <BenzierChart />
            </View>
            <View style={styles.statisticFlex2} >
                <View style={styles.statisticFlex2_heading}>
                    <Text>Top Spending</Text>
                </View>
                <ScrollView >
                    <View style={styles.statisticFlex2_list}>
                        <View style={styles.statisticFlex2_list_item} >
                            <Icon
                                reverse
                                name='bell'
                                type='fontisto'
                                color='#57A39D'
                                size={15}
                            />
                            <View style={styles.statisticFlex2_list_item_child} >
                                <Text>Upwork</Text>
                                <Text>Today</Text>
                            </View>
                            <Text style={styles.statisticFlex2_list_item_child2} >
                                + $ 850.00
                            </Text>
                        </View>
                        <View style={styles.statisticFlex2_list_item} >
                            <Icon
                                reverse
                                name='bell'
                                type='fontisto'
                                color='#57A39D'
                                size={15}
                            />
                            <View style={styles.statisticFlex2_list_item_child} >
                                <Text>Upwork</Text>
                                <Text>Today</Text>
                            </View>
                            <Text style={styles.statisticFlex2_list_item_child2} >
                                + $ 850.00
                            </Text>
                        </View>
                        <View style={styles.statisticFlex2_list_item} >
                            <Icon
                                reverse
                                name='bell'
                                type='fontisto'
                                color='#57A39D'
                                size={15}
                            />
                            <View style={styles.statisticFlex2_list_item_child} >
                                <Text>Upwork</Text>
                                <Text>Today</Text>
                            </View>
                            <Text style={styles.statisticFlex2_list_item_child2} >
                                + $ 850.00
                            </Text>
                        </View>
                        <View style={styles.statisticFlex2_list_item} >
                            <Icon
                                reverse
                                name='bell'
                                type='fontisto'
                                color='#57A39D'
                                size={15}
                            />
                            <View style={styles.statisticFlex2_list_item_child} >
                                <Text>Upwork</Text>
                                <Text>Today</Text>
                            </View>
                            <Text style={styles.statisticFlex2_list_item_child2} >
                                + $ 850.00
                            </Text>
                        </View>
                        <View style={styles.statisticFlex2_list_item} >
                            <Icon
                                reverse
                                name='bell'
                                type='fontisto'
                                color='#57A39D'
                                size={15}
                            />
                            <View style={styles.statisticFlex2_list_item_child} >
                                <Text>Upwork</Text>
                                <Text>Today</Text>
                            </View>
                            <Text style={styles.statisticFlex2_list_item_child2}>
                                + $ 850.00
                            </Text>
                        </View>
                    </View>
                </ScrollView>
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
        flex: .4,
        position: "relative"
    },
    statisticFlex2: {
        flex: .6,
        position: "relative",
        // paddingTop: 10,
        // flexDirection: "row",
        // justifyContent: "space-between",
        // top: "8%",
        width: "100%",
        padding: 8
    },
    statisticFlex2_heading: {
        alignItems: "center",
        // margin: 20,
        // padding: 15,
        // top: 20,
        // left: 10,
        fontSize: 40
    },
    statisticFlex2_list: {
        flex: 1,
        padding: 7,
    },
    statisticFlex2_list_item: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5
    },
    statisticFlex2_list_item_child: {
        flex: 1,
        justifyContent: "center"
    },
    statisticFlex2_list_item_child2: {
        paddingTop: 15,
    }

})

export default Statistics;