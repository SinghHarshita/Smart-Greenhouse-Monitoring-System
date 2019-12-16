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

var PauseResumeButton = function (_Component) {
    _inherits(PauseResumeButton, _Component);

    function PauseResumeButton(props) {
        _classCallCheck(this, PauseResumeButton);

        var _this = _possibleConstructorReturn(this, (PauseResumeButton.__proto__ || Object.getPrototypeOf(PauseResumeButton)).call(this, props));

        _this.state = {
            atLeastOneChunkUploaded: false,
            pausable: false,
            resumable: false
        };

        var statusEnum = props.uploader.qq.status;

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                var pausable = newStatus === statusEnum.UPLOADING && _this.state.atLeastOneChunkUploaded;
                var resumable = newStatus === statusEnum.PAUSED;

                if (pausable !== _this.state.pausable) {
                    _this.setState({ pausable: pausable });
                }
                if (resumable !== _this.state.resumable) {
                    _this.setState({ resumable: resumable });
                }

                if (newStatus === statusEnum.DELETED || newStatus === statusEnum.CANCELED || newStatus === statusEnum.UPLOAD_SUCCESSFUL) {
                    _this._unregisterOnResumeHandler();
                    _this._unregisterOnStatusChangeHandler();
                    _this._unregisterOnUploadChunkSuccessHandler();
                }
            }
        };

        _this._onClick = function () {
            if (_this.state.pausable) {
                _this.props.uploader.methods.pauseUpload(_this.props.id);
            } else if (_this.state.resumable) {
                _this.props.uploader.methods.continueUpload(_this.props.id);
            }
        };

        _this._onResume = function (id) {
            if (id === _this.props.id && !_this._unmounted && !_this.state.atLeastOneChunkUploaded) {

                _this.setState({
                    atLeastOneChunkUploaded: true,
                    pausable: true,
                    resumable: false
                });
            }
        };

        _this._onUploadChunkSuccess = function (id) {
            if (id === _this.props.id && !_this._unmounted && !_this.state.atLeastOneChunkUploaded) {

                _this.setState({
                    atLeastOneChunkUploaded: true,
                    pausable: true,
                    resumable: false
                });
            }
        };
        return _this;
    }

    _createClass(PauseResumeButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('resume', this._onResume);
            this.props.uploader.on('statusChange', this._onStatusChange);
            this.props.uploader.on('uploadChunkSuccess', this._onUploadChunkSuccess);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._unmounted = true;
            this._unregisterOnResumeHandler();
            this._unregisterOnStatusChangeHandler();
            this._unregisterOnUploadChunkSuccessHandler();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                onlyRenderIfEnabled = _props.onlyRenderIfEnabled,
                id = _props.id,
                pauseChildren = _props.pauseChildren,
                resumeChildren = _props.resumeChildren,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['onlyRenderIfEnabled', 'id', 'pauseChildren', 'resumeChildren', 'uploader']); // eslint-disable-line no-unused-vars

            if (this.state.pausable || this.state.resumable || !onlyRenderIfEnabled) {
                return _react2.default.createElement(
                    'button',
                    _extends({ 'aria-label': getButtonLabel(this.state),
                        className: 'react-fine-uploader-pause-resume-button ' + getButtonClassName(this.state) + ' ' + (this.props.className || ''),
                        disabled: !this.state.pausable && !this.state.resumable,
                        onClick: this._onClick,
                        type: 'button'
                    }, elementProps),
                    getButtonContent(this.state, this.props)
                );
            }

            return null;
        }
    }, {
        key: '_unregisterOnResumeHandler',
        value: function _unregisterOnResumeHandler() {
            this.props.uploader.off('resume', this._onResume);
        }
    }, {
        key: '_unregisterOnStatusChangeHandler',
        value: function _unregisterOnStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }, {
        key: '_unregisterOnUploadChunkSuccessHandler',
        value: function _unregisterOnUploadChunkSuccessHandler() {
            this.props.uploader.off('uploadChunkSuccess', this._onUploadChunkSuccess);
        }
    }]);

    return PauseResumeButton;
}(_react.Component);

PauseResumeButton.propTypes = {
    id: _propTypes2.default.number.isRequired,
    onlyRenderIfEnabled: _propTypes2.default.bool,
    pauseChildren: _propTypes2.default.node,
    resumeChildren: _propTypes2.default.node,
    uploader: _propTypes2.default.object.isRequired
};
PauseResumeButton.defaultProps = {
    onlyRenderIfEnabled: true
};


var getButtonClassName = function getButtonClassName(state) {
    var resumable = state.resumable;


    return resumable ? 'react-fine-uploader-resume-button' : 'react-fine-uploader-pause-button';
};

var getButtonContent = function getButtonContent(state, props) {
    var resumable = state.resumable;
    var pauseChildren = props.pauseChildren,
        resumeChildren = props.resumeChildren;


    if (resumable) {
        return resumeChildren || 'Resume';
    }

    return pauseChildren || 'Pause';
};

var getButtonLabel = function getButtonLabel(state) {
    var resumable = state.resumable;


    return resumable ? 'resume' : 'pause';
};

exports.default = PauseResumeButton;