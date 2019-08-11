import React from "react";
import { StyleSheet, View } from "react-native";
import IconItem from "./iconItem";

export default class InfoBar extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        paddingLeft: 8,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
