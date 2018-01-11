/*
 * Author: mx
 * Date: 2017/11/7
 * 人物形象卡，第一版不添加光效
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mx;
(function (mx) {
    var XxkUI = (function (_super) {
        __extends(XxkUI, _super);
        function XxkUI() {
            var _this = _super.call(this) || this;
            var avatar = new eui.Image();
            avatar.name = "avatar";
            avatar.y = -200;
            _this.addChild(avatar);
            _this.width = 309;
            _this.height = 965;
            return _this;
        }
        XxkUI.prototype.set_avatar = function (id) {
            if (!id) {
                var proxy = mx.ApplicationFacade.getInstance().retrieveProxy(mx.ClothesProxy.NAME);
                id = proxy.xxkid || 1;
            }
            var avatar = this.getChildByName("avatar");
            avatar.source = "xxk" + id + "_png";
            avatar.x = -446;
        };
        XxkUI.prototype.set_lh = function (id) {
            // let pproxy = <PalaceProxy><any> ApplicationFacade.getInstance().retrieveProxy(PalaceProxy.NAME);
            // let c_mn = pproxy.mn_d[id];
            if (id > 0) {
                var avatar = this.getChildByName("avatar");
                avatar.source = "zn" + id + "_png";
                avatar.horizontalCenter = 0;
                avatar.bottom = 0;
            }
            else {
                id = -id;
                var avatar = this.getChildByName("avatar");
                avatar.source = mx.Tools.get_mn_res(id, "lh");
                avatar.horizontalCenter = 0;
                avatar.bottom = 0;
            }
            this.scaleX = this.scaleY = 1;
            // let api = ApiTool.getAPINode(MX_APINAME.CLOTH, "id", id);
            // avatar.x = api.param || -446;
            // api = null;
        };
        XxkUI.prototype.set_scale = function (s) {
            this.scaleX = this.scaleY = s;
        };
        XxkUI.prototype.on_remove = function () {
            this.removeChildren();
        };
        return XxkUI;
    }(eui.Component));
    mx.XxkUI = XxkUI;
    __reflect(XxkUI.prototype, "mx.XxkUI");
})(mx || (mx = {}));
//# sourceMappingURL=XxkUI.js.map