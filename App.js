import React from 'react';
import { View, Text,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
var navigationOptions = ({navigation}) => {
	return {
         title: "title",
         headerRight:(  
         	<View>
                <Button  
                   title="right" 
                   onPress={() => alert("hello")}  
                />  
         	</View>   
        ),
		headerLeft:(  
         	<View>
                <Button  
                   title="left" 
                   onPress={() => alert("hello")}  
                />  
         	</View>   
        ),
         headerBackTitle : "返回",
         headerStyle: {
                backgroundColor: '#fff'
            },
         headerTitleStyle: {
                color: 'green',
				flex:1,
                alignSelf : 'center',
				textAlign:'center'
         }
	};
  	   
};
export default StackNavigator({
  Home: {
    screen: HomeScreen,
	navigationOptions :navigationOptions
  },
});