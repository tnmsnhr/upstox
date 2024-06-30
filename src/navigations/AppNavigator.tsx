import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

import AppStack from 'stacks/AppStack';
import Colors from 'theme/colors';

const Stack = createNativeStackNavigator()

const AppNavigator: React.FC = () => {
    const currentTheme = useColorScheme()
    return (
        <NavigationContainer
            theme={currentTheme == "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerTitle: "Upstox Holding",
                    headerTintColor: Colors['color-background-white'],
                    headerStyle: {
                        backgroundColor: Colors['color-background-primary'],
                    },
                }}
            >
                <Stack.Screen
                    name="AppStack" component={AppStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
