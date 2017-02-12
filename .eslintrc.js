module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true,
        "commonjs": true
    },
    "globals": {
        "dump": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": 0,
        "quotes": [
            "error",
            "single",
            {"allowTemplateLiterals": true}
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};