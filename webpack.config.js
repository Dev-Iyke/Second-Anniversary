const path = require('path');


module.exports = {
  "output": {
    path: path.resolve(__dirname, 'dist'),
    "filename": "[name].pack.js"
  },
  "resolve": {
    "extensions": [
      ".js",
      ".json"
    ],
    "alias": {}
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "index": "./index"
  }
}