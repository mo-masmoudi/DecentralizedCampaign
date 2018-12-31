'use strict';

Object.defineProperty(exports, "__esModule", {
                      value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
                      return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWdCLFVBQVVBLE9BQVYsRUFBbUI7QUFDYiw2QkFBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLG1CQUFTQyxTQUFwQixDQUF0QixFQUFzREwsT0FBdEQsQ0FBUDtBQUNyQixDIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2ViMyBmcm9tICcuL3dlYjMnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4vYnVpbGQvQ2FtcGFpZ24uanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgd2ViMy5ldGguQ29udHJhY3QoSlNPTi5wYXJzZShDYW1wYWlnbi5pbnRlcmZhY2UpLCBhZGRyZXNzKTtcbn0pOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWdCLFVBQVVBLE9BQVYsRUFBbUI7QUFDYiw2QkFBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLG1CQUFTQyxTQUFwQixDQUF0QixFQUFzREwsT0FBdEQsQ0FBUDtBQUNyQixDIiwiZmlsZSI6InVua25vd24ifQ==