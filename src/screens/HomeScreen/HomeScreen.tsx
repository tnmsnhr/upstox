import { StyleSheet, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import fetchData from 'services/fetchData'
import { Stock } from 'types/stock'
import Portfolio from 'components/Portfolio'
import Colors from 'theme/colors'
import Summary from 'components/Summary'
import Loader from 'UIComponents/loader'

const HomeScreen = () => {

    const [holdings, setHoldings] = useState<Stock[]>([])
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        fetchData()
            .then(res => {
                setHoldings(res)
            })
            .catch(err => {
                Alert.alert(
                    'Error',
                    'An error occurred. Retry?',
                    [
                        {
                            text: 'Ok',
                            style: 'cancel',
                        },
                    ],
                    { cancelable: false }
                );
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 40 }}
                    data={holdings}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return <View style={index != holdings.length - 1 ? styles.applyBorder : {}}>
                            <Portfolio data={item} />
                        </View>
                    }}
                />
            </View>
            <Summary data={holdings} />
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: Colors['color-background-white']
    },
    applyBorder: {
        borderBottomWidth: 1, borderBottomColor: Colors['color-border']
    }
})