(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes);
        global.ContextMenuItem = mod.exports;
    }
})(this, function (exports, _react, _propTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var ContextMenuItem = function ContextMenuItem(_ref) {
        var label = _ref.label,
            onClick = _ref.onClick,
            active = _ref.active;

        if (label === 'separator') {
            return _react2.default.createElement('div', { className: 'contextMenu--separator' });
        }
        return _react2.default.createElement(
            'div',
            { className: 'contextMenu--option', onClick: option.onClick, disabled: !active },
            label
        );
    };

    ContextMenuItem.propTypes = {
        label: _propTypes2.default.string.isRequired,
        onClick: _propTypes2.default.func,
        active: _propTypes2.default.boolean
    };

    ContextMenuItem.defaultProps = {
        onClick: function onClick() {},
        active: true
    };

    exports.default = ContextMenuItemList;
});