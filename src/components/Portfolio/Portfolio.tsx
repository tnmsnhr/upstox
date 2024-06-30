import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stock } from 'types/stock'
import textStyles from 'theme/typo';

interface PortfolioProps {
    data: Stock;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    return (
        <TouchableOpacity style={{ paddingVertical: 8 }}>
            <View style={{ ...styles.item, marginBottom: 8 }}>
                <Text style={styles.boldText}>{data.symbol}</Text>
                <View style={{ ...styles.item, justifyContent: "flex-start" }}>
                    <Text>LTP: </Text>
                    <Text style={styles.boldText}>₹{data.avgPrice}</Text>
                </View>
            </View>
            <View style={{ ...styles.item }}>
                <Text style={{ ...textStyles.body1Default, marginLeft: 0 }}>{data?.quantity}</Text>
                <View style={{ ...styles.item, justifyContent: "flex-start" }}>
                    <Text>P/L: </Text>
                    <Text style={styles.boldText}>₹{((data.ltp * data?.quantity) - (data?.avgPrice * data?.quantity)).toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Portfolio

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    boldText: {
        ...textStyles.title1Default,
        fontWeight: "bold",
    }
})