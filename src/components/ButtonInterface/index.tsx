import React from "react"
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import { styles } from "./styles"

export function ButtonInterface({ onPress, children, ...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity onPress={onPress} {...rest} style ={styles.button}>
            {children}
        </TouchableOpacity>
    )
}