import React, { Component } from 'react';
import { Text, View , StyleSheet , Image , Platform , StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from './PostCard'

let posts = require("./temp_posts.json");

export default class Feed extends Component {

    renderItem = ({ item: story }) => {
        return <PostCard story={story} />;
      };
    
    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container} >
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle} >
                    <View style={styles.appIcon} >
                        <Image 
                            style={styles.iconImage}
                            source={require("../assets/logo.png")}
                        />
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer} >
                    <FlatList
                        renderItem={this.renderItem}
                        data={posts}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#67232F"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.93
    }
  });
  