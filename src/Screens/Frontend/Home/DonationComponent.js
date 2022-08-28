import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-paper';
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle';
export const DonationComponent = ({ item }) => {
    return (
        <View style={[styles.main, commonJustify.rowSpaceBetween]}>
            <View style={{ textAlign: "center" }}>
                <View style={styles.margin}>
                    <Text style={styles.subheading}>{item.name}</Text>
                    {/* </View>
                <View style={styles.margin}> */}
                    <Text style={styles.subheading}>{item.location}</Text>
                </View>
                <View style={styles.margin}>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                {/* <Image style={{ width: 100 }} resizeMode="contain" source={require("../../../../assets/Images/A+ve.png")} /> */}
                <View style={{ marginTop: 10, marginRight: 10 }}>
                    <Button color='#3369e7"' mode="outlined" onPress={() => console.log('Pressed')}>
                        Contact Us
                    </Button>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 10
    },
    margin: {
        marginLeft: 10,
        padding: 5,
    },
    heading: {
        fontSize: 17,
        color: "black"
    },
    subheading: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
        textAlign: "center"
    },
    time: {
        fontSize: 15
    }
})