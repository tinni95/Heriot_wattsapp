import React from "react";
import { NativeRouter } from "react-router-native";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { SearchBar } from "react-native-elements";

import {
    main,
    secondary,
    searchBar,
} from "./client-configs/stefanos/constants/colors";

import { categories } from "./dummy";
import NavigationBar from "./components/navigationBar";
import InfoBar from "./components/infoBar";
import Menu from "./components/menu";

export default function App() {
    return (
        <NativeRouter>
            <ScrollView>
                <InfoBar />
                <View style={styles.mainHeader}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logo}>Logo</Text>
                    </View>
                    <NavigationBar {...categories} />
                </View>
                <SearchBar
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBar}
                    placeholder={"Type something..."}
                    placeholderTextColor={"white"}
                    color={"white"}
                />
                <Menu {...categories} />
            </ScrollView>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: "white",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
    },
    searchBar: {
        backgroundColor: secondary,
        borderRadius: 10,
    },
    logoContainer: {
        margin: 20,
    },
    logo: {
        color: "white",
        fontSize: 50,
        textAlign: "center",
    },
    mainHeader: {
        backgroundColor: main,
    },
});
