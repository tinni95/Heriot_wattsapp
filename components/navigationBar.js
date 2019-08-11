import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import NavigationElement from "./navigationElement";
import { width } from "../constants/dimensions";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.state = {
            active: 0,
        };
    }

    updateState = active => {
        this.setState({ active: active });
    };

    renderNavBar = () => {
        return this.props.categories.edges
            .map(edge => edge.node)
            .map((category, index) => {
                return (
                    <NavigationElement
                        name={category.name}
                        index={index}
                        active={this.state.active}
                        updateState={this.updateState}
                        key={category.name}
                    />
                );
            });
    };

    render() {
        return (
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.padding} />
                {this.renderNavBar()}
                <View style={styles.padding} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 100,
    },
    padding: {
        width: width / 2 - 45,
    },
});
