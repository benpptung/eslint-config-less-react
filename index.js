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
    "jsx-quotes": [2, "prefer-single"],
    "react/jsx-uses-react": [2], // this is to fix `no-unused-vars` @ React
    "react/jsx-uses-vars": [2], // this is to fix `no-unused-vars` @ React
    "react/display-name": [0],
    "react/jsx-key": [0],

    // experimental rules
    "react/jsx-boolean-value": [ 2, "always"],
    "react/jsx-indent": [ 1, 2],
    "react/jsx-indent-props": [ 1 ],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-no-undef": [2]
  }
};
