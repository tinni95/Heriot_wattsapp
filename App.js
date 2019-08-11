import React from "react";
import { NativeRouter } from "react-router-native";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
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

export default class Appe extends React.Component {
    state = {
        search: "",
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <NativeRouter>
                <ScrollView>
                    <InfoBar style={styles.infoBar} />
                    <View style={styles.mainHeaders}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logo}>Logo</Text>
                        </View>
                        <NavigationBar {...categories} />
                    </View>
                    <View style={styles.mainConent}>
                        <SearchBar
                            containerStyle={styles.searchBarContainer}
                            inputContainerStyle={styles.searchBar}
                            placeholder={"Type something..."}
                            onChangeText={this.updateSearch}
                            value={search}
                            placeholderTextColor={"white"}
                            color={"white"}
                        />
                        <Menu {...categories} />
                    </View>
                </ScrollView>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
    },
    infoBar: {
        backgroundColor: secondary,
        paddingBottom: 15,
    },
    mainHeaders: {
        backgroundColor: main,
    },
    mainConent: {},
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
});
