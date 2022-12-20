import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

function TabNavigator(props) {

  //  const [selectedTab, setSelectedTab] = useState(props.selectedTab);

   // console.log("rendered", selectedTab)

    return (
        < View style={styles.container} >

            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('homepage')}>
                    <Icon
                        reverse={props.selectedTab === 1 ? true : false}
                        name='home'
                        type='octicons'
                        color='#0077b6'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('statistics')}>
                    <Icon
                        reverse={props.selectedTab === 2 ? true : false}
                        name='bar-chart'
                        type='feather'
                        color='#0077b6'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('add')}>
                    <Icon
                        reverse={props.selectedTab === 3 ? true : false}
                        name='plus'
                        type='foundation'
                        color='#0077b6'
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => props.navigation.navigate('profile')}>
                    <Icon
                        reverse={props.selectedTab === 4 ? true : false}
                        name='account-circle'
                        type='materialicons'
                        color='#0077b6'
                        size={20}
                    />
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'grey',
        position: 'relative',
        bottom: 0,

    },
    button: {
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 2,
        // borderColor: '#0077b6',
        // height: 30,
    }
})


export default TabNavigator;