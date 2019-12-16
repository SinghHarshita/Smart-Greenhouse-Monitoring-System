'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Status = function (_Component) {
    _inherits(Status, _Component);

    function Status(props) {
        _classCallCheck(this, Status);

        var _this = _possibleConstructorReturn(this, (Status.__proto__ || Object.getPrototypeOf(Status)).call(this, props));

        _this.state = {
            status: '',
            text: (0, _objectAssign2.default)({}, Status.defaultProps.text, props.text || {})
        };

        _this._onStatusChange = function (id, oldStatus, newStatus) {
            if (id === _this.props.id && !_this._unmounted) {
                var newStatusToDisplay = getStatusToDisplay({
                    displayMap: _this.state.text,
                    status: newStatus
                });

                newStatusToDisplay && _this.setState({ status: newStatusToDisplay });
            }
        };
        return _this;
    }

    _createClass(Status, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.uploader.on('statusChange', this._onStatusChange);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.text) {
                this.setState({
                    text: (0, _objectAssign2.default)({}, this.state.text, nextProps.text)
                });
            }
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
            return _react2.default.createElement(
                'span',
                { className: 'react-fine-uploader-status ' + this.props.className },
                this.state.status
            );
        }
    }, {
        key: '_unregisterStatusChangeHandler',
        value: function _unregisterStatusChangeHandler() {
            this.props.uploader.off('statusChange', this._onStatusChange);
        }
    }]);

    return Status;
}(_react.Component);

Status.propTypes = {
    id: _propTypes2.default.number.isRequired,
    className: _propTypes2.default.string,
    text: _propTypes2.default.shape({
        canceled: _propTypes2.default.string,
        deleted: _propTypes2.default.string,
        deleting: _propTypes2.default.string,
        paused: _propTypes2.default.string,
        queued: _propTypes2.default.string,
        retrying_upload: _propTypes2.default.string,
        submitting: _propTypes2.default.string,
        uploading: _propTypes2.default.string,
        upload_failed: _propTypes2.default.string,
        upload_successful: _propTypes2.default.string
    }),
    uploader: _propTypes2.default.object.isRequired
};
Status.defaultProps = {
    className: '',
    text: {
        canceled: 'Canceled',
        deleted: 'Deleted',
        deleting: 'Deleting...',
        paused: 'Paused',
        queued: 'Queued',
        retrying_upload: 'Retrying...',
        submitting: 'Submitting...',
        uploading: 'Uploading...',
        upload_failed: 'Failed',
        upload_successful: 'Completed'
    }
};


var getStatusToDisplay = function getStatusToDisplay(_ref) {
    var displayMap = _ref.displayMap,
        status = _ref.status;

    var key = void 0;

    if (status.indexOf(' ') > 0) {
        var statusParts = status.split(' ');

        key = statusParts[0] + '_' + statusParts[1];
    } else {
        key = status;
    }

    return displayMap[key];
};

exports.default = Status;