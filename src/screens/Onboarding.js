import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { setProfile } from '../utils/helperFunctions';
import { uploadPicture } from "../utils/cloudinaryUploadHelper";

function Onboarding(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const pickImage = async () => {
        // uploadPicture()
        try {
            // const response = await DocumentPicker.getDocumentAsync();
            // let result = await ImagePicker.launchImageLibraryAsync({
            //     allowsEditing: true,
            //     aspect: [4, 3],
            //     base64: true
            // });
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            }); 
            if(!result || !result.assets || !result.assets[0].base64) {
                alert("Unable to select image, please try again.");
                return
            }
            let base64Img = `data:image/jpg;base64,${result.assets[0].base64}`;
            const avatar = await uploadPicture(base64Img);
            await setProfile({ profilePic: avatar });
            setProfilePic(avatar);
        } catch (err) {
            console.warn(err);
        }
    }

    const handleSubmit = async () => {
        await setProfile({ name, email, phone });
        props.navigation.navigate("homepage");
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
                <View style={styles.onboardingAvatarContainer} >
                    <Image style={styles.onboardingAvatar}
                        resizeMode="center"
                        source={{
                            uri: profilePic ? profilePic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                        }} />
                </View>
                <TextInput style={styles.onboardingForm} placeholder="Enter Name" value={name} keyboardType="text" onChangeText={setName} />
                <TextInput style={styles.onboardingForm} placeholder="Enter Email" value={email} keyboardType="text" onChangeText={setEmail} />
                <TextInput style={styles.onboardingForm} placeholder="Enter phone no" value={phone} keyboardType="text" onChangeText={setPhone} />
                <TouchableOpacity onPress={() => pickImage()} style={{ ...styles.onboardingForm, alignItems: "center" }}>
                    <Text >
                        Select Profile Picture
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.onboardingHomepageButton} >
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
        flex: .8,
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
    onboardingAvatarContainer: {
        borderWidth: 5,
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: 100 / 2,
    },
    onboardingAvatar: {
        zIndex: 2,
        width: 100,
        height: 100,
        // border: "5px solid black",
        borderRadius: 100 / 2,
        margin: "5%",
        backgroundColor: 'rgba(47, 194, 86,1)',
    },
    onboardingForm: {
        textAlign: "center",
        color: "black",
        paddingVertical: 10,
        // border: "2px solid black",
        // borderRadius: "5px",
        margin: 5,
        width: "90%",
        left: 2 / 2,
        backgroundColor: 'rgba(47, 194, 86,1)',
        marginTop: 25,
        // justifyContent: "center",
        // alignItems: "center",
        //   borderWidth: 5,
        // borderColor: "black",
        // borderStyle: "solid",
    },
    onboardingHomepageButton: {
        flex: .2,
        position: "absolute",
        zIndex: 2,
        borderRadius: 20,
        backgroundColor: '#57A39D',
        top: Dimensions.get("window").height - 90,
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