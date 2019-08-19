import React from "react";
import { SearchBar } from "react-native-elements";
import { ScrollView, View, StyleSheet } from "react-native";

import { transparent, secondary, white } from "../constants/colors";

import Menu from "./menu";

export const AppMainContent = props => {
    return (
        <ScrollView>
            <View style={styles.mainConent}>
                <SearchBar
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBar}
                    placeholder={"Type something..."}
                    onChangeText={props.updateSearch}
                    value={props.search}
                    placeholderTextColor={white}
                    color={white}
                    inputStyle={{ color: white }}
                />
                <Menu categories={props.categories} search={props.search} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: white,
        borderBottomColor: transparent,
        borderTopColor: transparent,
    },
    searchBar: {
        backgroundColor: secondary,
        borderRadius: 10,
    },
    mainConent: {},
});
