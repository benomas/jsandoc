System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var JsandocCore;
    return {
        setters:[],
        execute: function() {
            JsandocCore = (function () {
                function JsandocCore(_langService, _docService, _userService, _router, _routeParams) {
                    this._langService = _langService;
                    this._docService = _docService;
                    this._userService = _userService;
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
                JsandocCore.prototype.getJsandoc = function (user_namespace, doc_namespace) {
                    var _this = this;
                    if (!user_namespace)
                        return false;
                    this._docService.getDoc(user_namespace, doc_namespace).subscribe(function (data) {
                        _this.jsandoc = data;
                    }, function (err) {
                        _this.errorMessage = true;
                    });
                };
                JsandocCore.prototype.getUserDocs = function () {
                    var _this = this;
                    this._userService.getUserDocs().subscribe(function (data) {
                        _this.userDocs = data;
                    }, function (err) {
                        _this.errorMessage = true;
                    });
                };
                JsandocCore.prototype.getUserProfile = function () {
                    var _this = this;
                    this._userService.getUserProfile().subscribe(function (data) {
                        _this.userProfile = data;
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
                JsandocCore.prototype.gotoAction = function (action, user_namespace, doc_namespace) {
                    var link = [action, {}];
                    if (typeof user_namespace !== 'undefined' && typeof user_namespace !== 'object')
                        link[1]['user_namespace'] = user_namespace;
                    if (typeof doc_namespace !== 'undefined' && typeof doc_namespace !== 'object')
                        link[1]['doc_namespace'] = doc_namespace;
                    this.currentAction = action;
                    this._router.navigate(link);
                };
                return JsandocCore;
            }());
            exports_1("JsandocCore", JsandocCore);
        }
    }
});
