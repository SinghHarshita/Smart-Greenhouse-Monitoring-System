'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var containerStyle = {
    display: 'inline-block',
    position: 'relative'
};

var inputStyle = {
    bottom: 0,
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%'
};

var StyleableFileInput = function StyleableFileInput(_ref) {
    var children = _ref.children,
        className = _ref.className,
        onChange = _ref.onChange,
        params = _objectWithoutProperties(_ref, ['children', 'className', 'onChange']);

    return _react2.default.createElement(
        'div',
        { className: 'react-fine-uploader-file-input-container ' + (className || ''),
            style: containerStyle
        },
        children,
        _react2.default.createElement('input', _extends({}, params, {
            className: 'react-fine-uploader-file-input',
            onChange: onChange,
            style: inputStyle,
            type: 'file'
        }))
    );
};

exports.default = StyleableFileInput;