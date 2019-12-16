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

var Filesize = function (_Component) {
    _inherits(Filesize, _Component);

    function Filesize(props) {
        _classCallCheck(this, Filesize);

        var _this = _possibleConstructorReturn(this, (Filesize.__proto__ || Object.getPrototypeOf(Filesize)).call(this, props));

        _this.state = {
            size: props.uploader.methods.getSize(props.id)

            // Don't bother to check size at upload time if scaling feature is not enabled.
        };var scalingOption = _this.props.uploader.options.scaling;
        if (scalingOption && scalingOption.sizes.length) {
            // If this is a scaled image, the size won't be known until upload time.
            _this._onUploadHandler = function (id) {
                if (id === _this.props.id) {
                    _this.setState({
                        size: _this.props.uploader.methods.getSize(id)
                    });
                }
            };
        }
        return _this;
    }

    _createClass(Filesize, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._onUploadHandler && this.props.uploader.on('upload', this._onUploadHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._onUploadHandler && this.props.uploader.off('upload', this._onUploadHandler);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.size !== this.state.size || !areUnitsEqual(nextProps.units, this.props.units);
        }
    }, {
        key: 'render',
        value: function render() {
            var size = this.state.size;

            if (size == null || size < 0) {
                return _react2.default.createElement('span', { className: 'react-fine-uploader-filesize ' + (this.props.className || '') });
            }

            var units = this.props.units;

            var _formatSizeAndUnits = formatSizeAndUnits({ size: size, units: units }),
                formattedSize = _formatSizeAndUnits.formattedSize,
                formattedUnits = _formatSizeAndUnits.formattedUnits;

            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-filesize ' + (this.props.className || '') },
                _react2.default.createElement(
                    'span',
                    { className: 'react-fine-uploader-filesize-value' },
                    formattedSize
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'react-fine-uploader-filesize-separator' },
                    ' '
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'react-fine-uploader-filesize-unit' },
                    formattedUnits
                )
            );
        }
    }]);

    return Filesize;
}(_react.Component);

Filesize.propTypes = {
    id: _propTypes2.default.number.isRequired,
    units: _propTypes2.default.shape({
        byte: _propTypes2.default.string,
        kilobyte: _propTypes2.default.string,
        megabyte: _propTypes2.default.string,
        gigabyte: _propTypes2.default.string,
        terabyte: _propTypes2.default.string
    }),
    uploader: _propTypes2.default.object.isRequired
};
Filesize.defaultProps = {
    units: {
        byte: 'B',
        kilobyte: 'KB',
        megabyte: 'MB',
        gigabyte: 'GB',
        terabyte: 'TB'
    }
};


var formatSizeAndUnits = function formatSizeAndUnits(_ref) {
    var size = _ref.size,
        units = _ref.units;

    var formattedSize = void 0,
        formattedUnits = void 0;

    if (size < 1e+3) {
        formattedSize = size;
        formattedUnits = units.byte;
    } else if (size >= 1e+3 && size < 1e+6) {
        formattedSize = (size / 1e+3).toFixed(2);
        formattedUnits = units.kilobyte;
    } else if (size >= 1e+6 && size < 1e+9) {
        formattedSize = (size / 1e+6).toFixed(2);
        formattedUnits = units.megabyte;
    } else if (size >= 1e+9 && size < 1e+12) {
        formattedSize = (size / 1e+9).toFixed(2);
        formattedUnits = units.gigabyte;
    } else {
        formattedSize = (size / 1e+12).toFixed(2);
        formattedUnits = units.terabyte;
    }

    return { formattedSize: formattedSize, formattedUnits: formattedUnits };
};

var areUnitsEqual = function areUnitsEqual(units1, units2) {
    var keys1 = Object.keys(units1);

    if (keys1.length === Object.keys(units2).length) {
        return keys1.every(function (key1) {
            return units1[key1] === units2[key1];
        });
    }

    return false;
};

exports.default = Filesize;