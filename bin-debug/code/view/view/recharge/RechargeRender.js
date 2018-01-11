/**
 *   @author mx
 *   @date 2014.12.28
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
    var RechargeRender = (function (_super) {
        __extends(RechargeRender, _super);
        function RechargeRender() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RechargeRender.prototype.dataChanged = function () {
            var key = this.data;
            if (!key || !this.skin) {
                return;
            }
            var data = mx.ApiTool.getAPINode(mx.MX_APINAME.RECHARGE, 'id', key);
            var facade = mx.ApplicationFacade.getInstance();
            var gproxy = (facade.retrieveProxy(mx.GameProxy.NAME));
            //默认状态
            this.jg_g.visible = true;
            var jg_g_lt = this.jg_g.layout;
            jg_g_lt.gap = 1;
            this.zs_g.visible = false;
            this.zs_g.width = 0;
            this.cost_t.text = Number(data.money) * 10 + "";
            var zgarr = ["gdzglbbqian_png", "czglbao_png", "yzglbao_png"];
            this.di_p.visible = true;
            switch (key) {
                case 1://月卡
                    this.icon_p.source = "yka_png";
                    //this.jz_p.source = "jz" + key + "_png";
                    if (Number(gproxy.recharge_yueka) < 331) {
                        this.type_p.source = "czsykbqian_png";
                        jg_g_lt.gap = 6;
                        // this.zs_p.source = "czykwzi_png";
                        this.zs_g.visible = true;
                        this.zs_g.width = NaN;
                    }
                    else {
                        this.type_p.source = "";
                        jg_g_lt.gap = 0;
                    }
                    break;
                case 9: //礼包
                case 11: //礼包
                case 10://礼包
                    this.icon_p.source = "lhe_png";
                    this.type_p.source = zgarr[key - 9];
                    this.jg_g.visible = false;
                    this.di_p.visible = false;
                    break;
                default:
                    //this.jz_p.source = "jz" + key + "_png";
                    this.jz_t.text = data.num + "";
                    this.icon_p.source = "Ricon" + key + "_png";
                    var cm = data.money;
                    var info = gproxy.recharge_info;
                    if (info[cm]) {
                        //this.zs_p.source = "zs" + key + "_png";
                        this.zs_t.text = data.extra + "";
                        this.zs_g.visible = true;
                        this.zs_g.width = NaN;
                        this.type_p.source = "scsbei_png";
                        if (cm >= 998) {
                            jg_g_lt.gap = 1;
                        }
                        else if (cm >= 98) {
                            jg_g_lt.gap = 3;
                        }
                        else if (cm >= 10) {
                            jg_g_lt.gap = 11;
                        }
                        else {
                            jg_g_lt.gap = 13;
                        }
                    }
                    else {
                        this.type_p.source = "";
                    }
                    break;
            }
        };
        return RechargeRender;
    }(mx.BasicRender));
    mx.RechargeRender = RechargeRender;
    __reflect(RechargeRender.prototype, "mx.RechargeRender");
})(mx || (mx = {}));
//# sourceMappingURL=RechargeRender.js.map