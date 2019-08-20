import React from "react";
import { NativeRouter } from "react-router-native";

import { AppHeader } from "./appHeader";
import { AppMainContent } from "./appMainContent";
import PurpleSquidModal from "./purpleSquidModal";

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
                    categories={this.props.categories}
                    updateSearch={this.updateSearch}
                    search={this.state.search}
                />
            </NativeRouter>
        );
    }
}
