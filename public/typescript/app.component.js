System.register(['angular2/core', 'angular2/common', './jsandoc-home.component', './jsandoc-new.component', './jsandoc-edition.component', './jsandoc-show.component', './jsandoc-shared.component', './lang.service', './jsandoc.service', './jsandoc-section.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, jsandoc_home_component_1, jsandoc_new_component_1, jsandoc_edition_component_1, jsandoc_show_component_1, jsandoc_shared_component_1, lang_service_1, jsandoc_service_1, jsandoc_section_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (jsandoc_home_component_1_1) {
                jsandoc_home_component_1 = jsandoc_home_component_1_1;
            },
            function (jsandoc_new_component_1_1) {
                jsandoc_new_component_1 = jsandoc_new_component_1_1;
            },
            function (jsandoc_edition_component_1_1) {
                jsandoc_edition_component_1 = jsandoc_edition_component_1_1;
            },
            function (jsandoc_show_component_1_1) {
                jsandoc_show_component_1 = jsandoc_show_component_1_1;
            },
            function (jsandoc_shared_component_1_1) {
                jsandoc_shared_component_1 = jsandoc_shared_component_1_1;
            },
            function (lang_service_1_1) {
                lang_service_1 = lang_service_1_1;
            },
            function (jsandoc_service_1_1) {
                jsandoc_service_1 = jsandoc_service_1_1;
            },
            function (jsandoc_section_component_1_1) {
                jsandoc_section_component_1 = jsandoc_section_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_langService, _jsandocService, _router) {
                    this._langService = _langService;
                    this._jsandocService = _jsandocService;
                    this._router = _router;
                    this.currentAction = 'JsandocShared';
                    this.currentParam = '';
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._router.subscribe(function (val) { _this.checkCurrentAction(val); });
                };
                AppComponent.prototype.gotoAction = function (action, param) {
                    var link = [action];
                    if (param)
                        link = [action, { name: param }];
                    this.currentAction = action;
                    this._router.navigate(link);
                };
                AppComponent.prototype.checkCurrentAction = function (toNavitage) {
                    var str = toNavitage;
                    if (/shared\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'JsandocShared';
                    }
                    if (/show\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'JsandocShow';
                    }
                    if (/edit\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'JsandocEdit';
                    }
                    if (/home\/.+/.test(str)) {
                        this.currentParam = 'beny';
                        return this.currentAction = 'JsandocHome';
                    }
                    if (/home\//.test(str)) {
                        this.currentParam = '';
                        return this.currentAction = 'JsandocHome2';
                    }
                    if (/new\//.test(str)) {
                        this.currentParam = '';
                        return this.currentAction = 'JsandocNew';
                    }
                    return this.currentAction = 'JsandocHome';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'templates/app-component.html',
                        directives: [
                            jsandoc_home_component_1.JsandocHomeComponent,
                            jsandoc_new_component_1.JsandocNewComponent,
                            jsandoc_edition_component_1.JsandocEditionComponent,
                            jsandoc_show_component_1.JsandocShowComponent,
                            jsandoc_shared_component_1.JsandocSharedComponent,
                            router_1.ROUTER_DIRECTIVES,
                            jsandoc_section_component_1.JsandocSectionComponent
                        ],
                        providers: [
                            common_1.NgClass,
                            router_1.ROUTER_PROVIDERS,
                            lang_service_1.LangService
                        ]
                    }),
                    router_1.RouteConfig([{
                            path: '/',
                            name: 'JsandocHome',
                            component: jsandoc_home_component_1.JsandocHomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: 'new/',
                            name: 'JsandocNew',
                            component: jsandoc_new_component_1.JsandocNewComponent
                        },
                        {
                            path: 'edit/:name',
                            name: 'JsandocEdit',
                            component: jsandoc_edition_component_1.JsandocEditionComponent,
                        },
                        {
                            path: 'show/:name',
                            name: 'JsandocShow',
                            component: jsandoc_show_component_1.JsandocShowComponent
                        },
                        {
                            path: 'shared/:name',
                            name: 'JsandocShared',
                            component: jsandoc_shared_component_1.JsandocSharedComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [lang_service_1.LangService, jsandoc_service_1.JsandocService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
