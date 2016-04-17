System.register(['angular2/core', 'angular2/common', 'angular2/router', './lang.service', './jsandoc-core', './jsandoc.service', './jsandoc-section.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, lang_service_1, jsandoc_core_1, jsandoc_service_1, jsandoc_section_component_1;
    var JsandocNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (jsandoc_core_1_1) {
                jsandoc_core_1 = jsandoc_core_1_1;
            },
            function (jsandoc_service_1_1) {
                jsandoc_service_1 = jsandoc_service_1_1;
            },
            function (jsandoc_section_component_1_1) {
                jsandoc_section_component_1 = jsandoc_section_component_1_1;
            }],
        execute: function() {
            JsandocNewComponent = (function (_super) {
                __extends(JsandocNewComponent, _super);
                function JsandocNewComponent(_langService, _jsandocService, _router, _routeParams) {
                    _super.call(this, _langService, _jsandocService, _router, _routeParams);
                    this._langService = _langService;
                    this._jsandocService = _jsandocService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.hasPermision = true;
                    this.editionActive = false;
                    this.openAll = true;
                    this.collapseAll = false;
                }
                JsandocNewComponent.prototype.ngOnInit = function () {
                    this.getJsandoc(this._routeParams.get('name'));
                };
                JsandocNewComponent = __decorate([
                    core_1.Component({
                        selector: 'jsandoc-new',
                        templateUrl: 'templates/jsandoc-new.html',
                        directives: [
                            jsandoc_section_component_1.JsandocSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            lang_service_1.LangService
                        ]
                    }), 
                    __metadata('design:paramtypes', [lang_service_1.LangService, jsandoc_service_1.JsandocService, router_1.Router, router_1.RouteParams])
                ], JsandocNewComponent);
                return JsandocNewComponent;
            }(jsandoc_core_1.JsandocCore));
            exports_1("JsandocNewComponent", JsandocNewComponent);
        }
    }
});
