import React from "react";
import { NativeRouter } from "react-router-native";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { SearchBar } from "react-native-elements";

import { main, secondary, white, transparent } from "../constants/colors";
import { categories } from "../dummy";

import InfoBar from "./infoBar";
import Menu from "./menu";
import NavigationBar from "./navigationBar";

export default class AppContent extends React.Component {
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
                    <NavigationBar categories={this.props.categories} />
                </View>
                <ScrollView>
                    <View style={styles.mainConent}>
                        <SearchBar
                            containerStyle={styles.searchBarContainer}
                            inputContainerStyle={styles.searchBar}
                            placeholder={"Type something..."}
                            onChangeText={this.updateSearch}
                            value={search}
                            placeholderTextColor={white}
                            color={white}
                            inputStyle={{ color: white }}
                        />
                        <Menu {...categories} search={this.state.search} />
                    </View>
                </ScrollView>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    infoBar: {
        backgroundColor: secondary,
        paddingBottom: 15,
    },
    mainHeaders: {
        backgroundColor: main,
    },
    mainConent: {},
    searchBarContainer: {
        backgroundColor: white,
        borderBottomColor: transparent,
        borderTopColor: transparent,
    },
    searchBar: {
        backgroundColor: secondary,
        borderRadius: 10,
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
