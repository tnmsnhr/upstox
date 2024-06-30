import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import textStyles from 'theme/typo';

interface SummaryItemProps {
    data: { title: String, value: number };
}

const SummaryItem: React.FC<SummaryItemProps> = ({ data }) => {
    return (
        <View style={styles.item}>
            <Text style={{ ...textStyles.title1Default, fontWeight: "bold" }}>{data.title}</Text>
            <Text style={{ ...textStyles.body1Default, fontWeight: "bold" }}>₹{data.value}</Text>
        </View>
    )
}

export default SummaryItem

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    }
})