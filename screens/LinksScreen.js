import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons';



export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        //icon="md-school"
        label="Change Password"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        //icon="md-compass"
        label="Terms and Conditions"
        onPress={()=>showTerms}
      />
      <CardComponent text="This Card component shows Terms and conditions of UFEEl mobile App"/>

      <OptionButton
        label="Logout"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
    </ScrollView>
  );
}

function showTerms(){
  return(
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <OptionButton
      //icon="md-school"
      label="Change Password"
      onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
    />

    <OptionButton
      //icon="md-compass"
      label="Terms and Conditions"
      onPress={()=>showTerms}
    />

    <OptionButton
      label="Logout"
      onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
      isLastOption
    />
    <CardComponent text="Terms and conditions display"/>

  </ScrollView>

  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} type='Text' onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}
function CardComponent({text}) {
  return (
  <View>
    <View>
     <Card style={styles.cardSize}> 
        <Text style={styles.cardTextStyle}>{text}</Text>
      </Card>
    </View>
 </View>
  );
}

// function CardComponent() {
//   return (
    
//     <Card
//   title='HELLO WORLDS'
//   image={require('../assets/images/robot-prod.png')}>
//   <Text style={{marginBottom: 10}}>
//     The idea with React Native Elements is more about component structure than actual design.
//   </Text>
//   <Button
//   icon={{
//     name: "arrow-right",
//     size: 10,
//     color: "white"
//   }}
  
// />
// </Card>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fafafa',
    backgroundColor: '#2D709E',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
   // backgroundColor: '#fdfdfd',
    backgroundColor: '#2D709E',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    
    //borderColor: '#ededed',
    //borderBottomColor: 'white',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
    color: 'white',
  },
  roundButtonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:100,
    backgroundColor: 'black',
    borderColor: '#fff',
  },
  cardSize : {
    width:20,
    height:20
  },
});
