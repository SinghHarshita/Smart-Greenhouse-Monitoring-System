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

var _styleableElement = require('./styleable-element');

var _styleableElement2 = _interopRequireDefault(_styleableElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileInput = function (_Component) {
    _inherits(FileInput, _Component);

    function FileInput() {
        _classCallCheck(this, FileInput);

        var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this));

        _this.state = { key: newKey() };
        _this._onFilesSelected = onFilesSelected.bind(_this);
        return _this;
    }

    _createClass(FileInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                uploader = _props.uploader,
                elementProps = _objectWithoutProperties(_props, ['text', 'uploader']); // eslint-disable-line no-unused-vars

            return _react2.default.createElement(
                _styleableElement2.default,
                _extends({}, elementProps, {
                    key: this.state.key,
                    onChange: this._onFilesSelected
                }),
                this.props.children ? this.props.children : _react2.default.createElement(
                    'span',
                    null,
                    elementProps.multiple ? text.selectFiles : text.selectFile
                )
            );
        }
    }, {
        key: '_resetInput',
        value: function _resetInput() {
            this.setState({ key: newKey() });
        }
    }]);

    return FileInput;
}(_react.Component);

FileInput.propTypes = {
    text: _propTypes2.default.shape({
        selectFile: _propTypes2.default.string,
        selectFiles: _propTypes2.default.string
    }),
    uploader: _propTypes2.default.object.isRequired
};
FileInput.defaultProps = {
    text: {
        selectFile: 'Select a File',
        selectFiles: 'Select Files'
    }
};


var onFilesSelected = function onFilesSelected(onChangeEvent) {
    this.props.uploader.methods.addFiles(onChangeEvent.target);
    this._resetInput();
};

var newKey = function newKey() {
    return Date.now();
};

exports.default = FileInput;