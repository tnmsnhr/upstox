import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ScreenNames } from '../types/screenNames'
import HomeScreen from '../screens/HomeScreen'

const AppStackGroup = createNativeStackNavigator()

const AppStack = () => {
    return (
        <AppStackGroup.Navigator>
            <AppStackGroup.Screen
                options={{
                    headerShown: false,
                    headerTitle: "Upstox"
                }}
                name={ScreenNames.Home}
                component={HomeScreen}
            />
        </AppStackGroup.Navigator>
    )
}

export default AppStack