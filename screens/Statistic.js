import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import TabNavigator from "../screens/TabNavigator";

function Statistic(props) {
    return (
        <View style={styles.statisticContainer}>
            <View style={styles.statisticFlex2} >
                <View style={styles.statisticFlex2_heading}>
                    <Text>Top Spending</Text>
                </View>
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
                        <Text >
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
                        <Text >
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
                        <Text >
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
                        <Text >
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
                        <Text >
                            + $ 850.00
                        </Text>
                    </View>
                </View>

            </View>

            <TabNavigator navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    statisticContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    },
    statisticFlex2: {
        flex: 1,
        position: "relative",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // top: "8%",
        width: "100%",
        padding: 8
    },
    statisticFlex2_heading: {
        padding: 6,
        top: 10,
        left: 10,
        fontSize: 30
    },
    statisticFlex2_list: {
        flex: 1,
        padding: 7
    },
    statisticFlex2_list_item: {
        flex: 1,
        flexDirection: "row",
    },
    statisticFlex2_list_item_child: {
        flex: 1,
    }

})

export default Statistic;