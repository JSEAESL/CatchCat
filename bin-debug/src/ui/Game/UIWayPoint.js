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
var UIWayPoint = (function (_super) {
    __extends(UIWayPoint, _super);
    function UIWayPoint() {
        var _this = _super.call(this) || this;
        _this.skinName = "UIWayPoint_eui";
        return _this;
    }
    UIWayPoint.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pointClick, this);
    };
    UIWayPoint.prototype.pointClick = function (e) {
        GlobalDispatcher.Ins.dispatchEvent(new CommonEvent(UIWayPoint.POINT_CLICK, this.thisData));
    };
    UIWayPoint.prototype.upData = function (data) {
        this.thisData = data;
        this.currentState = data.state;
        this.tt.text = "x:" + this.thisData.i + "   y:" + this.thisData.j;
    };
    UIWayPoint.POINT_CLICK = "UIWayPoint_POINT_CLICK";
    return UIWayPoint;
}(Widget));
__reflect(UIWayPoint.prototype, "UIWayPoint");
var WayPointItemRenderer = (function (_super) {
    __extends(WayPointItemRenderer, _super);
    function WayPointItemRenderer() {
        var _this = _super.call(this) || this;
        _this.skinName = "UIWayPoint_eui";
        return _this;
    }
    WayPointItemRenderer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pointClick, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    WayPointItemRenderer.prototype.pointClick = function (e) {
        GlobalDispatcher.Ins.dispatchEvent(new CommonEvent(UIWayPoint.POINT_CLICK, this.mData));
    };
    WayPointItemRenderer.prototype.onRemove = function (e) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.pointClick, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    WayPointItemRenderer.prototype.dataChanged = function () {
        if (this.data) {
            this.mData = this.data;
            this.currentState = this.mData.state;
            this.tt.text = "x:" + this.mData.i + "   y:" + this.mData.j;
        }
    };
    return WayPointItemRenderer;
}(eui.ItemRenderer));
__reflect(WayPointItemRenderer.prototype, "WayPointItemRenderer");
//# sourceMappingURL=UIWayPoint.js.map