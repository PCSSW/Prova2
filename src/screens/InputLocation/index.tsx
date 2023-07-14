import React, { useState } from "react"
import { Text, View, Alert } from "react-native"
import { ComponentButton, ComponentInput, ComponentTitle } from "../../components"
import { styles } from "./styles"
import { ICoords, TabTypes } from "../../navigations/tab.navigation"

export function InputLocation({navigation}:TabTypes) {
    const [data, setData] = useState<ICoords>()
    function handleChange(item: ICoords) {
        setData({...data, ...item})
    }
    function handleShowMap() {
        console.log(data)
        if (!data?.destinoLatitude ||
            !data?.destinoLongitude ||
            !data?.origemLatitude ||
            !data?.origemLongitude) {
                Alert.alert("Preencha todo o formulário!")
            } else {
                navigation.navigate("Show", data)
            }
    }
    return (
        <View style={styles.container}>
            <ComponentTitle>Origem</ComponentTitle>
            <ComponentInput 
                placeholder="Latitude"
                keyboardType="decimal-pad"
                onChangeText={(i) => handleChange({origemLatitude: Number(i) })} 
            />
            <ComponentInput 
                placeholder="Longitude" 
                keyboardType="decimal-pad"
                onChangeText={(i) => handleChange({origemLongitude: Number(i) })} 
            />
            <ComponentTitle>Destino</ComponentTitle>
            <ComponentInput 
                placeholder="Latitude" 
                keyboardType="decimal-pad"
                onChangeText={(i) => handleChange({destinoLatitude: Number(i) } )} 
                />
            <ComponentInput 
                placeholder="Longitude" 
                keyboardType="decimal-pad"
                onChangeText={(i) => handleChange({destinoLongitude: Number(i) } )} 
                />
            <ComponentButton onPress={handleShowMap}>
                <Text style = {styles.buttonText}>Enviar</Text>
            </ComponentButton>
            </View>
    )
}