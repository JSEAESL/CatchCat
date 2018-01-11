var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GlobalDispatcher = (function (_super) {
    __extends(GlobalDispatcher, _super);
    function GlobalDispatcher() {
        return _super.call(this) || this;
    }
    Object.defineProperty(GlobalDispatcher, "Ins", {
        get: function () {
            if (null == this._ins) {
                this._ins = new GlobalDispatcher();
            }
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    return GlobalDispatcher;
}(egret.EventDispatcher));
__reflect(GlobalDispatcher.prototype, "GlobalDispatcher");
//# sourceMappingURL=GlobalDispatcher.js.map