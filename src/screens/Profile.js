import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import TabNavigator from "../screens/TabNavigator";

function Profile(props) {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.profile_top}>
                    <Image style={styles.profile_top_picture}
                        resizeMode="cover"
                        source={{
                            uri: 'https://cdn.dribbble.com/users/2004171/screenshots/5646149/dribbble_canvas__calculator_.gif',
                        }} />
                <View style={styles.profile_top_headings} >
                    <Text >Lenin dallas L</Text>
                    <Text >lenindallas.l@gmail.com</Text>
                </View>
            </View>
            <View style={styles.profile_middle} >
                <View style={styles.profile_middle_section} >
                    <Icon
                        reverse
                        name='bell'
                        type='fontisto'
                        color='#57A39D'
                        size={15}
                    />
                    <Text style={styles.profile_middle_section_text}>
                        Profile Info
                    </Text>
                </View>
                {/* --------   below are extra remove */}
                <View style={styles.profile_middle_section} >
                    <Icon
                        reverse
                        name='bell'
                        type='fontisto'
                        color='#57A39D'
                        size={15}
                    />
                    <Text style={styles.profile_middle_section_text}>
                        Profile Info
                    </Text>
                </View>
                <View style={styles.profile_middle_section} >
                    <Icon
                        reverse
                        name='bell'
                        type='fontisto'
                        color='#57A39D'
                        size={15}
                    />
                    <Text style={styles.profile_middle_section_text}>
                        Profile Info
                    </Text>
                </View>
                <View style={styles.profile_middle_section} >
                    <Icon
                        reverse
                        name='bell'
                        type='fontisto'
                        color='#57A39D'
                        size={15}
                    />
                    <Text style={styles.profile_middle_section_text}>
                        Profile Info
                    </Text>
                </View>
                <View style={styles.profile_middle_section} >
                    <Icon
                        reverse
                        name='bell'
                        type='fontisto'
                        color='#57A39D'
                        size={15}
                    />
                    <Text style={styles.profile_middle_section_text}>
                        Profile Info
                    </Text>
                </View>
            </View>
            <TabNavigator navigation={props.navigation} selectedTab={4} />
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "#00b4d8",
    },
    profile_top: {
        flex: .4,
        alignItems: 'center',

    },
    profile_top_picture: {
        borderRadius: 150 / 2,
        height: 150,
        width: 150,
    },
    profile_top_headings: {
        width: "100%",
        alignItems: "center",
        padding: 10
    },
    profile_middle: {
        flex: .6,
    },
    profile_middle_section: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    profile_middle_section_text: {
        padding: 10
    }
})

export default Profile;