import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <View style={styles.container}>
          <View style={styles.cardContainer} >
            <View style={styles.appTitle} >
              <View style={styles.appIcon} >
                <Image 
                  style={styles.iconImage}
                  source={require("../assets/profile_img.png")}
                />
              </View>
            <View style={styles.appTitleTextContainer} >
              <Text style={styles.appTitleText} > {this.props.story.author} </Text>
            </View>
            </View>
            
            <View style={styles.cardContainer}>
              <Image
                style={styles.postImage}
                source={require('../assets/image_1.jpg')}
              />
                <Text style={styles.author}>{this.props.story.title} </Text>
            </View>
            <View style={styles.actionContainer} >
              <View style={styles.likeButton} >
                <Ionicons
                  name={'heart'}
                  size={RFValue(30)}
                  color={'white'}
                />
                <Text style={styles.likeText} > 27k </Text>
              </View>
            </View>
          </View>
          
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    cardContainer: { 
    margin: RFValue(13), 
    backgroundColor: "#DF90A0", 
    borderRadius: RFValue(20) 
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
      width: 20,
      height: 20,
      resizeMode: "stretch",
      borderRadius:'100%'
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(20),
      fontFamily: "Bubblegum-Sans"
    },
    postImage: { 
    resizeMode: "contain", 
    width: "95%", 
    alignSelf: "center", 
    height: RFValue(250) 
    },
    author: { 
    fontSize: RFValue(25), 
    fontFamily: "Bubblegum-Sans", 
    color: "white" 
    },
    actionContainer: { 
    justifyContent: "center", 
    alignItems: "center", 
    padding: RFValue(10) 
    }, 
  likeButton: { 
    width: RFValue(160), 
    height: RFValue(40), 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "row", 
    backgroundColor: "#eb3948", 
    borderRadius: RFValue(30) 
    },
  likeText: { 
    color: "white", 
    fontFamily: "Bubblegum-Sans", 
    fontSize: RFValue(25), 
    marginLeft: RFValue(5) 
  }
  });
  