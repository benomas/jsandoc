System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JsandocCore;
    return {
        setters:[],
        execute: function() {
            JsandocCore = (function () {
                function JsandocCore(_langService, _jsandocService, _router, _routeParams) {
                    this._langService = _langService;
                    this._jsandocService = _jsandocService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.hasPermision = true;
                    this.editionActive = false;
                    this.openAll = true;
                    this.collapseAll = false;
                }
                JsandocCore.prototype.loadJson = function () {
                    this.jsandoc = {};
                    this.jsandoc = JSON.parse(this.jsonEditor);
                };
                JsandocCore.prototype.getJsandoc = function (urlName) {
                    var _this = this;
                    if (!urlName)
                        return false;
                    this._jsandocService.getJsandoc(urlName).subscribe(function (data) {
                        _this.jsandoc = data;
                    }, function (err) {
                        _this.errorMessage = true;
                    });
                };
                JsandocCore.prototype.setOpenAll = function () {
                    this.openAll = true;
                    this.collapseAll = false;
                };
                JsandocCore.prototype.setCollapseAll = function () {
                    this.openAll = false;
                    this.collapseAll = true;
                };
                JsandocCore.prototype.gotoAction = function (action, param) {
                    var link = [action, { name: param }];
                    this.currentAction = action;
                    this._router.navigate(link);
                };
                return JsandocCore;
            }());
            exports_1("JsandocCore", JsandocCore);
        }
    }
});
