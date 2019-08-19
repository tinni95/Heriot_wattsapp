import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { main, secondary, white } from "../constants/colors";

import InfoBar from "./infoBar";
import NavigationBar from "./navigationBar";

export const AppHeader = props => {
    return (
        <View>
            <InfoBar
                number={"01314471135"}
                openHour={11}
                closingHour={11}
                style={styles.infoBar}
            />
            <View style={styles.mainHeaders}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>Logo</Text>
                </View>
                <NavigationBar categories={props.categories} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    infoBar: {
        backgroundColor: secondary,
        paddingBottom: 15,
    },
    mainHeaders: {
        backgroundColor: main,
    },
    logoContainer: {
        margin: 20,
    },
    logo: {
        color: white,
        fontSize: 50,
        textAlign: "center",
    },
});
