'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _defaultBtnCount = 4;
var _inlineBlock = {
  display: 'inline-block'
};

var QtyPicker = function (_React$Component) {
  _inherits(QtyPicker, _React$Component);

  function QtyPicker() {
    _classCallCheck(this, QtyPicker);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(QtyPicker).apply(this, arguments));
  }

  _createClass(QtyPicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var btnCount = !isNaN(this.props.btnCount) ? this.props.btnCount : _defaultBtnCount,
          buttons = new Array(Math.min(btnCount, _defaultBtnCount));

      for (var i = 0; i < buttons.length; i++) {
        buttons[i] = i + 1;
      }

      buttons = buttons.map(function (b, i) {
        return _react2.default.createElement(
          'button',
          {
            className: 'btn btn-secondary' + (b === _this2.props.value ? ' btn-selected' : ''),
            key: b,
            type: 'button',
            onClick: function onClick() {
              return _this2.props.onChange(Number(b));
            } },
          b
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'qty-picker' },
        _react2.default.createElement(
          'div',
          { style: _inlineBlock, className: 'btn-group qty-picker-buttons', role: 'group' },
          buttons
        ),
        _react2.default.createElement('input', {
          disabled: !btnCount,
          type: 'text',
          className: 'form-control qty-picker-input',
          style: _inlineBlock,
          onChange: function onChange(event) {
            if (!isNaN(event.target.value)) {
              _this2.props.onChange(Number(event.target.value));
            }
          },
          value: this.props.value })
      );
    }
  }]);

  return QtyPicker;
}(_react2.default.Component);

QtyPicker.propTypes = {
  value: _react2.default.PropTypes.number.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = QtyPicker;
