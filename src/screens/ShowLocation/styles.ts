import { Dimensions, StyleSheet} from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
       width: Dimensions.get("window").width,
       height: Dimensions.get("window").height
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
})