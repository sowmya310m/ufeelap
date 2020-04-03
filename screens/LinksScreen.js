import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons';



class LinksScreen extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
              expandedButton : false,
          };
    }


  showTerms(){
      this.setState({
          expandedButton : !this.state.expandedButton  //Step 2
      });

    }

  render() {
  console.log("enterrbvhwvhjwv", this.state.expandedButton);
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.mainTextStyle}> Settings</Text>
      <View style={{marginTop: 20}}>
      <RectButton style={[styles.option, styles.firstOption ]} type='Text' onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}>
        <View>
            <Text style={styles.optionText}>Change Password</Text>
        </View>
      </RectButton>
      <RectButton style={[styles.option]} type='Text' onPress={this.showTerms.bind(this, 'second')}>
        <View>
            <Text style={styles.optionText}>Terms and Condition</Text>
            {
            this.state.expandedButton &&
            <Card>
            <Text> Hiiiiiiiiiiiiiiivvbhwbvhidsbvsbvjbvjbvj njvbdjvjdbvjbvjbvbv vhbv </Text>
              <Text> Hiiiiiiiiiiiiiiivvbhwbvhidsbvsbvjbvjbvj njvbdjvjdbvjbvjbvbv vhbv </Text>
                <Text> Hiiiiiiiiiiiiiiivvbhwbvhidsbvsbvjbvjbvj njvbdjvjdbvjbvjbvbv vhbv </Text>
                  <Text> Hiiiiiiiiiiiiiiivvbhwbvhidsbvsbvjbvjbvj njvbdjvjdbvjbvjbvbv vhbv </Text>
                    <Text> Hiiiiiiiiiiiiiiivvbhwbvhidsbvsbvjbvjbvj njvbdjvjdbvjbvjbvbv vhbv </Text>

            <Text style={styles.closeText}> close cvgfhvbenbinbtmbni </Text>
             </Card>
           }
        </View>
      </RectButton>
      <RectButton style={[styles.option ]} type='Text' onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}>
        <View>
            <Text style={styles.optionText}>Logout</Text>
        </View>
      </RectButton>
      </View>
    </ScrollView>

  );
 }

}


export default LinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fafafa',
    backgroundColor: '#2D709E',
  },
  mainTextStyle:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    color: 'white',
  },
  closeText: {
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 15,
    marginTop: 60,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  firstOption: {
    borderWidth: 0,
  },
  option: {
   // backgroundColor: '#fdfdfd',
    backgroundColor: '#2D709E',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    //borderBottomColor: 'white',
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
