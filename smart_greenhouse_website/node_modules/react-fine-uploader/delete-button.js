'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteButton = function (_Component) {
    _inherits(DeleteButton, _Component);

    function DeleteButton(props) {
        _classCallCheck(this, DeleteButton);

        var _this = _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).call(this, props));

        _this.state = {
            deletable: false,
            deleting: false
        };

        var statusEnum = props.uploader.qq.status;

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                if (!isDeletable(newStatus, statusEnum) && newStatus !== statusEnum.DELETING && _this.state.deletable) {
                    !_this._unmounted && _this.setState({
                        deletable: false,
                        deleting: false
                    });
                    _this._unregisterStatusChangeHandler();
                } else if (isDeletable(newStatus, statusEnum) && !_this.state.deletable) {
                    _this.setState({
                        deletable: true,
                        deleting: false
                    });
                } else if (newStatus === statusEnum.DELETING && !_this.state.deleting) {
                    _this.setState({ deleting: true });
                }
            }
        };

        _this._onClick = function () {
            return _this.props.uploader.methods.deleteFile(_this.props.id);
        };
        return _this;
    }

    _createClass(DeleteButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterStatusChangeHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                onlyRenderIfDeletable = _props.onlyRenderIfDeletable,
                id = _props.id,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['children', 'onlyRenderIfDeletable', 'id', 'uploader']); // eslint-disable-line no-unused-vars


            var content = children || 'Delete';

            if (this.state.deletable || this.state.deleting || !onlyRenderIfDeletable) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': 'delete',
                        className: 'react-fine-uploader-delete-button ' + (this.props.className || ''),
                        disabled: !this.state.deletable || this.state.deleting,
                        onClick: this.state.deletable && !this.state.deleting ? this._onClick : null,
                        type: 'button'
                    }, elementProps),
                    content
                );
            }

            return null;
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return DeleteButton;
}(_react.Component);

DeleteButton.propTypes = {
    children: _propTypes2.default.node,
    id: _propTypes2.default.number.isRequired,
    onlyRenderIfDeletable: _propTypes2.default.bool,
    uploader: _propTypes2.default.object.isRequired
};
DeleteButton.defaultProps = {
    onlyRenderIfDeletable: true
};


var isDeletable = function isDeletable(statusToCheck, statusEnum) {
    return [statusEnum.DELETE_FAILED, statusEnum.UPLOAD_SUCCESSFUL].indexOf(statusToCheck) >= 0;
};

exports.default = DeleteButton;