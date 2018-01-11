var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 资源加载 * 支持单个或多个资源组加载
 */
var ResUtils = (function () {
    // var res:ResUtils = ResUtils.getInstance();
    //res.loadGroupQuiet("login");
    //res.loadGroup("login", ()=>{ console.log("login load complete")}, this);
    //res.loadGroupWithPro("login", 
    //    ()=>{console.log("login load complete")}, 
    //    (e:RES.ResourceEvent)=>{console.log("login progress",e.itemsLoaded,e.itemsTotal)},this);
    // res.loadGroupQuiet(["preload","login"]);
    /**
     * 构造函数
     */
    function ResUtils() {
        this.groups = {};
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    }
    ResUtils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ResUtils();
        }
        return this.instance;
    };
    /**
     * 加载资源组，静默加载(无回调函数)
     * @group 资源组(支持字符串和数组)
     */
    ResUtils.prototype.loadGroupQuiet = function (group) {
        var groupName = this.combGroupName(group);
        RES.loadGroup(groupName);
    };
    /**
     * 加载资源组，带加载完成回调
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @thisObject 回调执行对象
     * @priority 优先级
     */
    ResUtils.prototype.loadGroup = function (group, onComplete, thisObject, priority) {
        if (priority === void 0) { priority = 1; }
        var groupName = this.combGroupName(group);
        this.groups[groupName] = [onComplete, null, thisObject];
        RES.loadGroup(groupName);
    };
    /**
     * 加载资源组，带加载进度
     * @group 资源组(支持字符串和数组)
     * @onComplete 加载完成回调
     * @onProgress 加载进度回调
     * @thisObject 回调执行对象
     */
    ResUtils.prototype.loadGroupWithPro = function (group, onComplete, onProgress, thisObject) {
        var groupName = this.combGroupName(group);
        this.groups[groupName] = [onComplete, onProgress, thisObject];
        RES.loadGroup(groupName);
    };
    /**
     * 组合资源组名。单个资源组直接返回。多个资源组则重新命名。
     * @group 新资源组名
     */
    ResUtils.prototype.combGroupName = function (group) {
        if (typeof (group) == "string") {
            return group;
        }
        else {
            var len = group.length;
            var groupName = "";
            for (var i = 0; i < len; i++) {
                groupName += group[i];
            }
            RES.createGroup(groupName, group, false); //是否覆盖已经存在的同名资源组,默认 false
            return groupName;
        }
    };
    /**
     * 资源组加载完成
     */
    ResUtils.prototype.onResourceLoadComplete = function (event) {
        var groupName = event.groupName;
        console.log("资源组加载完成:" + groupName);
        if (this.groups[groupName]) {
            var loadComplete = this.groups[groupName][0];
            var loadCompleteTarget = this.groups[groupName][2];
            if (loadComplete != null) {
                loadComplete.call(loadCompleteTarget);
            }
            this.groups[groupName] = null;
            delete this.groups[groupName];
        }
    };
    /**
     * 资源组加载进度
     */
    ResUtils.prototype.onResourceLoadProgress = function (event) {
        var groupName = event.groupName;
        if (this.groups[groupName]) {
            var loadProgress = this.groups[groupName][1];
            var loadProgressTarget = this.groups[groupName][2];
            if (loadProgress != null) {
                loadProgress.call(loadProgressTarget, event);
            }
        }
    };
    /**
     * 资源组加载失败
     */
    ResUtils.prototype.onResourceLoadError = function (event) {
        console.log(event.groupName + "资源组有资源加载失败");
        this.onResourceLoadComplete(event);
    };
    return ResUtils;
}());
__reflect(ResUtils.prototype, "ResUtils");
//# sourceMappingURL=ResUtils.js.map