import React, { Component } from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";

import PurpleSquidSpinner from "../../shared/PurpleSquidSpinner";
import PurpleSquidGraphQlErrorDisplay from "../../shared/PurpleSquidGraphQlErrorDisplay";
import environment from "./environment";

class PurpleSquidRelayQueryRenderer extends Component {
    static propTypes = {
        query: PropTypes.any.isRequired,
        variables: PropTypes.object,
        render: PropTypes.func.isRequired,
    };

    render() {
        const { query, variables } = this.props;

        return (
            <QueryRenderer
                environment={environment}
                query={query}
                variables={variables}
                render={this.queryRender}
            />
        );
    }

    queryRender = ({ error, props, retry }) => {
        if (error) return <PurpleSquidGraphQlErrorDisplay />;
        if (!props) return <PurpleSquidSpinner />;

        return this.props.render({ error, props, retry });
    };
}

export default PurpleSquidRelayQueryRenderer;
