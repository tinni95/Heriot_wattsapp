import React from "react";
import { NativeRouter } from "react-router-native";

import { categories } from "../dummy";

import { AppHeader } from "./appHeader";
import { AppMainContent } from "./appMainContent";

export default class AppContent extends React.Component {
    state = {
        search: "",
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        return (
            <NativeRouter>
                <AppHeader categories={this.props.categories} />
                <AppMainContent
                    categories={categories.categories}
                    updateSearch={this.updateSearch}
                    search={this.state.search}
                />
            </NativeRouter>
        );
    }
}
