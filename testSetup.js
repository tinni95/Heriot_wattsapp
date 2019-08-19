jest.mock("react-relay", () => ({
    // replace QueryRenderer with a react native View so that it will still render
    QueryRenderer: jest.requireActual("react-native").View,

    // pretend that createFragmentContainer doesn't do anything
    // the relay compiler and eslint will catch problems relating to wrongly creating fragments
    createFragmentContainer: component => component,

    // mock commitMutation
    commitMutation: jest.fn(),
}));
