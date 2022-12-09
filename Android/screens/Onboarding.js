import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

function Onboarding(props) {
    return (
        <View style={styles.onboardingLogoContainer}>
            {/* <View style={styles.onboardingLogoContainer}> */}
            <Image style={styles.onboardingLogo}
                resizeMode="cover"
                source={{
                    uri: 'https://cdn.dribbble.com/users/2004171/screenshots/5646149/dribbble_canvas__calculator_.gif',
                }} />
            {/* </View> */}
            <TouchableOpacity onPress={() => props.navigation.navigate("homepage")} style={styles.onboardingHomepageButton} >
                <Text style={styles.onboardingButtonText} >
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    onboardingLogoContainer: {
        // height: "100%",
        // width: "100%",
        flex: 1,
    },
    onboardingLogo: {
        backgroundColor: "black",
        //    height: "100%",
        //     width: "100%",
        // zIndex: -1,
        flex: 1,
        // justifyContent: "center",
        // position: "absolute",
        // left: "14.74 %",
        // right: "18.34 ",
        // top: "14.16 %",
        // bottom: "34.28 %",
        // opacity: "0.6"
    },
    onboardingHomepageButton: {
        position: "absolute",
        zIndex: 2,
        borderRadius: 20,
        backgroundColor: '#57A39D',
        top: "70%",
        left: "16%",
        paddingRight: "25%",
        paddingLeft: "25%",
        paddingTop: "4%",
        paddingBottom: "4%",
        alignItems: "center",
        justifyContent: "center",

        // border: "1px solid black",
        //     // height: "10%",
        //     border: "5px solid black",
    },
    onboardingButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold"

    }

})

export default Onboarding;