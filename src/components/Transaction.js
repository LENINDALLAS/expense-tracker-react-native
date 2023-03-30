import {
    View, Text, StyleSheet, SafeAreaView,
    ScrollView,
    StatusBar, } from 'react-native';
import { Icon } from '@rneui/themed';
import { showDate } from "../utils/helperFunctions";

export default function Transaction({data}) {

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.homepageFlex3_list}>
                    { data.map((trans, idx) => {
                    
                        return (
                            <View style={styles.homepageFlex3_list_item} key={idx} >
                                <Icon
                                    reverse
                                    name='bell'
                                    type='fontisto'
                                    color='#57A39D'
                                    size={15}
                                />
                                <View style={styles.homepageFlex3_list_item_child} >
                                    <Text>{trans.reason}</Text>
                                    <Text>{trans.date && showDate(trans.date)}</Text>
                                </View>
                                <Text >
                                    {trans.amount}
                                </Text>
                            </View>
                        )
                    })}
        </ScrollView  >
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
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