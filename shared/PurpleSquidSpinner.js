import { ActivityIndicator, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { main } from "../constants/colors";

const PurpleSquidSpinner = ({ color }) => (
    <ActivityIndicator
        color={color}
        size="large"
        style={styles.activityIndicator}
    />
);

PurpleSquidSpinner.propTypes = {
    color: PropTypes.string,
};

PurpleSquidSpinner.defaultProps = {
    color: main,
};

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: "flex-start",
    },
});

export default PurpleSquidSpinner;
