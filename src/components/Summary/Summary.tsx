import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import SummaryItem from './SummaryItem'
import Colors from 'theme/colors'
import { Stock } from 'types/stock'
import useSummary from 'hooks/useSummary'

interface SummaryProps {
    data: Stock[];
}

const Summary: React.FC<SummaryProps> = ({ data }) => {

    const { summary, calculateSummary } = useSummary();
    const [show, setShow] = useState<Boolean>(false)

    useEffect(() => {
        if (show) {
            calculateSummary(data)
        }
    }, [show])

    const handleShow = () => {
        setShow(s => !s)
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={handleShow} />
            {show && <View >
                <View style={styles.triangle} />
                <View>
                    <View>
                        <SummaryItem data={{ title: "CurrentValue", value: summary.currentTotalValue }} />
                        <SummaryItem data={{ title: "Total Investment", value: summary.totalInvested }} />
                        <SummaryItem data={{ title: "Today's Profit & Loss", value: summary.todaysPNL }} />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <SummaryItem data={{ title: "Profit & Loss", value: summary.totalPNL }} />
                    </View>
                </View>
            </View>}
        </View>
    )
}

export default Summary

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: Colors['color-background-inactive'],
        borderRadius: 10,
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 18,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: Colors['color-background-primary'],
        alignSelf: "center",
        marginBottom: 10
    }
})