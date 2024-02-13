"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
  env: {
    node: true,
  },
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [".*"],
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message:
              "import React from'react'는 react 17부터 더 이상 필요하지 않습니다. 필요한 것만 react로부터 import해서 사용해 주세요",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
