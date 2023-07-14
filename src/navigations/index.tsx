import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { TabNavigation } from "./tab.navigation"
import { DrawerNavigation } from "./drawer.navigation";

export function Navigation() {
    return (
        <NavigationContainer>
            <DrawerNavigation/> 
        </NavigationContainer>
    )
}
//Quando for Tab, mudar DrawerNavigation para TabNavigation