'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/daly/kickstart/components/Layout.js';

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBSkEsSUFBSUEsZUFBZSwyQ0FBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQy9CLFNBQU8sZ0JBQU1DLGFBQU4sNkJBRUw7QUFDRUMsY0FBVTtBQUNSQyxnQkFBVUosWUFERjtBQUVSSyxrQkFBWTtBQUZKO0FBRFosR0FGSyxFQVFMLGdCQUFNSCxhQUFOLGlCQUVFO0FBQ0VDLGNBQVU7QUFDUkMsZ0JBQVVKLFlBREY7QUFFUkssa0JBQVk7QUFGSjtBQURaLEdBRkYsRUFRRSxnQkFBTUgsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUMxQkksU0FBSyxZQURxQjtBQUUxQkMsVUFBTSxxRUFGb0IsRUFFbURKLFVBQVU7QUFDckZDLGdCQUFVSixZQUQyRTtBQUVyRkssa0JBQVk7QUFGeUU7QUFGN0QsR0FBNUIsQ0FSRixDQVJLLEVBd0JMLGdCQUFNSCxhQUFOLG1CQUE0QjtBQUMxQkMsY0FBVTtBQUNSQyxnQkFBVUosWUFERjtBQUVSSyxrQkFBWTtBQUZKO0FBRGdCLEdBQTVCLENBeEJLLEVBOEJMSixNQUFNTyxRQTlCRCxDQUFQO0FBZ0NELEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnL2hvbWUvZGFseS9raWNrc3RhcnQvY29tcG9uZW50cy9MYXlvdXQuanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9kaXN0L2xpYi9oZWFkLmpzJztcbmltcG9ydCB7IERpdmlkZXIsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBDb250YWluZXIsXG4gICAge1xuICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgbGluZU51bWJlcjogOFxuICAgICAgfVxuICAgIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIEhlYWQsXG4gICAgICB7XG4gICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiA5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaW5rJywge1xuICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgaHJlZjogJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4zL3NlbWFudGljLm1pbi5jc3MnLCBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgICBfX3NvdXJjZToge1xuICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyOiAxNVxuICAgICAgfVxuICAgIH0pLFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG59KTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBSkEsSUFBSUEsZUFBZSwyQ0FBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQy9CLFNBQU8sZ0JBQU1DLGFBQU4sNkJBRUw7QUFDRUMsY0FBVTtBQUNSQyxnQkFBVUosWUFERjtBQUVSSyxrQkFBWTtBQUZKO0FBRFosR0FGSyxFQVFMLGdCQUFNSCxhQUFOLGlCQUVFO0FBQ0VDLGNBQVU7QUFDUkMsZ0JBQVVKLFlBREY7QUFFUkssa0JBQVk7QUFGSjtBQURaLEdBRkYsRUFRRSxnQkFBTUgsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUMxQkksU0FBSyxZQURxQjtBQUUxQkMsVUFBTSxxRUFGb0IsRUFFbURKLFVBQVU7QUFDckZDLGdCQUFVSixZQUQyRTtBQUVyRkssa0JBQVk7QUFGeUU7QUFGN0QsR0FBNUIsQ0FSRixDQVJLLEVBd0JMLGdCQUFNSCxhQUFOLG1CQUE0QjtBQUMxQkMsY0FBVTtBQUNSQyxnQkFBVUosWUFERjtBQUVSSyxrQkFBWTtBQUZKO0FBRGdCLEdBQTVCLENBeEJLLEVBOEJMSixNQUFNTyxRQTlCRCxDQUFQO0FBZ0NELEMiLCJmaWxlIjoidW5rbm93biJ9