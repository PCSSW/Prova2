import React from "react"
import { Text, TextProps } from "react-native"
import { styles } from "./styles"

export function TitleInterface({ ...rest}: TextProps) {
    return (
        <Text style={styles.text} {...rest}  />
    )
}