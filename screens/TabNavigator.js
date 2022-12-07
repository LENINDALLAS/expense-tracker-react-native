import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

function TabNavigator(props) {

    const [selectedTab, setSelectedTab] = React.useState(1);

    return (
        < View style={styles.container} >

            <View style={styles.button}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('homepage'), setSelectedTab(1)}}>

                    {
                        selectedTab === 1 ? (<Icon
                            reverse
                            name='home'
                            type='octicons'
                            color='#000'
                            size={20}


                        />) : (<Icon
                            name='home'
                            type='octicons'
                            color='#000'
                            size={20}


                        />)
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('statistic'), setSelectedTab(2) }}>

                    {
                        selectedTab === 2 ? (<Icon
                            reverse
                            name='bar-chart'
                            type='feather'
                            color='#000'
                            size={20}


                        />) : (
                            <Icon

                                name='bar-chart'
                                type='feather'
                                color='#000'
                                size={20}


                            />)
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('wallet'), setSelectedTab(3) }}>

                    {
                        selectedTab === 3 ? (<Icon
                            reverse
                            name='wallet'
                            type='entypo'
                            color='#000'
                            size={20}


                        />) : (
                            <Icon

                                name='wallet'
                                    type='entypo'
                                color='#000'
                                size={20}


                            />)
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('profile'), setSelectedTab(4) }}>

                    {
                        selectedTab === 4 ? (<Icon
                            reverse
                            name='account-circle'
                            type='materialicons'
                            color='#000'
                            size={20}


                        />) : (
                            <Icon

                                name='account-circle'
                                type='materialicons'
                                color='#000'
                                size={20}


                            />)
                    }
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
        // borderColor: '#000',
        // height: 30,
    }
})


export default TabNavigator;