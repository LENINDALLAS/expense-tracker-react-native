import { View, Text, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function BenzierChart(props) {

    const [dates, setDates] = useState([])

    useEffect(() => {
        const date = new Date().getDate();
        const tempDates = [];
        for (let i = 1; i <= Number(date); i++) {
            tempDates.push(i.toString());
        }
        setDates(tempDates);
    }, []);

    return (
        <View>
            <Text>December - Summary</Text>
            <LineChart
                data={{
                    labels: [...dates],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="RS"
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={styles.benzierChart}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    benzierChart: {
        marginVertical: 8,
        borderRadius: 16
    }
})