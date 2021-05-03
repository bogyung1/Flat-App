import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {HomePage} from "../pages/HomePage";
import MyPageStack from "./MyPageStack";
import {SignUpPage} from "../pages/SignUpPage";
import {StackNavigation} from "./CommunityStack";
import ComposePageStack from "./ComposePageStack";


const TabIcon = ({name, size, color})=> {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
const TabIcon2 = ({name, size, color})=> {
    return <Ionicons name={name} size={size} color={color} />;
};
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Settings"
           tabBarOptions={{
               keyboardHidesTabBar: true,
               style:{
                   backgroundColor: '#101010',
                   borderTopColor: '#8E8E8E',
                   borderTopWidth: 1,
               },
               activeTintColor: '#FFFFFF',
           }}
        >
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'home':'home-outline',}),
                tabBarLabel: '홈'
            }}/>
            <Tab.Screen name="BgmPage" component={SignUpPage} options={{
                tabBarIcon: props=> TabIcon2({...props, name: props.focused? 'musical-notes':'musical-notes-outline',}),
                tabBarLabel: '무료 BGM'
            }}/>
            <Tab.Screen name="작곡" component={ComposePageStack} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'plus-circle':'plus-circle-outline',}),
            }}/>
            <Tab.Screen name="CommunityPage" component={StackNavigation} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'comment-processing':'comment-outline',}),
                tabBarLabel: '커뮤니티'
            }}/>
            <Tab.Screen name="MyPage" component={MyPageStack} options={{
                tabBarIcon: props=> TabIcon({...props, name: props.focused? 'account':'account-outline',}),
                tabBarLabel: '마이페이지'
            }}/>
        </Tab.Navigator>
    );
}

export default TabNavigation;
