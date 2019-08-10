import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import { itemCard } from "../client-configs/stefanos/constants/colors";
export default class ItemCard extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, alignItems: "center", marginTop: 20 }}
            >
                <View style={styles.ItemCard}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require("./image_placeholder.png")}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text>{this.props.name}</Text>
                        <Text>{this.props.name}</Text>
                    </View>

                    <View style={styles.plusButton}>
                        <Text style={styles.plus}>+</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    ItemCard: {
        flex: 1,
        flexDirection: "row",
        height: 150,
        margin: 10,
        width: 320,
        backgroundColor: itemCard.background,
        borderRadius: 50,
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        alignContent: "center",
        margin: 5,
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flex: 6,
    },
    plusButton: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: itemCard.plusBtnBckgrnd,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    plus: {
        textAlign: "center",
        color: itemCard.plusBtnText,
        fontSize: 20,
    },
});
