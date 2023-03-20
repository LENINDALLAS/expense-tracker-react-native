import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { setProfile } from '../utils/helperFunctions';
import { uploadPicture } from "../utils/cloudinaryUploadHelper";

function Onboarding(props) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const pickImage = async() => {
        // uploadPicture()
        console.log('====================================');
        console.log("pickImage");
        console.log('====================================');
        try {
            const response = await DocumentPicker.getDocumentAsync();
            console.log('====================================');
            console.log("response", response);
            console.log('====================================');
            const avatar = await uploadPicture(response.uri);
            await setProfile({ profilePic: avatar });
            setProfilePic(avatar);
        } catch (err) {
            console.warn(err);
        }
    }
    return (
        <View style={styles.onboardingLogoContainer}>
            {/* <View style={styles.onboardingLogoContainer}> */}
            <Image style={styles.onboardingLogo}
                resizeMode="cover"
                source={{
                    uri: 'https://cdn.dribbble.com/users/2004171/screenshots/5646149/dribbble_canvas__calculator_.gif',
                }} />
            {/* </View> */}
            <View style={styles.onboardingFormContainer} >
                <Image style={styles.onboardingAvatar}
                    resizeMode="center"
                    source={{
                        uri: profilePic ? profilePic : 'https://cdn.dribbble.com/users/2004171/screenshots/5646149/dribbble_canvas__calculator_.gif',
                    }} />
                <TextInput style={styles.onboardingForm} placeholder="Enter Name" value={name} keyboardType="text" onChangeText={setName} />
                <TextInput style={styles.onboardingForm} placeholder="Enter Email" value={email} keyboardType="text" onChangeText={setEmail} />
                <TextInput style={styles.onboardingForm} placeholder="Enter phone no" value={phone} keyboardType="text" onChangeText={setPhone} />
                <TouchableOpacity onPress={() => pickImage()}>
                <Text style={styles.onboardingForm} onClick={() => pickImage()}>
                    Select Profile Picture
                </Text>
                </TouchableOpacity>
            </View>

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
    onboardingFormContainer: {
        position: "absolute",
        zIndex: 2,
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        top: "10%",
        width: "80%",
        left: "11%",
        paddingRight: "2%",
        paddingLeft: "2%",
        paddingTop: "4%",
        paddingBottom: "4%",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
    },
    onboardingAvatar: {
        zIndex: 2,
        width: 100,
        height: 100,
        border: "5px solid black",
        // borderRadius: "50%",
        margin: "5%",
        backgroundColor: 'rgba(47, 194, 86,1)'
    },
    onboardingForm: {
        textAlign: "center",
        color: "black",
        paddingVertical: 10,
        border: "2px solid black",
        // borderRadius: "5px",
        margin: 5,
        width: "90%",
        left: "5%",
        backgroundColor: 'rgba(47, 194, 86,1)'        // justifyContent: "center",
        // alignItems: "center",
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