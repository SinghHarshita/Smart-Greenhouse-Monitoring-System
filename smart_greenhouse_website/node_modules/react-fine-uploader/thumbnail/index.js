'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.waitingStatus = exports.notAvailableStatus = exports.defaultMaxSize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _placeholder = require('./placeholder');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _notAvailablePlaceholder = require('./not-available-placeholder');

var _notAvailablePlaceholder2 = _interopRequireDefault(_notAvailablePlaceholder);

var _waitingPlaceholder = require('./waiting-placeholder');

var _waitingPlaceholder2 = _interopRequireDefault(_waitingPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMaxSize = exports.defaultMaxSize = 120;
var notAvailableStatus = exports.notAvailableStatus = 'not-available';
var waitingStatus = exports.waitingStatus = 'waiting';

var Thumbnail = function (_Component) {
    _inherits(Thumbnail, _Component);

    function Thumbnail() {
        _classCallCheck(this, Thumbnail);

        var _this = _possibleConstructorReturn(this, (Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call(this));

        _this.state = {
            drawComplete: false
        };
        return _this;
    }

    _createClass(Thumbnail, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.uploader.methods.drawThumbnail(this.props.id, this._canvas, this.props.maxSize, this.props.fromServer, this.props.customResizer).then(function () {
                _this2.setState({
                    drawComplete: true,
                    success: true
                });
            }, function () {
                _this2.setState({
                    drawComplete: true,
                    success: false
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var customContainerClassName = this.props.className && this.props.className + '-container';

            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-thumbnail-container ' + (customContainerClassName || '') },
                _react2.default.createElement('canvas', { className: 'react-fine-uploader-thumbnail ' + (this.props.className || ''),
                    hidden: !this.state.drawComplete || this._failure,
                    ref: function ref(component) {
                        return _this3._canvas = component;
                    }
                }),
                this._maybePlaceholder
            );
        }
    }, {
        key: '_failure',
        get: function get() {
            return this.state.drawComplete && !this.state.success;
        }
    }, {
        key: '_maybePlaceholder',
        get: function get() {
            if (this._failure) {
                var notAvailableImage = _react2.default.createElement(_notAvailablePlaceholder2.default, { maxSize: this.props.maxSize });

                return _react2.default.createElement(_placeholder2.default, { className: 'react-fine-uploader-thumbnail ' + (this.props.className || ''),
                    image: this.props.notAvailablePlaceholder || notAvailableImage,
                    size: this.props.maxSize,
                    status: notAvailableStatus
                });
            } else if (!this.state.drawComplete) {
                var waitingImage = _react2.default.createElement(_waitingPlaceholder2.default, { maxSize: this.props.maxSize });

                return _react2.default.createElement(_placeholder2.default, { className: 'react-fine-uploader-thumbnail ' + (this.props.className || ''),
                    image: this.props.waitingPlaceholder || waitingImage,
                    size: this.props.maxSize,
                    status: waitingStatus
                });
            }

            return _react2.default.createElement('span', null);
        }
    }]);

    return Thumbnail;
}(_react.Component);

Thumbnail.propTypes = {
    customResizer: _propTypes2.default.func,
    fromServer: _propTypes2.default.bool,
    id: _propTypes2.default.number.isRequired,
    maxSize: _propTypes2.default.number,
    notAvailablePlaceholder: _propTypes2.default.element,
    uploader: _propTypes2.default.object.isRequired,
    waitingPlaceholder: _propTypes2.default.element
};
Thumbnail.defaultProps = {
    maxSize: defaultMaxSize
};
exports.default = Thumbnail;