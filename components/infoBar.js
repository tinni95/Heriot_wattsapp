import React from "react";
import { StyleSheet, View } from "react-native";
import IconItem from "./iconItem";
import PropTypes from "prop-types";

export default class InfoBar extends React.Component {
    static propTypes = {
        style: PropTypes.object.isRequired,
        number: PropTypes.string.isRequired,
        openHour: PropTypes.number.isRequired,
        closingHour: PropTypes.number.isRequired,
    };

    render() {
        console.log(this.props.number);
        return (
            <View style={this.props.style}>
                <View style={styles.bar}>
                    <IconItem
                        color={"white"}
                        text={this.props.number}
                        name={"ios-call"}
                    />
                    <IconItem
                        color={"white"}
                        text={
                            "open:" +
                            this.props.openHour +
                            "am-" +
                            this.props.closingHour +
                            "pm"
                        }
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
