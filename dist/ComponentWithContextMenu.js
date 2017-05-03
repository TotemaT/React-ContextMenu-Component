(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types', './ContextMenuItem'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('./ContextMenuItem'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.ContextMenuItem);
        global.ComponentWithContextMenu = mod.exports;
    }
})(this, function (exports, _react, _propTypes, _ContextMenuItem) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _ContextMenuItem2 = _interopRequireDefault(_ContextMenuItem);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ComponentWithContextMenu = function (_Component) {
        _inherits(ComponentWithContextMenu, _Component);

        function ComponentWithContextMenu() {
            _classCallCheck(this, ComponentWithContextMenu);

            var _this = _possibleConstructorReturn(this, (ComponentWithContextMenu.__proto__ || Object.getPrototypeOf(ComponentWithContextMenu)).call(this));

            _this.handleContextMenu = _this.handleContextMenu.bind(_this);
            _this.handleGlobalContextMenu = _this.handleGlobalContextMenu.bind(_this);
            _this.handleClick = _this.handleClick.bind(_this);
            _this.state = {
                isMenuVisible: false
            };
            return _this;
        }

        _createClass(ComponentWithContextMenu, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                document.addEventListener('contextmenu', this.handleGlobalContextMenu);
                document.addEventListener('click', this.handleClick);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                document.removeEventListener('contextmenu', this.handleGlobalContextMenu);
                document.removeEventListener('click', this.handleClick);
            }
        }, {
            key: 'handleGlobalContextMenu',
            value: function handleGlobalContextMenu(event) {
                var isMenuVisible = this.state.isMenuVisible;

                var wasOutside = !(event.target.id === this.props.id);

                if (wasOutside) {
                    if (isMenuVisible) {
                        this.setState({ isMenuVisible: false });
                    }
                } else {
                    this.handleContextMenu(event);
                }
            }
        }, {
            key: 'handleContextMenu',
            value: function handleContextMenu(event) {
                event.preventDefault();
                this.setState({ isMenuVisible: true });

                var clickX = event.clientX;
                var clickY = event.clientY;
                var screenW = window.innerWidth;
                var screenH = window.innerHeight;
                var rootW = this.contextMenuRoot.offsetWidth;
                var rootH = this.contextMenuRoot.offsetHeight;

                var right = screenW - clickX > rootW;
                var left = !right;
                var top = screenH - clickY > rootH;
                var bottom = !top;

                if (right) {
                    this.contextMenuRoot.style.left = clickX + 5 + 'px';
                }

                if (left) {
                    this.contextMenuRoot.style.left = clickX - rootW - 5 + 'px';
                }

                if (top) {
                    this.contextMenuRoot.style.top = clickY + 5 + 'px';
                }

                if (bottom) {
                    this.contextMenuRoot.style.top = clickY - rootH - 5 + 'px';
                }
            }
        }, {
            key: 'handleClick',
            value: function handleClick(event) {
                var isMenuVisible = this.state.isMenuVisible;

                var wasOutside = !(event.target.contains === this.contextMenuRoot);

                if (wasOutside && isMenuVisible) {
                    this.setState({ isMenuVisible: false });
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                var _props = this.props,
                    options = _props.options,
                    id = _props.id,
                    onClick = _props.onClick,
                    children = _props.children,
                    className = _props.className;

                if (!options) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        children
                    );
                }

                return _react2.default.createElement(
                    'div',
                    { id: id, onClick: onClick, className: className },
                    children,
                    _react2.default.createElement(
                        'div',
                        { hidden: !this.state.isMenuVisible, ref: function ref(_ref) {
                                _this2.contextMenuRoot = _ref;
                            }, className: 'contextMenu' },
                        '// TODO: : make it a separate component',
                        options.map(function (option, idx) {
                            _react2.default.createElement(_ContextMenuItem2.default, option);
                        })
                    )
                );
            }
        }]);

        return ComponentWithContextMenu;
    }(_react.Component);

    exports.default = ComponentWithContextMenu;


    ComponentWithContextMenu.propTypes = {
        id: _propTypes2.default.string.isRequired,
        options: _propTypes2.default.arrayOf(_propTypes2.default.shape(label, onClick, active)).isRequired,
        onClick: _propTypes2.default.func,
        className: _propTypes2.default.string
    };

    ComponentWithContextMenu.defaultProps = {
        onClick: function onClick() {},
        className: ''
    };
});