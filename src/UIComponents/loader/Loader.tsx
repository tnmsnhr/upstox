import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from 'theme/colors'

const Loader = () => {
    return (
        <View style={styles.spinner}>
            <ActivityIndicator size={"large" || 'large'} color={Colors['color-background-primary']} />
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})