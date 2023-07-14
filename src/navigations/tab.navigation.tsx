import React from "react";
import { createBottomTabNavigator, BottomTabNavigationProp} from "@react-navigation/bottom-tabs"
import { ScreenInputLocation, ScreenShowLocation } from "../screens";
import { colors } from "../styles/colors";
import { FontAwesome5, Entypo } from '@expo/vector-icons';

export interface ICoords {
    origemLatitude?: number
    origemLongitude?: number
    destinoLatitude?: number
    destinoLongitude?: number
}

type TabParam = {
    Input: undefined
    Show: undefined | ICoords
}
type TabScreenNavigation = BottomTabNavigationProp<TabParam, 'Input'>
export type TabTypes = {
    navigation: TabScreenNavigation
}
export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParam>()
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            tabBarInactiveBackgroundColor: colors.primary,
            tabBarInactiveTintColor: colors.white,
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: colors.white
        }}>
            <Tab.Screen name = "Input" component={ScreenInputLocation} 
                options = {{
                    tabBarIcon: () => (
                        <FontAwesome5 name="search-location" size={24} color={colors.white} />
                    ),
                    headerTitle: "Entrada de Dados",
                    headerTitleAlign: 'center',
                    tabBarLabel: "Entrada"
                }} />
            <Tab.Screen name = "Show" component={ScreenShowLocation} 
                options = {{
                    tabBarIcon: () => (
                        <Entypo name="location-pin" size={24} color={colors.white} />
                    ),
                    headerTitle: "Posiciona Mapa",
                    headerTitleAlign: 'center',
                    tabBarLabel: "Mapa"
                }} />
        </Tab.Navigator>
    )

}