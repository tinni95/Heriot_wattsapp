import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import PropTypes from "prop-types";
import { itemCard } from "../client-configs/stefanos/constants/colors";
export default class ItemCard extends React.Component {
    static propTypes = {
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <TouchableOpacity
                style={{ flex: 1, alignItems: "center", marginTop: 20 }}
            >
                <View style={styles.itemCard}>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemName}>{this.props.name}</Text>
                        <Text style={styles.itemPrice}>
                            £{this.props.price}
                        </Text>
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
    itemCard: {
        flex: 1,
        flexDirection: "row",
        height: 100,
        margin: 8,
        width: 320,
        backgroundColor: itemCard.background,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: "column",
        margin: 10,
        flex: 6,
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 24,
    },
    itemPrice: {
        marginTop: 15,
        fontSize: 16,
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
