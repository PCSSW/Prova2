import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import MapView, {Polyline, Marker, Region} from "react-native-maps"
import { ComponentButton, ComponentInput, ComponentTitle } from "../../components"
import { styles } from "./styles"
import { useRoute } from "@react-navigation/native"
import { ICoords } from "../../navigations/tab.navigation"
import { colors } from "../../styles/colors"
import { MaterialIcons } from '@expo/vector-icons';

export function ShowLocation() {
    const route = useRoute()
    const data = route.params as ICoords
    const [error, setError] = useState<string | null>(null)
    const [origem, setOrigem] = useState<Region | null>(null)
    const [destino, setDestino] = useState<Region | null>(null)
    const [marker, setMarker] = useState<Region[]>([])
    useEffect(() => {
        if (data && data.origemLatitude && data.origemLongitude) {
            setOrigem({
                latitude: data.origemLatitude, 
                longitude: data.origemLongitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004,
            })
        } else {
            setError('Sem Origem')
        }
        if (data && data.destinoLatitude && data.destinoLongitude) {
            setDestino({
                latitude: data.destinoLatitude, 
                longitude: data.destinoLongitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004,
            })
        } else {
            setError('Sem Destino')
        }
    }, [data])
    return (
        <View style = {styles.container}>
        {origem && destino ?
            <MapView
                showsUserLocation={true}
                style = {styles.map}
                initialRegion={origem}
            >
                <Marker coordinate={origem} >
                    <MaterialIcons name="location-history" size={48} color= {colors.primary} />
                </Marker>
                <Marker coordinate={destino} >
                    <MaterialIcons name="location-history" size={48} color= {colors.secondary} />
                </Marker>
                <Polyline 
                coordinates={[
                    {latitude: origem.latitude, longitude: origem.longitude},
                    {latitude: destino.latitude, longitude: destino.longitude},
                ]} 
                strokeColor={colors.third}
                strokeWidth={7}
                />
            </MapView> 
            : <Text style = {styles.text}>{error}</Text>
            }
        </View>
    )
}