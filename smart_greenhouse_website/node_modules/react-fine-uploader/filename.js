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

var Filename = function (_Component) {
    _inherits(Filename, _Component);

    function Filename(props) {
        _classCallCheck(this, Filename);

        var _this = _possibleConstructorReturn(this, (Filename.__proto__ || Object.getPrototypeOf(Filename)).call(this, props));

        _this.state = {
            filename: props.uploader.methods.getName(props.id)
        };

        _this._interceptSetName();
        return _this;
    }

    _createClass(Filename, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.filename !== this.state.filename;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-filename ' + (this.props.className || '') },
                this.state.filename
            );
        }
    }, {
        key: '_interceptSetName',
        value: function _interceptSetName() {
            var _this2 = this;

            var oldSetName = this.props.uploader.methods.setName;

            this.props.uploader.methods.setName = function (id, newName) {
                oldSetName.call(_this2.props.uploader.methods, id, newName);

                if (id === _this2.props.id) {
                    _this2.setState({
                        filename: newName
                    });
                }
            };
        }
    }]);

    return Filename;
}(_react.Component);

Filename.propTypes = {
    id: _propTypes2.default.number.isRequired,
    uploader: _propTypes2.default.object.isRequired
};
exports.default = Filename;