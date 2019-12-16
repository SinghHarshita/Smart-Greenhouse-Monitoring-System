'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Placeholder = function Placeholder(_ref) {
    var className = _ref.className,
        image = _ref.image,
        size = _ref.size,
        status = _ref.status;

    var style = {
        display: 'inline-block',
        maxHeight: size,
        maxWidth: size
    };

    return _react2.default.createElement(
        'div',
        { className: 'react-fine-uploader-thumbnail-placeholder react-fine-uploader-thumbnail-' + status + ' ' + (className || ''),
            style: style
        },
        image
    );
};

Placeholder.propTypes = {
    image: _propTypes2.default.node.isRequired,
    size: _propTypes2.default.number.isRequired,
    status: _propTypes2.default.string.isRequired
};

exports.default = Placeholder;