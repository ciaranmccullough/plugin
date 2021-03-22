"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onPreBootstrap = void 0;

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var onPreBootstrap = function onPreBootstrap(_args, pluginOptions) {
  // Check for deprecated option.
  if (pluginOptions.hasOwnProperty('path')) {
    _reporter.default.error("gatsby-plugin-react-i18next: \uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5 \"path\" option is deprecated and won't be working as it was before. Please update setting on your gastby-config.js.\n\nSee detail: https://github.com/microapps/gatsby-plugin-react-i18next\n\n");
  }
};

exports.onPreBootstrap = onPreBootstrap;