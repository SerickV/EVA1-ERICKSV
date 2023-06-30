import React from "react";
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

const tw = <Icon name="twitter" size={30} color="black"/>
const fb = <Icon name="facebook" size={30} color="black"/>
const ins = <Icon name="instagram" size={30} color="black"/>
const    Tik = <Icon name ="fa-tiktok"  size={30} color="black"/>

const ProfileCard = () => {
    const user = {
        avatar: "https://e0.pxfuel.com/wallpapers/473/426/desktop-wallpaper-dragon-ball-z-top-quality-dragon-ball-z-background-dragon-ball-super.jpg",
        coverPhoto: "https://e0.pxfuel.com/wallpapers/920/109/desktop-wallpaper-url-shortener-dark-nature-background-dark-scenic.jpg",
        name: "Erick Sánchez"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.twitter.com")}>
                    {tw}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.facebook.com")}>
                    {fb}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.instagram.com")}>
                    {ins}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.tiktok.com")}>
                    {Tik}
                </Text>
             </View>
        </View>
    )
}


const renderButton = (icon, url) => (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
        {icon}
    </TouchableOpacity>
);



const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            alignItems: "center",
            height: 200,
        },
        coverPhoto: {
            width: "100%",
            height: 200
        },
        avatarContainer: {
            alignItems: "center",
            marginTop: -75
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: "white"
        },
        name: {
            marginTop: 15,
            fontSize: 20
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 20,
            width: "60%",
            justifyContent: "space-between"

        }
    }
)


export default ProfileCard