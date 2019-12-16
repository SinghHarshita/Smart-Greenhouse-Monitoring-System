'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dnd = require('fine-uploader/lib/dnd');

var _dnd2 = _interopRequireDefault(_dnd);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropzoneElement = function (_Component) {
    _inherits(DropzoneElement, _Component);

    function DropzoneElement() {
        _classCallCheck(this, DropzoneElement);

        return _possibleConstructorReturn(this, (DropzoneElement.__proto__ || Object.getPrototypeOf(DropzoneElement)).apply(this, arguments));
    }

    _createClass(DropzoneElement, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._registerDropzone();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._registerDropzone();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._qqDropzone && this._qqDropzone.dispose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['uploader']); // eslint-disable-line no-unused-vars

            return _react2.default.createElement(
                'div',
                _extends({}, getElementProps(this.props), {
                    className: 'fine-uploader-dropzone-container ' + (this.props.className || ''),
                    ref: 'dropZone'
                }),
                this.props.children
            );
        }
    }, {
        key: '_onDropError',
        value: function _onDropError(errorCode, errorData) {
            console.error(errorCode, errorData);

            this.props.onDropError && this.props.onDropError(errorCode, errorData);
        }
    }, {
        key: '_onProcessingDroppedFilesComplete',
        value: function _onProcessingDroppedFilesComplete(files) {
            this.props.uploader.methods.addFiles(files);

            if (this.props.onProcessingDroppedFilesComplete) {
                this.props.onProcessingDroppedFilesComplete(files);
            }
        }
    }, {
        key: '_registerDropzone',
        value: function _registerDropzone() {
            this._qqDropzone && this._qqDropzone.dispose();

            var dropzoneEl = this.props.element || this.refs.dropZone;

            this._qqDropzone = new _dnd2.default.DragAndDrop({
                allowMultipleItems: !!this.props.multiple,
                callbacks: {
                    dropError: this._onDropError.bind(this),
                    processingDroppedFiles: this.props.onProcessingDroppedFiles || function () {},
                    processingDroppedFilesComplete: this._onProcessingDroppedFilesComplete.bind(this)
                },
                classes: {
                    dropActive: this.props.dropActiveClassName || ''
                },
                dropZoneElements: [dropzoneEl]
            });
        }
    }]);

    return DropzoneElement;
}(_react.Component);

DropzoneElement.propTypes = {
    children: _propTypes2.default.node,
    dropActiveClassName: _propTypes2.default.string,
    element: _propTypes2.default.object,
    multiple: _propTypes2.default.bool,
    onDropError: _propTypes2.default.func,
    onProcessingDroppedFiles: _propTypes2.default.func,
    onProcessingDroppedFilesComplete: _propTypes2.default.func,
    uploader: _propTypes2.default.object.isRequired
};
DropzoneElement.defaultProps = {
    dropActiveClassName: 'react-fine-uploader-dropzone-active'
};


var getElementProps = function getElementProps(actualProps) {
    var actualPropsCopy = _extends({}, actualProps);
    var expectedPropNames = Object.keys(DropzoneElement.propTypes);

    expectedPropNames.forEach(function (expectedPropName) {
        return delete actualPropsCopy[expectedPropName];
    });
    return actualPropsCopy;
};

exports.default = DropzoneElement;