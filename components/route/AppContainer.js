import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icons from '../utils/icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../utils/color';
import Home from '../screen/Home/Home';
import Profile from '../screen/Profile/Profile';
import Logout from '../screen/Logout/Logout';
import Login from '../screen/Auth/Login/Login'
import Signup from '../screen/Auth/SignUp/Signup'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
       
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Bottom" component={BottomContainer} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? Icons.home_select : Icons.home_unselect;
          } else if (route.name === 'Profile') {
            iconName = focused
              ? Icons.category_select
              : Icons.category_unselect;
          }  else if (route.name === 'Logout') {
            iconName = focused ? Icons.profile_select : Icons.profile_unselect;
          }
          return <Image source={iconName} style={styles.img} />;
        },
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Logout" component={Logout} />
     
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
});

export default AppContainer;
