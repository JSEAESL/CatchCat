/**
 *   @author cy
 *   @date 2017.12.7
 *   @desc 充值render
 **/
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
    var WXRechargeRender = (function (_super) {
        __extends(WXRechargeRender, _super);
        function WXRechargeRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WXRechargeRender.prototype.dataChanged = function () {
            var key = this.data;
            if (!key || !this.skin) {
                return;
            }
            var api = mx.ApiTool.getAPINode(mx.MX_APINAME.RECHARGE2, "id", key);
            this.num_t.text = "X" + api.amethyst;
            this.price_t.text = "" + api.RMB;
            this.tp_p.source = "wxricon" + key + "_png";
        };
        return WXRechargeRender;
    }(mx.BasicRender));
    mx.WXRechargeRender = WXRechargeRender;
    __reflect(WXRechargeRender.prototype, "mx.WXRechargeRender");
})(mx || (mx = {}));
//# sourceMappingURL=WXRechargeRender.js.map