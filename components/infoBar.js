import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { width } from "../constants/dimensions";

import IconItem from "./iconItem";

export default class InfoBar extends React.Component {
    render() {
        return (
            <View style={styles.bar}>
                <IconItem
                    color={"white"}
                    text={"01314471134"}
                    name={"ios-call"}
                />
                <IconItem
                    color={"white"}
                    text={"open:11am-11pm"}
                    name={"ios-pin"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        paddingTop: 15,
        marginTop: 20,
        paddingLeft: 8,
        backgroundColor: "#E0A749",
        height: 50,
        width: width,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
