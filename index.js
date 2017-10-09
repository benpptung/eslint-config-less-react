module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "extends": [ "plugin:react/recommended" ],
  "plugins": [
    "react"
  ],
  "rules": {
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-uses-react": [2], // this is to fix `no-unused-vars` @ React
    "react/jsx-uses-vars": [2], // this is to fix `no-unused-vars` @ React

    "react/display-name": [0],
    "react/jsx-key": [0],

    // experimental rules
    "react/jsx-boolean-value": [ 1, "never", { "always": ["value", "val"]}],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-no-undef": [2],
    "react/no-unescaped-entities": [1],
    "react/no-children-prop": [2],
    "react/no-danger-with-children": [2],
    "react/no-deprecated":[2],
    "react/no-did-mount-set-state": [1],
    "react/no-did-update-set-state": [2],
    "react/no-direct-mutation-state":[2],
    "react/no-redundant-should-component-update": [1],
    "react/no-render-return-value":[1],
    "react/no-typos":[2],
    "react/no-unknown-property":[2], // to prevent `className` by  `class`
    "react/no-unused-prop-types":[1],
    "react/require-render-return": [2],
    "react/self-closing-comp": [1],
    "react/void-dom-elements-no-children": [2],
    "react/jsx-closing-bracket-location":[1, {
      "nonEmpty": "after-props",
      "selfClosing": "after-props"
    }],
    "react/jsx-first-prop-new-line": [1, "never"],
    "react/jsx-no-bind": [1, {
      "ignoreRefs": true,
      "allowArrowFunctions": false,
      "allowBind": false
    }],
    "react/jsx-no-target-blank":[1],
    "react/jsx-tag-spacing":[1],
    "react/prop-types": [0],
    "react/no-find-dom-node": [0]
  }
};
