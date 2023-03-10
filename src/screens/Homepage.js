import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import TabNavigator from "../screens/TabNavigator";

function HomePage(props) {
    return (
        <View style={styles.homepageContainer} >
            <View style={styles.homepageFlex1} >
                <View style={styles.homepageFlex1_child1}>
                    <Text>Good Morning</Text>
                    <Text>Lenin Dallas</Text>
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
                    <Text>$2222222222222222222222222222</Text>
                </View>
                <View style={styles.homepageFlex2_bottom}>
                    <View style={styles.homepageFlex2_left}>
                        <Text>Income</Text>
                        <Text>$54321</Text>
                    </View>
                    <View style={styles.homepageFlex2_right}>
                        <Text>Expenses</Text>
                        <Text>$12345</Text>
                    </View>
                </View>

            </View>
            <View style={styles.homepageFlex3} >
                <View style={styles.homepageFlex3_heading}>
                    <Text>Transaction History</Text>
                    <Text>see all</Text>
                </View>
                <View style={styles.homepageFlex3_list}>
                    <View style={styles.homepageFlex3_list_item} >
                        <Icon
                            reverse
                            name='bell'
                            type='fontisto'
                            color='#57A39D'
                            size={15}
                        />
                        <View style={styles.homepageFlex3_list_item_child} >
                            <Text>Upwork</Text>
                            <Text>Today</Text>
                        </View>
                        <Text >
                            + $ 850.00
                        </Text>
                    </View>
                    <View style={styles.homepageFlex3_list_item} >
                        <Icon
                            reverse
                            name='bell'
                            type='fontisto'
                            color='#57A39D'
                            size={15}
                        />
                        <View style={styles.homepageFlex3_list_item_child} >
                            <Text>Upwork</Text>
                            <Text>Today</Text>
                        </View>
                        <Text >
                            + $ 850.00
                        </Text>
                    </View>
                    <View style={styles.homepageFlex3_list_item} >
                        <Icon
                            reverse
                            name='bell'
                            type='fontisto'
                            color='#57A39D'
                            size={15}
                        />
                        <View style={styles.homepageFlex3_list_item_child} >
                            <Text>Upwork</Text>
                            <Text>Today</Text>
                        </View>
                        <Text >
                            + $ 850.00
                        </Text>
                    </View>
                    <View style={styles.homepageFlex3_list_item} >
                        <Icon
                            reverse
                            name='bell'
                            type='fontisto'
                            color='#57A39D'
                            size={15}
                        />
                        <View style={styles.homepageFlex3_list_item_child} >
                            <Text>Upwork</Text>
                            <Text>Today</Text>
                        </View>
                        <Text >
                            + $ 850.00
                        </Text>
                    </View>
                    <View style={styles.homepageFlex3_list_item} >
                        <Icon
                            reverse
                            name='bell'
                            type='fontisto'
                            color='#57A39D'
                            size={15}
                        />
                        <View style={styles.homepageFlex3_list_item_child} >
                            <Text>Upwork</Text>
                            <Text>Today</Text>
                        </View>
                        <Text >
                            + $ 850.00
                        </Text>
                    </View>
                </View>

            </View>
            <TabNavigator  navigation={props.navigation} selectedTab={1}/>

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