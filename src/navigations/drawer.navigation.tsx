import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { ScreenInputLocation, ScreenShowLocation } from "../screens";
import { ICoords } from "./tab.navigation";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { colors } from "../styles/colors";

type DrawerParam = {
  Input: undefined;
  Show: undefined | ICoords;
};
type DrawerScreenNavigation = DrawerNavigationProp<DrawerParam, "Input">;
export type DrawerTypes = {
  navigation: DrawerScreenNavigation;
};

export function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerParam>();
  return (
    <Drawer.Navigator screenOptions={{
        drawerActiveBackgroundColor: colors.secondary,
        drawerActiveTintColor: colors.white,
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        drawerInactiveBackgroundColor: colors.primary,
        drawerInactiveTintColor: colors.white,
        drawerStyle: {
            backgroundColor: colors.primary
        }
    }}>
      <Drawer.Screen name="Input" component={ScreenInputLocation}
        options={{
            headerTitle: "Entrada de Dados",
            headerTitleAlign: 'center',
            drawerLabel: "Entrada",
            drawerIcon: () => (
                <FontAwesome5 name="search-location" size={24} color={colors.white} />
            )
        }}
      />
      <Drawer.Screen name="Show" component={ScreenShowLocation}
        options={{
            headerTitle: "Posiciona Mapa",
            headerTitleAlign: 'center',
            drawerLabel: "Mapa",
            drawerIcon: () => (
                <Entypo name="location-pin" size={24} color={colors.white} />
            )
        }}
      />
    </Drawer.Navigator>
  );
}
