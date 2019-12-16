'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Component) {
    _inherits(ProgressBar, _Component);

    function ProgressBar(props) {
        _classCallCheck(this, ProgressBar);

        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

        _this.state = {
            bytesUploaded: null,
            hidden: props.hideBeforeStart,
            totalSize: null
        };

        _this._createEventHandlers();
        return _this;
    }

    _createClass(ProgressBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this._isTotalProgress) {
                this.props.uploader.on('totalProgress', this._trackProgressEventHandler);
            } else {
                this.props.uploader.on('progress', this._trackProgressEventHandler);
            }

            this.props.uploader.on('statusChange', this._trackStatusEventHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterEventHandlers();
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this._isTotalProgress ? 'react-fine-uploader-total-progress-bar' : 'react-fine-uploader-file-progress-bar';
            var customContainerClassName = this.props.className ? this.props.className + '-container' : '';
            var percentWidth = this.state.bytesUploaded / this.state.totalSize * 100 || 0;

            return _react2.default.createElement(
                'div',
                { className: className + '-container ' + customContainerClassName,
                    hidden: this.state.hidden
                },
                _react2.default.createElement('div', { 'aria-valuemax': '100',
                    'aria-valuemin': '0',
                    'aria-valuenow': percentWidth,
                    className: className + ' ' + (this.props.className || ''),
                    role: 'progressbar',
                    style: { width: percentWidth + '%' }
                })
            );
        }
    }, {
        key: '_createEventHandlers',
        value: function _createEventHandlers() {
            var _this2 = this;

            if (this._isTotalProgress) {
                this._trackProgressEventHandler = function (bytesUploaded, totalSize) {
                    _this2.setState({ bytesUploaded: bytesUploaded, totalSize: totalSize });
                };
            } else {
                this._trackProgressEventHandler = function (id, name, bytesUploaded, totalSize) {
                    if (id === _this2.props.id) {
                        _this2.setState({ bytesUploaded: bytesUploaded, totalSize: totalSize });
                    }
                };
            }

            var statusEnum = this.props.uploader.qq.status;

            this._trackStatusEventHandler = function (id, oldStatus, newStatus) {
                if (!_this2._unmounted) {
                    if (_this2._isTotalProgress) {
                        if (!_this2.state.hidden && _this2.props.hideOnComplete && isUploadComplete(newStatus, statusEnum) && !_this2.props.uploader.methods.getInProgress()) {

                            _this2.setState({ hidden: true });
                        } else if (_this2.state.hidden && _this2.props.uploader.methods.getInProgress()) {
                            _this2.setState({ hidden: false });
                        }
                    } else if (id === _this2.props.id) {
                        if (_this2.state.hidden && newStatus === statusEnum.UPLOADING) {
                            _this2.setState({ hidden: false });
                        } else if (!_this2.state.hidden && _this2.props.hideOnComplete && isUploadComplete(newStatus, statusEnum)) {
                            _this2.setState({ hidden: true });
                        }
                    }
                }
            };
        }
    }, {
        key: '_unregisterEventHandlers',
        value: function _unregisterEventHandlers() {
            if (this._isTotalProgress) {
                this.props.uploader.off('totalProgress', this._trackProgressEventHandler);
            } else {
                this.props.uploader.off('progress', this._trackProgressEventHandler);
            }

            this.props.uploader.off('statusChange', this._trackStatusEventHandler);
        }
    }, {
        key: '_isTotalProgress',
        get: function get() {
            return this.props.id == null;
        }
    }]);

    return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
    id: _propTypes2.default.number,
    hideBeforeStart: _propTypes2.default.bool,
    hideOnComplete: _propTypes2.default.bool,
    uploader: _propTypes2.default.object.isRequired
};
ProgressBar.defaultProps = {
    hideBeforeStart: true,
    hideOnComplete: true
};


var isUploadComplete = function isUploadComplete(statusToCheck, statusEnum) {
    return statusToCheck === statusEnum.UPLOAD_FAILED || statusToCheck === statusEnum.UPLOAD_SUCCESSFUL || statusToCheck === statusEnum.CANCELED;
};

exports.default = ProgressBar;