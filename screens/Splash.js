import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Splash(props) {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("onboarding")} style={styles.splashContainer}>
            <Text style={styles.splashText}>mono</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        backgroundColor: '#57A39D',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        flex: 1,
    },
    splashText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 40
    }
})

export default Splash;