import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';
import TabNavigator from "../screens/TabNavigator";
import React from 'react';

function Add(props) {
    return (
        <View style={styles.AddContainer}>
            <TextInput placeholder="number" keyboardType="numeric" onChangeText={() => { }} /> 

            <TabNavigator navigation={props.navigation} selectedTab={3} />
        </View>
    )
}

const styles = StyleSheet.create({
    AddContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#00b4d8",
    }
})

export default Add;