// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function(config) {
    config.set({
        mutate: [
            "./**/*.js?(x)",
            "!./**/*@(.test|.spec|Spec).js?(x)",
            "!dummy.js",
            "!babel.config.js",
            "App.js",
        ],
        mutator: "javascript",
        testRunner: "jest",
        reporters: ["progress", "clear-text", "html"],
        jest: {
            projectType: "custom",
        },
        thresholds: {
            high: 80,
            low: 70,
            break: 60,
        },
    });
};
